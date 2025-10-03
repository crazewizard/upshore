import { TestimonialCard } from "./TestimonialCard";
import { Bars } from "~/primitives/Bars";
import testimonialData from "~/data/Testimonials.json";
import { For, Signal, createSignal, onMount } from "solid-js";

const [duration, setDuration] = createSignal(30);

//onMount(()=> setDuration(window.innerWidth < 640 ? 20 : 20));

const testimonialWidth = ((360 + 16) * testimonialData.testimonials.length * 2) + 16 ;

export function TestimonialSection () {
    return (
        <div class="flex flex-col gap-8 w-full  pb-16">
            
            <h2 class="!text-[56px] md:!text-[80px] no-line-height">Our Clients Stories</h2>
            
            <div class="relative w-[100vw] md:max-w-[2200px] left-1/2 -translate-x-1/2 px-0 md:px-4">
                <div class="w-full overflow-hidden rounded-0 md:rounded-3xl justify-start">
                    <style>{`
                        @keyframes scrollTestimonial {
                            0%{ transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }`}
                    </style>
                    <div    class="flex gap-4 z-30"
                            style = {{width : `${testimonialWidth}px`, "min-width" : `${testimonialWidth}px`,
                                animation: `scrollTestimonial ${duration()}s linear infinite`
                            }}>      
                        <For each={[...testimonialData.testimonials, ...testimonialData.testimonials]}>
                            {(testim) => <TestimonialCard Testimonial={testim}/>}
                        </For>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

//< Bars Style={"h-[40vh] md:h-[50vh]"}/>