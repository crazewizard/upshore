import { UpshoreButton } from "~/primitives/UpshoreButton";
import { Menu, showMenu, setShowMenu} from "./Menu";
import { A } from "@solidjs/router";

export function NavBar () {
    return (
        <div >
            {showMenu() && (<Menu />)}  
            <div class="flex absolute right-4 md:left-1/2 md:-translate-x-1/2 w-auto md:w-[500px] p-2 space-x-2 rounded-[20px] bg-white border border-black/10">
                <A href="/" class="min-w-[48px] h-[48px]"><img src="/Upshore-logo.svg" alt="Upshore-logo" class="w-full h-full"/></A>
                <div class="w-full overflow-hidden md:block hidden place-content-around">
                    <h5 class="text-[20px] !text-black">Upshore studio</h5>
                    <p class="w-full uppercase !text-[12px] text-gray-300 overflow-hidden whitespace-nowrap text-ellipsis">WE DESIGN –– BUILD DIGITAL EXPERIENCES / PRODUCTS</p>
                </div>

                <UpshoreButton icon="Language-icon" action="" style={buttonStyle}/>
                <UpshoreButton icon="Menu-icon" action={()=> setShowMenu(!showMenu())} style={buttonStyle}/>
            </div>
        </div>
    )
}

const buttonStyle = `   group relative min-w-[48px] h-[48px] rounded-xl overflow-hidden 
                        border border-transparent transition-colors transition-border duration-250 ease-linear 
                        hover:bg-black/10 hover:border-black/10 active:bg-[#F24347] cursor-pointer  z-50`;