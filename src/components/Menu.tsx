import { UpshoreButton } from "~/primitives/UpshoreButton";
import { Signal, createSignal } from "solid-js";
import { MenuLink, Work , Studio } from "~/types/MenuLink";

const MenuItem = (props: {Link : MenuLink}) => {
        const style = "flex  w-full p-2 space-x-2 rounded-[20px] border border-white/10 transition-colors duration-250 ease-linear hover:bg-white/10";
        return(
            <div class={`${style}`}>
                <img src="/Upshore-logo.svg" alt="Upshore-logo" />
                <div class="w-full overflow-hidden place-content-around">
                    <h5 class="text-[20px] !text-white">{props.Link.Label}</h5>
                    <p class="w-full uppercase !text-[12px] text-white/60 overflow-hidden whitespace-nowrap text-ellipsis">
                        {props.Link.Description}
                    </p>
                </div>
                <UpshoreButton icon="ArrowForward" action="" />
            </div>
        )
    }

export function Menu () {
    const menuStyle = "absolute top-0 pt-[96px] p-4 left-1/2 -translate-x-1/2 z-10 w-full md:w-auto";

    return (
        <div    onMouseEnter={()=>setShowMenu(true)}
                onMouseLeave={()=>setShowMenu(false)}
                class={`${menuStyle}
                        ${showMenu()? "block" : "hidden" }
                `}>
            <div class="group flex flex-col gap-4 bg-black/90 backdrop-blur-sm items-center
                        w-full md:w-[500px] h-auto rounded-4xl p-4 border border-white/10 fade-in">
                <MenuItem Link={Work} />
                <MenuItem Link={Studio} />
                <div class="flex gap-2">
                    <a href="" class="flex p-4 gap-2" >
                        <img src="/icons/LinkedIn.svg" class="w-[24px] h-[24px]" />
                        <span class=" text-white">LinkedIn</span>
                    </a>
                    <a href="" class="flex p-4 gap-2" >
                        <img src="/icons/LinkedIn.svg" class="w-[24px] h-[24px]" />
                        <span class=" text-white">LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export const [showMenu, setShowMenu] = createSignal(false);