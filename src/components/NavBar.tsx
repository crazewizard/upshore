import { UpshoreButton } from "~/primitives/UpshoreButton";
import { Menu, showMenu, setShowMenu} from "./Menu";

export function NavBar () {
    return (
        <div >
            {showMenu() && (<Menu />)}  
            <div class="flex absolute right-4 md:left-1/2 md:-translate-x-1/2 w-auto md:w-[500px] p-2 space-x-2 rounded-[20px] bg-white border border-black/10">
                <img src="/Upshore-logo.svg" alt="Upshore-logo" />
                <div class="w-full overflow-hidden md:block hidden place-content-around">
                    <h5 class="text-[20px] !text-black">Upshore studio</h5>
                    <p class="w-full uppercase !text-[12px] text-gray-300 overflow-hidden whitespace-nowrap text-ellipsis">WE DESIGN AND BUILD DIGITAL PRODUCTS –– EXPERIENCES THAT WIN HEARTS</p>
                </div>

                <UpshoreButton icon="Language-icon" action=""/>
                <UpshoreButton icon="Menu-icon" action={()=>setShowMenu(true)}/>
            </div>
        </div>
    )
}