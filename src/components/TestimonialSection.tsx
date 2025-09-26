import { TestimonialCard } from "./TestimonialCard";
import { Bars } from "~/primitives/Bars";
import testimonialData from "~/data/Testimonials.json";
import { For } from "solid-js";

export function TestimonialSection () {
    return (
        <div class="flex flex-col gap-8 w-full">
            
            <h2 class="!text-[56px] md:!text-[90px] no-line-height">Our Clients Stories</h2>
        
            <div class="relative w-[100vw] max-w-[2200px] left-1/2 -translate-x-1/2 px-0 md:px-4 pb-16">
                <div class="flex gap-4 w-full overflow-hidden rounded-0 md:rounded-3xl gap-4 z-30">      
                    <For each={testimonialData.testimonials}>
                        {(testim) => <TestimonialCard Testimonial={testim}/>}
                    </For>
                </div>
            </div>
        </div>
    )
}

//< Bars Style={"h-[40vh] md:h-[50vh]"}/>