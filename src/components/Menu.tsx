import { UpshoreButton } from "~/primitives/UpshoreButton";
import { Signal, createSignal, onCleanup, onMount } from "solid-js";
import { MenuLink,Home, Work, Studio } from "~/types/MenuLink";
import { A } from "@solidjs/router";
import { setShowForm } from "./ContactForm";

export const [showMenu, setShowMenu] = createSignal(false);

export function Menu() {
    const parentStyle = "absolute top-[64px] p-8 left-1/2 -translate-x-1/2 z-10 w-full md:w-auto fade-down";

    onMount(() => {
        const handleScroll = () => {
            setShowMenu(false);
        }
        document.addEventListener("scroll", handleScroll);

        onCleanup(() => {
            document.removeEventListener("scroll", handleScroll);
        })
    })

    return (
        <div onMouseLeave={() => setShowMenu(false)}
            id="menu"
            class={parentStyle}>
            {showMenu() && (
                <div class="group flex flex-col gap-4 bg-black/90 backdrop-blur-sm items-center
                        w-full md:w-[500px] h-auto rounded-4xl p-4 border border-white/10">
                    <MenuItem Link={Home} />
                    <MenuItem Link={Work} />
                    <MenuItem Link={Studio} />

                    <a onclick={()=> setShowForm(true)} class="flex w-full px-4 py-2 gap-1 items-center justify-center hover:bg-[#F24347] rounded-2xl transition-colors duration-500 border border-transparent hover:border-white/10" >
                            <img src="/icons/Emoji.png" class="w-[32px] h-[32px]" />
                            <span class=" text-white">Get in touch</span>
                    </a>
                    {/* 
                    <div class="flex gap-2">
                        <a href="" class="flex p-4 gap-2" >
                            <img src="/icons/LinkedIn.svg" class="w-[24px] h-[24px]" />
                            <span class=" text-white">LinkedIn</span>
                        </a>
                        <a href="" class="flex p-4 gap-2" >
                            <img src="/icons/LinkedIn.svg" class="w-[24px] h-[24px]" />
                            <span class=" text-white">LinkedIn</span>
                        </a>
                    </div>*/}
                </div>
            )}
        </div>
    );
}



const MenuItem = (props: { Link: MenuLink }) => {
    const style = "flex  w-full p-2 space-x-2 rounded-[20px] border border-white/10 transition-colors duration-250 ease-linear hover:bg-[#256AF4]";
    return (
        <A href={`/${props.Link.link}`} class={`${style}`}>
                <img src={`/icons/${props.Link.title}.svg`} />
                <div class="w-full overflow-hidden place-content-around">
                    <h5 class="text-[20px] !text-white">{props.Link.title}</h5>
                    <p class="w-full uppercase !text-[12px] text-white/30 overflow-hidden whitespace-nowrap text-ellipsis">
                        {props.Link.description}
                    </p>
                </div>
                <UpshoreButton icon="ArrowForward" action="" style="" />
        </A>

    )
}

/*
onMount (() => {
            const handleOutside = (e: MouseEvent | TouchEvent ) => {
                const menu = document.getElementById("menu");
                const target = e.target as Node | null;
    
                if (menu && target && !menu.contains(target)) {
                    setShowMenu(false);
                }
            }
            const handleScroll = () => {
                setShowMenu(false);
            }
            document.addEventListener("mousedown", handleOutside);
            document.addEventListener("touchstart", handleOutside);
            document.addEventListener("scroll", handleScroll);

            onCleanup(() => {
                document.removeEventListener("mousedown", handleOutside);
                document.removeEventListener("touchstart", handleOutside);
                document.removeEventListener("scroll", handleScroll);
            })
        })
    
*/