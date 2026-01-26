import { Person, Leonardo, Alison } from "../types/Person";
import { DynamicStyle } from "~/types/DynamicStyle";
import { Signal, createSignal } from "solid-js";
import { A } from "@solidjs/router";

export function Team (){
    return (
        <span class="flex -space-x-4">
            <Avatar Person={Leonardo} Style={"w-16 h-16 bg-accent"}/>
            <Avatar Person={Alison} Style={"w-16 h-16 bg-accent"}/>
        </span>
    );
}

const avatarStyle = "inline-block relative backdrop-blur-sm border border-border rounded-full bg-size-[100%] bg-cover bg-center bg-no-repeat";

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
                        class={`pt-[76px] absolute top-0 left-0 
                                ${showFloating() ? "block" : "hidden pointer-events-none "}
                                `}   
                        >

                    <div class="group relative flex flex-col gap-4 backdrop-blur-sm bg-overlay border border-border items-center
                                w-[300px] md:w-[350px] h-auto rounded-4xl p-6 md:p-8 z-70 fade-down">

                        <A  class="absolute top-4 right-4 md:top-6 md:right-6 border border-white p-2 md:p-3 rounded-full transition-opacity duration-500 opacity-40 hover:opacity-100"
                            href={(props.Person === Leonardo) ? `https://www.${props.Person.Social}` : `/${props.Person.Name}` }
                            /*target="_blank" rel="noopener noreferrer"*/ >
                            <img src="/icons/ArrowUPForward.svg" class="w-6 h-6" alt="Open link"/>
                        </A>

                        <img src={props.Person.Avatar} class="w-[120px] h-[120px]" alt="Team member"/>
                        <h3 class="text-white">{props.Person.Name}</h3>
                        <p class="text-white/60">{props.Person.Title}</p>

                        <a href={`https://www.${props.Person.Social}`} class="flex p-4 gap-2" target="_blank" rel="noopener noreferrer" >
                            <img src="/icons/Linkedin.svg" class="w-[24px] h-[24px]" alt="LinkedIn icon" />
                            <span class=" text-white">Linkedin</span>
                        </a>
                    </div>
                </div>
                    )}
        </span>
    )
}