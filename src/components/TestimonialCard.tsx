import { Testimonial } from "../types/Testimonial";

export function TestimonialCard (props: { Testimonial : Testimonial }) {
    return (
        <div class="flex flex-col min-w-[360px] h-[450px] bg-white border border-black/10 rounded-3xl p-6 gap-10">
            <div class="w-full flex justify-between items-center">
                <img class="w-[64px] rounded-full bg-black/5 border border-black/10" src={props.Testimonial.avatar} />
                <img class="w-[160px]" src={props.Testimonial.company} />
            </div>
            <div class="h-full flex flex-col gap-6">
                <img class="w-10 opacity-10" src="/public/icons/Guillemets.svg" />
                <p class="!text-[24px]">{props.Testimonial.description}</p>
            </div>
            
            
            <div class="content-end pl-4 border-l-2 border-black/10">
                <h4>{props.Testimonial.name}</h4>
                <p class="text-black/40">{props.Testimonial.position}</p>
                <p class="text-black/40">{props.Testimonial.country}</p>
            </div>
        </div>
    )
}