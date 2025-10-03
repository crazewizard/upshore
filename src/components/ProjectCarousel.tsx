import { ProjectCard, cardWidth } from "./ProjectCard";
import { createEffect, For, onCleanup, onMount, } from "solid-js";
import rawProjectData from "~/data/Projects.json";
import { Project } from "~/types/Project";

const projectData : { projects: Project[] } = rawProjectData;

export function ProjectCarousel () {

    const slideWidth = cardWidth() ;
    const gap = 16 ;
    const totalSlides = projectData.projects.length ;
    const duration = 3000 ;
    const intervalTime = 5000 ;
    const carouselWidth = (totalSlides * 2) * (slideWidth + gap);

    let slideRef : HTMLDivElement | undefined;
    let index = 0;
    let interval : number | undefined;

    function moveSlide () {
        if (!slideRef) return ;
        index++ ;

        const translationValue = index * (slideWidth + gap);

        slideRef.style.transform = `translateX(-${translationValue}px)`;
        slideRef.style.transition = `transform ${duration}ms ease-in-out`;

        if (index === totalSlides) {
            setTimeout(() => {
                if (!slideRef) return;
                slideRef.style.transition = 'none';
                index = 0;
                slideRef.style.transform = `translateX(0px)`;
            }, duration);
        }
    }     
    
    onMount (()=>{moveSlide()});

    const startSlide = () => {
        moveSlide();
        interval = setInterval(moveSlide, intervalTime);
    }

    const stopSlide = () => {
        if(interval) clearInterval(interval);
    }

    startSlide();
    onCleanup(() => stopSlide());

    return(
        <div class="relative w-[100vw] max-w-[2200px] left-1/2 -translate-x-1/2 px-4 md:px-4 overflow-hidden">

            <div class="w-full md:overflow-hidden rounded-0 md:rounded-3xl" >
                <div    class = "flex gap-4"
                        ref = {slideRef!}
                        onMouseEnter={stopSlide}
                        onMouseLeave={startSlide}
                        style = {{ width: `${carouselWidth}px` }}>
                    <For each={[...projectData.projects, ...projectData.projects]}>
                        {(project) => <ProjectCard project={project} size={{"max-width" : `${cardWidth()}px` , "min-width": `${cardWidth()}px`}} />}
                    </For>
                </div>
            </div>   
        </div>
    )
    
}
