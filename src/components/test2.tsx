/*

import { ProjectCard, cardWidth } from "./ProjectCard";
import { For, createSignal, onCleanup, } from "solid-js";
import rawProjectData from "~/data/Projects.json";
import { Project } from "~/types/Project";

const projectData : { projects: Project[] } = rawProjectData;

export function ProjectCarousel () {

    const slideWidth = cardWidth() ;
    const gap = 16 ;
    const totalSlides = projectData.projects.length ;

    let interval : number | undefined ;
    
    const carouselWidth = (totalSlides * 2) * (slideWidth + gap);
    const speed = carouselWidth/80 ;
    console.log(carouselWidth);
    return(
        <div class="relative w-[100vw] max-w-[2200px] left-1/2 -translate-x-1/2 px-0 md:px-4 ">

            <div    class="w-full overflow-hidden rounded-0 md:rounded-3xl"
                    >
                <style>
                    {`  .carousel {
                            display: flex;
                            gap: 16px; 
                            animation: scroll 100s linear infinite;
                            transition: all 2s ease;
                        }
                        .carousel:hover {
                            animation-play-state: paused;
                        }
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-100%); }
                    }`
                    }
                </style>
                <div    class = "carousel"
                        style = {{
                            width: `${carouselWidth}px`,
                        }}>
                    <For each={[...projectData.projects, ...projectData.projects, ...projectData.projects, ...projectData.projects]}>
                        {(project) => <ProjectCard project={project}/>}
                    </For>
                </div>
            </div>   
        </div>
    )
}
    
/*
<div class="w-full">
            <img src="/public/images/Default-Project.png" class="bg-center object-cover rounded-2xl w-full h-[650px]" />
        </div>
        */