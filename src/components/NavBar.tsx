import { UpshoreButton } from "~/primitives/UpshoreButton";
import { Menu, showMenu, setShowMenu } from "./Menu";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

export function NavBar() {
    const [open, setOpen] = createSignal(false);
    const openToast = () => {
        setOpen(true);
        const timeout = setTimeout(() => setOpen(false), 1500)
    }

    return (
        <div >
            {showMenu() && (<Menu />)}
            {open() && (
                <div class="fixed top-[64px] left-1/2 -translate-x-1/2 z-10 fade-down bg-card p-4 rounded-2xl backdrop-blur-3xl">
                    <p>Comming soon</p>
                </div>
            )}
            <div class="flex absolute right-4 md:left-1/2 md:-translate-x-1/2 w-auto md:w-[500px] p-2 space-x-2 rounded-[20px] bg-card border border-border backdrop-blur-3xl">
                <A href="/" class="min-w-[48px] h-[48px] border border-border rounded-2xl"><img src="/Upshore-logo.svg" alt="Upshore-logo" class="w-full h-full" /></A>
                <div class="w-full overflow-hidden md:block hidden place-content-around">
                    <h5 class="text-[20px] text-primary!">Upshore studio</h5>
                    <p class="w-full uppercase text-[12px]! text-black/40 dark:text-white/40 overflow-hidden whitespace-nowrap text-ellipsis">WE DESIGN –– BUILD DIGITAL EXPERIENCES / PRODUCTS</p>
                </div>

                <UpshoreButton icon="Language-icon" action={openToast} style={buttonStyle} iconStyle="invertthemeicon" />
                <UpshoreButton icon="Menu-icon" action={() => setShowMenu(!showMenu())} style={buttonStyle} iconStyle="invertthemeicon" />
            </div>
        </div>
    )
}

const buttonStyle = `   group relative min-w-[48px] h-[48px] rounded-xl overflow-hidden 
                        border border-transparent transition-colors transition-border duration-250 ease-linear 
                        hover:bg-disabled hover:border-border active:bg-brand-red cursor-pointer  z-50`;