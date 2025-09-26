import {UpshoreButton} from "~/primitives/UpshoreButton";

export function ContactCTA (){
    return (
        <div class="fixed bottom-4 lg:bottom-6 pulseparent group cursor-pointer
                    left-1/2 -translate-x-1/2 
                    w-full md:w-[300px] z-50 px-4 md:px-0">
            
            <div class="flex p-2 rounded-[20px] bg-black/80 border border-black/10 backdrop-blur-md border-white/20 hover:bg-black/95 transition-bg duration-500">         
                <div class="w-full h-[48px] place-content-around opacity-60 group-hover:opacity-100 transition-opacity duration-500 ease-linear">
                    <h4 class="text-[20px] !text-white text-center cursor-pointer">Let’s work together!</h4>
                </div>

                <button class="min-w-[48px] h-[48px] rounded-xl overflow-hidden red-pulse  cursor-pointer">
                    <img src="/public/icons/Mail-icon.svg" alt="button icon" class="w-full h-full"/>
                </button>
            </div>
        </div>
        
    )
}