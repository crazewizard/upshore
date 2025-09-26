import { Project } from "../types/Project";
import { createSignal, onMount, onCleanup } from "solid-js";

export const [cardWidth, setCardWidth] = createSignal (600);

onMount(() => setCardWidth (window.innerWidth < 640 ? 360 : 600));

export function ProjectCard ( props: { project: Project}) {
    return (
        <div    class="group flex relative backdrop-blur-sm border-2 border-black/20 hover:border-black/50
                    h-[500px] md:h-[640px]
                    rounded-4xl  overflow-hidden  items-baseline-last
                    "
                style={{ width: `${cardWidth()}px` , "min-width": `${cardWidth()}px`}}
                    >
            <img src={`/projects/${props.project.coverImage}.png`} class="absolute w-[102%] h-[102%] -z-10 object-cover group-hover:scale-105 transition-scale duration-500"/>

            <span class="absolute top-6 left-6 md:top-8 md:left-8 font-[DS-Digital] text-5xl text-white">
                {props.project.year}
            </span>

            <div class="absolute top-6 right-6 md:top-8 md:right-8 text-5xl border border-white p-3 md:p-4 rounded-full opacity-30 hover:opacity-100 transition-opacity duration-500">
                <img src="/icons/ArrowUPForward.svg" />
            </div>
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