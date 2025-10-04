import { Service } from "../types/Service";

export function ServiceCard ( props : { Service : Service }) {
    const componentStyle = ` group relative w-full h-[300px] md:h-[400px] text-black hover:text-white active:text-white
                                    bg-black/5 rounded-3xl 
                                    border border-black/10 
                                    place-content-center 
                                    backdrop-blur-3xl cursor-pointer
                                    hover:bg-black/90 active:bg-black/90 transition-bg duration-250`;
    return (
        <div class={`${componentStyle}`}>
            
            <span class="text-2xl text-center opacity-40">re –– Design / Build</span>
            <span class="text-center text-[38px] md:text-[48px] block">{props.Service.Title}</span>
            <div class="absolute top-6 right-6 md:top-8 md:right-8 border border-black p-2 md:p-4 rounded-full opacity-50 group-active:border-white group-hover:border-white hover:opacity-100 transition-opacity duration-500">
                <img src="/public/icons/ArrowUPForward.svg" class="invert group-hover:invert-0 group-active:invert-0" />
            </div>
            
        </div>
    )
}