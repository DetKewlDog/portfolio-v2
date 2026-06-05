<script lang='ts'>
	import { onMount } from "svelte";
  import { cubicInOut } from "svelte/easing";
  import { scale, type ScaleParams } from "svelte/transition";

	import { projects, employments, educations } from "$lib/consts";
	import TreeContainer from "../tree/TreeContainer.svelte";
	import { ProjectStatus, type EducationEntry, type EmploymentEntry, type ProjectEntry } from "$lib/types";
	import type { Branch, Node } from "../tree/types";

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });

	const scaleTransitionTitle: ScaleParams = {
    delay: 300, duration: 400, easing: cubicInOut, opacity: 0, start: 0.85
  };
  
  function createProject(project: ProjectEntry, branchName: string): Node {
    return { branchName, date: project.startDate, value: project, title: project.title };
  }
  
  function createProjects(projectIds: (keyof typeof projects)[], branchName: string): Node[] {
    return projectIds.map(projectId => createProject(projects[projectId], branchName));
  }

  function createBranches(
    branchType: 'employment' | 'education' | 'master',
    collection: Record<string, EmploymentEntry> | Record<string, EducationEntry>,
    startTitle: (title: string) => string,
    endTitle: (title: string) => string
  ) {
    return Object.entries(
      collection as Record<string, EmploymentEntry | EducationEntry>
    ).map<Branch>(([key, value]) => {
      const branchName = `${branchType}/${key.replaceAll('_', '-')}`;
      return { 
        title: value.title,
        startDate: value.startDate,
        endDate: value.endDate,
        name: branchName,
        children: createProjects(value.projects, branchName),
        value,
        startTitle: startTitle(value.title),
        endTitle: endTitle(value.title),
      };
    });
  }
  
  const nonOrphanedProjects = new Set([
    ...Object.values(employments).flatMap(item => item.projects),
    ...Object.values(educations).flatMap(item => item.projects)
  ]);
  const orphanedProjects = [
    ...new Set(Object.keys(projects) as (keyof typeof projects)[])
    .difference(nonOrphanedProjects)
  ];
  
  const branches: Branch[] = [
    ...createBranches(
      'employment',
      employments,
      title => `Started working at ${title}`,
      title => `Finished working at ${title}`
    ),
    ...createBranches(
      'education',
      educations,
      title => `Started studying at ${title}`,
      title => `Finished studying at ${title}`
    ),
    {
      title: 'Master',
      startDate: null,
      endDate: null,
      name: 'master',
      children: createProjects(orphanedProjects, 'master'),
      value: null,
      isMaster: true
    }
  ];

  const maxDate = new Date(864e13);

  const allBranches = branches.flatMap(branch => {
    const newBranches: Branch[] = [];
    const newChildren: Node[] = [];

    branch.children.sort((a, b) => a.date.getTime() - b.date.getTime()).forEach((node, index, arr) => {
      const project = node.value as ProjectEntry;

      if (index + 1 < arr.length) {
        const nextProject = arr[index + 1].value as ProjectEntry;

        const projectEndDate = project.endDate ?? maxDate;
        const branchEndDate = branch.endDate ?? maxDate;

        if (nextProject.startDate < projectEndDate) {
          const projectId = (Object.keys(projects) as (keyof typeof projects)[])
            .find(projectId => projects[projectId].title === project.title);

          newBranches.push({
            title: project.title,
            startDate: project.startDate,
            endDate: new Date(Math.min(projectEndDate.getTime(), branchEndDate.getTime())),
            value: project,
            name: branch.isMaster ? `project/${projectId?.replaceAll('_', '-')}` : branch.name,
            children: [],
            startTitle: `Started working on ${project.title}`,
            endTitle: project.status === ProjectStatus.Inactive
              ? `Stopped working on ${project.title}`
              : `Finished working on ${project.title}`,
            isStale: project.status === ProjectStatus.Inactive
          });
          return;
        }
      }

      newChildren.push(node);
    });

    branch.children = newChildren;
    return [branch, ...newBranches];
  });

</script>

{#if mounted}
<div class='tree-section'>
  <p class='title-text' transition:scale={scaleTransitionTitle}>
		The journey so far.
	</p>

  <div class='tree-container'>
    <TreeContainer branches={allBranches} importantBranches={['employment', 'education']} />
  </div>
</div>
{/if}

<style lang='postcss'>
  .tree-section {
    @apply w-full flex flex-col my-auto min-h-svh
      max-md:py-2 max-lg:py-4 py-6
      max-md:px-0 max-lg:px-12 px-32;
  }

  .about-title p {
    @apply whitespace-nowrap text-nowrap drop-shadow-lg
      transition-all duration-300 ease-in-out px-3;
  }

  .title-text {
    @apply font-switzer font-bold pb-4 origin-center
      max-md:text-3xl max-lg:text-4xl text-6xl w-fit
      !bg-clip-text text-transparent relative z-20
      transition-all duration-300 ease-in-out;
    background: linear-gradient(90deg, #f97316, #faad28, #f97316);
    background-size: 200% 200%;
    animation: anim-gradient 2s linear infinite forwards;
  }

  .mono-text {
    @apply font-firacode font-semibold relative z-10 w-fit;
    text-shadow: 4px 4px 4px #00000080;
  }

  .tree-container {
    @apply w-full h-full p-3 !scroll-smooth transition-all duration-300;
  }

  @keyframes anim-gradient {
    0% { background-position: 0 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 200% 50%; }
  }
</style>