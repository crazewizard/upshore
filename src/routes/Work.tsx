import { For } from "solid-js";
import { ProjectCard } from "~/components/ProjectCard";
import rawProjectData from "~/data/Projects.json";
import { Project } from "~/types/Project";
import { PageHeader } from "~/components/PageHeader";

const projectData : {projects:Project[]} = rawProjectData;

export default function Work () {
    const parentStyle = "flex flex-col w-full max-w-[3000px] justify-center mt-32 mx-auto";

    return (
        <div class={parentStyle}>
            <PageHeader title="Our Work" />
            <div class="flex flex-wrap w-full gap-4 py-8 mx-auto justify-center">
                <For each={projectData.projects}>
                    {(work) => <ProjectCard project={work} class="w-full md:max-w-[510px]" />}
                </For>
            </div>
        </div>
    )
}