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

    let slideRef: HTMLDivElement | undefined ;
    let index = 0 ;
    let interval : number | undefined ;
    const duration = 2500 ;
    const intervalTime = 3700;

    const startAutoSlide = () => { interval = setInterval(moveSlide, intervalTime)};
    const stopAutoSlide = () => { if (interval) clearInterval(interval)};

    const moveSlide = () => {
        if (!slideRef) return;
        index++ ;

        const translationValue = index * (slideWidth + gap);

        slideRef.style.transform = `translateX(-${translationValue}px)`;
        slideRef.style.transition = `transform ${duration}ms ease-in-out`;

        if (index === totalSlides) {
            setTimeout(() => {
                if (!slideRef) return;
                slideRef.style.transition = 'none' ;
                index = 0;
                slideRef.style.transform = `translateX(0px)`;
            }, duration);
        }
    }

    //const interval = setInterval(moveSlide, intervalTime);
    startAutoSlide();
    const carouselWidth = (totalSlides * 2) * (slideWidth + gap);
    onCleanup(() => clearInterval(interval));

    return(
        <div class="relative w-[100vw] max-w-[2200px] left-1/2 -translate-x-1/2 px-0 md:px-4 ">
            <div    class="w-full overflow-hidden rounded-0 md:rounded-3xl"
                    onMouseEnter={stopAutoSlide}
                    onMouseLeave={startAutoSlide}>
                <div    class = "flex gap-4"
                        ref = {slideRef!}
                        style = {{
                            width: `${carouselWidth}px`
                        }}>
                    <For each={[...projectData.projects, ...projectData.projects]}>
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