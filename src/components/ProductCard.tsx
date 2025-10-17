import { setShowForm } from "./ContactForm";
import { activeRadio, setActiveRadio} from "./Form";
import { setServicePill, servicePillData } from "./Form";

export function ProductCard ( props : { service : string }) {
    const componentStyle = ` group relative flex flex-col gap-4 w-full h-[300px] md:h-[400px] text-primary hover:text-white active:text-white
                                    bg-accent rounded-3xl 
                                    border border-border 
                                    place-content-center 
                                    backdrop-blur-3xl cursor-pointer
                                    hover:bg-brand-blue active:bg-tertiary transition-bg duration-250`;
    return (
        <div class={componentStyle}
                onclick={()=> {
                    setActiveRadio(props.service);
                    setServicePill(servicePillData[0]);
                    setShowForm(true);
                }}>
            
            <span class="text-2xl text-center opacity-40">re –– Design / Build</span>
            <span class="text-center text-[38px] md:text-[48px] block no-line-height">{props.service}</span>
            <div class="absolute top-6 right-6 md:top-8 md:right-8 border border-border p-2 md:p-4 rounded-full opacity-50 group-active:border-border group-hover:border-white hover:opacity-100 transition-opacity duration-500">
                <img src="/public/icons/ArrowUPForward.svg" class="invert group-hover:invert-0 group-active:invert-0" />
            </div>
            
        </div>
    )
}