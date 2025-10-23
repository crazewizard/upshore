import { Testimonial } from "~/types/Testimonial";
import * as Companies from "~/companies"
import { Company } from "~/primitives/Company";

export function TestimonialCard (props: { Testimonial : Testimonial }) {
    return (
        <div class="flex flex-col min-w-[360px] h-[450px] bg-card border border-border rounded-3xl p-6 gap-10">
            <div class="w-full flex justify-between items-center">
                <img class="w-[64px] rounded-full bg-accent border border-border" src={props.Testimonial.avatar} />
                {/*<img class="w-[160px]" src={props.Testimonial.company} />*/}
                <Company company={Companies[props.Testimonial.company as keyof typeof Companies]} size="w-[160px] min-w-[64px] md:min-w-[64px] max-w-[200px]"/>
            </div>
            <div class="h-full flex flex-col gap-6">
                {/* <img class="w-10 opacity-10" src="/public/icons/Guillemets.svg" /> */}
                <span class="no-line-height text-8xl opacity-30 h-10">"</span>
                <p class="!text-[24px]">{props.Testimonial.description}</p>
            </div>
            
            
            <div class="content-end pl-4 border-l-2 border-border">
                <h4>{props.Testimonial.name}</h4>
                <p class="text-secondary">{props.Testimonial.position}</p>
                <p class="text-secondary">{props.Testimonial.country}</p>
            </div>
        </div>
    )
}