import { Signal, createSignal, onCleanup,onMount } from "solid-js"
import { PillSelector, packageOption} from "~/primitives/PillSelector";
import { UpshoreButton } from "~/primitives/UpshoreButton";
import { Form } from "./Form";

export const [showForm, setShowForm] = createSignal(false);

export function ContactForm () {

    onMount (() => {
        const handleOutside = (e: MouseEvent | TouchEvent ) => {
            const form = document.getElementById("form");
            const target = e.target as Node | null;
            
            if (form && target && !form.contains(target)) {
                setShowForm(false);
            }
        }
        document.addEventListener("mousedown", handleOutside);

        onCleanup(() => {
            document.removeEventListener("mousedown", handleOutside);
        })
    })

    const parentFormStyle = "absolute bottom-[64px] p-4 left-1/2 -translate-x-1/2 z-10 w-full md:w-auto fade-up";
    const formStyle = "group flex flex-col gap-4 bg-black/90 backdrop-blur-xl items-start w-full md:w-[600px] h-auto rounded-4xl p-6 border border-white/10";
    const closeStyle = "absolute w-8 h-8 top-6 right-6 p-1 border border-white opacity-20 rounded-full hover:opacity-50";
    const h1Style = "text-white/60 text-[48px] transtision duration-500";
    
    return (
        <div id="from" class={parentFormStyle}>
            {showForm() && (
                <div class={formStyle}>
                    <UpshoreButton icon="Close" action={()=>setShowForm(false)} style={closeStyle}/>
                    <PillSelector />
                    <h1 class={h1Style}>Let's <span class="text-white/80 group-hover:text-white transtision duration-1000">{packageOption()}</span> Something Great Together</h1>
                    <Form />
                </div>
            )}
        </div>
    )
}