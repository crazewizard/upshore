import { For } from "solid-js";
import { ProjectCard } from "~/components/ProjectCard";
import rawProjectData from "~/data/Projects.json";
import { Project } from "~/types/Project";

const projectData : {projects:Project[]} = rawProjectData;

export default function Work () {
    return (
        <div class="flex flex-wrap w-full max-w-[3000px] justify-center p-4 mt-20 mx-auto gap-4">
            <For each={projectData.projects}>
                {(work) => <ProjectCard project={work} />}
            </For>
        </div>
    )
}