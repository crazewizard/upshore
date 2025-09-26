import { Person, Leonardo, Alison } from "../types/Person";
import { DynamicStyle } from "~/types/DynamicStyle";
import { Signal, createSignal } from "solid-js";

export function Team (){
    return (
        <span class="flex -space-x-4">
            <Avatar Person={Leonardo} Style={"w-16 h-16 bg-black/5"}/>
            <Avatar Person={Alison} Style={"w-16 h-16 bg-black/5"}/>
        </span>
    );
}

const avatarStyle = "inline-block relative backdrop-blur-sm border border-black/10 rounded-full bg-size-[100%] bg-cover bg-center bg-no-repeat";

export function Avatar (props: { Person: Person; Style:DynamicStyle }) {
    const [showFloating, setShowFloating] = createSignal (false);
    return (
        <span   class={`flex ${props.Style} ${avatarStyle}`} 
                style={{ "background-image": `url(${props.Person.Avatar})` }}
                onMouseEnter={() => setShowFloating(true)}
                onMouseLeave={() => setShowFloating(false)}
                >
            { showFloating() && (
                <div    onClick = {()=> setShowFloating(true)}
                        onMouseEnter={() => setShowFloating(true)}   // keep visible when hovering it
                        onMouseLeave={() => setShowFloating(false)}  // hide when leaving it
                        class={`pt-[76px] absolute top-[0px] left-0 
                                ${showFloating() ? "block" : "hidden pointer-events-none "}
                                `}   
                        >

                    <div class="group relative flex flex-col gap-4 backdrop-blur-sm bg-black/90 items-center
                                w-[300px] md:w-[350px] h-[300px] md:h-[360px] rounded-4xl p-6 md:p-8 z-90 fade-in">

                        <a  class="absolute top-4 right-4 md:top-6 md:right-6 border border-white p-2 md:p-3 rounded-full transition-opacity duration-500 opacity-40 hover:opacity-100"
                            href={props.Person.Social} >
                            <img src="/icons/ArrowUPForward.svg" />
                        </a>

                        <img src={props.Person.Avatar} class="w-[120px] h-[120px]" />
                        <h3 class="text-white">{props.Person.Name}</h3>
                        <p class="text-white/60">{props.Person.Title}</p>

                        <a href={props.Person.Social} class="flex p-4 gap-2" >
                            <img src="/icons/LinkedIn.svg" class="w-[24px] h-[24px]" />
                            <span class=" text-white">LinkedIn</span>
                        </a>
                    </div>
                </div>
                    )}
        </span>
    )
}


/*
export default function TeamDetail (props: { Person : Person }) {
    return (
        <div    onMouseEnter={() => setShowFloating(true)}   // keep visible when hovering it
                onMouseLeave={() => setShowFloating(false)}  // hide when leaving it
                class={`pt-[80px] absolute top-[0px] left-0 transition-opacity duration-200
                    ${
                        showFloating() ? "opacity-100" : "opacity-0 pointer-events-none"
                      }
                    `}   
                    >

            <div class="flex flex-col gap-4 bg-black/90 backdrop-blur-sm
                    w-[300px] md:w-[350px] h-[300px] md:h-[360px] rounded-4xl p-6 md:p-8">

                <div class="absolute top-6 right-6 md:top-8 md:right-8 border border-white p-3 md:p-4 rounded-full">
                    <img src="/public/icons/ArrowUPForward.svg" />
                </div>

                <img src={props.Person.Avatar} class="w-[120px] h-[120px]" />
                <h3 class="text-white">{props.Person.Name}</h3>
                <p class=" text-white">{props.Person.Title}</p>

                <a href={props.Person.Social} class="flex p-4 gap-2" >
                    <img src="/public/icons/LinkedIn.svg" class="w-[24px] h-[24px]" />
                    <span class=" text-white">LinkedIn</span>
                </a>
            </div>
        </div>
    )
}*/