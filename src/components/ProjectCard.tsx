import { Project } from "../types/Project";
import { createSignal, onMount, onCleanup } from "solid-js";

export const [cardWidth, setCardWidth] = createSignal (360);

onMount(() => setCardWidth (window.innerWidth < 640 ? 360 : 600));

export function ProjectCard ( props: { project: Project, size?:any, class?:string}) {
    return (
        <div    class={`group flex relative backdrop-blur-sm 
                        md:border-1 md:border-border hover:border-tersiary
                        h-[500px] md:h-[640px]
                        rounded-3xl md:rounded-4xl  overflow-hidden 
                        items-baseline-last ${props.class}`}
                    
                style={props.size}
                    >
            <img src={`/projects/${props.project.coverImage}.jpg`} alt={`${props.project.title} project`} class="absolute w-[102%] h-[102%] -z-10 object-cover group-hover:scale-105 transition-scale duration-500"/>

            <span class="absolute top-6 left-6 md:top-8 md:left-8 font-[DS-Digital] text-5xl text-white">
                {props.project.year}
            </span>

            <a  href={`https://${props.project.projectUrl}`} target="_blank" rel="noopener noreferrer"
                class="absolute top-6 right-6 text-5xl border border-white p-3 rounded-full opacity-30 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
                <img src="/icons/ArrowUPForward.svg" alt="close button"/>
            </a>
            
            <div class="p-4 md:p-6 w-full" >
                <div class="p-4 md:p-6 flex flex-col gap-2
                            bg-black/60 
                            backdrop-blur-md
                            rounded-2xl
                            w-full
                            border
                            border-white/10">
                    <h3 class="text-white !text-[24px] md:!text-[28px]">{props.project.title}</h3>
                    <p class="uppercase text-neutral-400 overflow-hidden whitespace-nowrap text-ellipsis">
                        {props.project.description}
                    </p>
                </div>
            </div>
            
        </div>
    )
}