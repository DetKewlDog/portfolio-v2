<script lang='ts'>
	import type { TimelineEntry, WildcardEntry } from "$lib/types";
	import { toDateString } from "$lib/utils";
	import { scale } from "svelte/transition";
	import EducationBox from "../boxes/EducationBox.svelte";
	import EmploymentBox from "../boxes/EmploymentBox.svelte";
	import ProjectBox from "../boxes/ProjectBox.svelte";
	import type { Branch, CellVariants, Node } from "./types";
	import { cubicInOut } from "svelte/easing";
	import CodeCommit from "../icons/CodeCommit.svelte";
	import OpenBook from "../icons/OpenBook.svelte";
	import Briefcase from "../icons/Briefcase.svelte";

  let { branches, importantBranches } : { branches: Branch[], importantBranches: string[] } = $props();

  // nodes are sorted from least recent to most recent
  // need to be reversed in table
  let nodes: Node[] = $derived(
    branches.flatMap<Node>(branch => {
      const nodes = branch.children.map<Node>(node =>
        ({ ...node, branchName: branch.name })
      );

      if (branch.startDate && !branch.isMaster) {
        nodes.push({
          title: branch.startTitle ?? '',
          branchName: branch.name,
          date: branch.startDate,
          value: branch.value,
          isStale: branch.isStale
        });
      }

      if (branch.endDate && !branch.isMaster) {
        nodes.push({
          title: branch.endTitle ?? '',
          branchName: branch.name,
          date: branch.endDate,
          value: branch.value,
          isBranchEnd: true,
          isStale: branch.isStale
        });
      }

      return nodes;
    })
    .sort((a, b) =>
      a.date.getTime() - b.date.getTime()
    )
    .filter(node => node.date.getTime() < new Date().getTime())
  );

  function separateNodesToRows(nodes: Node[], branchCount: number) {
    let activeBranches = new Array<string | null>(branchCount).fill(null);
    activeBranches[0] = 'master';

    const rows: [Node, CellVariants[][], boolean][] = [];
    nodes.forEach((node, index) => {
      let branchIndex = activeBranches.indexOf(node.branchName);
      let [isLineStart, isLineEnd] = [false, false];

      if (branchIndex === -1) {
        branchIndex = activeBranches.indexOf(null);
        activeBranches[branchIndex] = node.branchName;
        isLineStart = true;
      }
      else if (node.isBranchEnd) {
        activeBranches[branchIndex] = null;
        isLineEnd = true;
      }

      const cellVariants: CellVariants[][] = activeBranches.map(branch =>
        branch ? ['line'] : []
      );
      cellVariants[branchIndex].push('node');
      if (branchIndex) {
        if (isLineStart) {
          cellVariants[branchIndex].push('line-start', 'node-shift');
        }
        if (!node.isStale && isLineEnd && index > 0) {
          cellVariants[branchIndex].push('node-shift');
          rows[0][1][branchIndex].push('line-end');
        }
      }

      let shouldBold = (
        (isLineStart || isLineEnd)
        && importantBranches.some(prefix => node.branchName.startsWith(prefix))
      );

      rows.unshift([node, cellVariants, shouldBold]);
    });

    const columnCount = Math.max(...rows.map(row => row[1].findLastIndex(item => item.length))) + 1;
    const lastRowVariants: CellVariants[][] = Array.from({ length: columnCount }, () => []);
    lastRowVariants.at(-1)!.push('line');

    return rows.map<[Node | null, CellVariants[][], boolean]>(([node, cellStates, shouldBold]) =>
      [node, cellStates.slice(1, columnCount).concat([cellStates[0]]), shouldBold]
    ).concat([[null, lastRowVariants, false]]);
  }

  let nodesAsRows = $derived(separateNodesToRows(nodes, branches.length))

  const colorPalette = [
    '#50FA7B',
    '#8BE9FD',
    '#FF79C6',
    '#BD93F9',
    '#FFB86C',
    '#FF5555',
  ];

  let selectedEntry: WildcardEntry | null = $state(null);
</script>

<div class='flex gap-8'>
  <table>
  <tbody>

    {#each nodesAsRows as [node, cellVariants, shouldBold], rowIndex (rowIndex)}
      <tr
				class='tree-row'
				onclick={() => selectedEntry = node?.value as WildcardEntry}
			>
        <td class='w-fit pr-4 text-gray-300' in:scale|global={{
					delay: 400 + rowIndex * 100,
					duration: 400,
					easing: cubicInOut,
					start: 0.85
				}}>
          {#if node}
            {toDateString(node.date)}
          {/if}
        </td>

        {#each cellVariants as variants, index (rowIndex + '-' + index)}
          {@const widthMul =
            variants.includes('line-end') && rowIndex + 1 < nodesAsRows.length
            ? nodesAsRows[rowIndex + 1][1].length - index - 1
            : variants.length - index
          }

          <td class='tree-cell' in:scale|global={{
						delay: 400 + (rowIndex + index + 1) * 100,
						duration: 400,
						easing: cubicInOut,
						start: 0.85
					}}>

            <span
              class="tree-node {variants.join(' ')}"
              style="--w-mul: {widthMul}; --branch-col: {colorPalette[index]}"
            ></span>

          </td>
        {/each}

        {#if node}
					{@const entry = node.value as TimelineEntry}
          <td class='node-title {shouldBold ? 'font-bold' : 'text-[#c8c7c2]'}' in:scale|global={{
						delay: 400 + (rowIndex + cellVariants[0].length + 1) * 100,
						duration: 400,
						easing: cubicInOut,
						start: 0.85
					}}>
						{#if entry.entryType === 'project'}
							<CodeCommit label='Project' size={16} />
						{:else if entry.entryType === 'education'}
							<OpenBook label='Education' size={16} />
						{:else if entry.entryType === 'employment'}
							<Briefcase label='Employment' size={16} />
						{/if}
						{node.title}
          </td>
        {/if}

      </tr>
    {/each}

  </tbody>
  </table>

  <div class='w-[400px] h-fit'>
    {#if selectedEntry?.entryType === 'project'}
      <ProjectBox project={selectedEntry} />
    {:else if selectedEntry?.entryType === 'education'}
      <EducationBox education={selectedEntry} />
    {:else if selectedEntry?.entryType === 'employment'}
      <EmploymentBox employment={selectedEntry} />
    {/if}
  </div>
</div>

<style lang='postcss'>
  .tree-row {
    @apply w-full [&_td]:!p-0 relative font-switzer cursor-pointer align-middle;
  }

	.node-title {
		@apply w-full text-nowrap transition-all duration-300 ease-in-out
			relative flex items-center gap-2 h-8;
	}

	.tree-row:hover .node-title {
		@apply text-[#f97316] translate-x-4;
	}

  .tree-cell {
    @apply w-8 h-8 aspect-square;
  }

  .tree-node {
    @apply block w-full h-full aspect-square relative;
  }

  .tree-node.line::before {
    @apply content-[''] absolute inset-0 -top-4 left-4 w-8 h-8 box-border
      border-l-[3px] border-l-[var(--branch-col)];
  }
  .tree-node.line-start::before {
    @apply content-[''] absolute inset-0 -top-4 left-4 h-8 box-border
      border-b-[3px] border-b-[var(--branch-col)] rounded-bl-lg;
    width: calc(2rem * var(--w-mul));
  }
  .tree-node.line-end::before {
    @apply content-[''] absolute inset-0 -top-4 left-4 h-8 box-border
      border-t-[3px] border-t-[var(--branch-col)] rounded-tl-lg;
    width: calc(2rem * var(--w-mul));
  }

  .tree-node.node::after {
    @apply content-[''] absolute inset-0 top-2 left-2.5 w-4 h-4 z-10
      rounded-full bg-[#0d0d0d] border-2 border-[var(--branch-col)];
  }

  .tree-node.node-shift::after {
    @apply left-6;
  }
</style>