import { Signal, createSignal, onCleanup } from "solid-js"
import PillSelector from "~/primitives/PillSelector";
import { UpshoreButton } from "~/primitives/UpshoreButton";

export const [showForm, setShowForm] = createSignal(false);

export function ContactForm () {

    const parentFormStyle = "absolute bottom-[64px] p-4 left-1/2 -translate-x-1/2 z-10 w-full md:w-auto fade-up";
    const formStyle = "group flex flex-col gap-4 bg-black/90 backdrop-blur-sm items-center w-full md:w-[500px] h-auto rounded-4xl p-4 border border-white/10";
    const closeStyle = "absolute w-8 h-8 top-4 right-4 p-1 border border-white opacity-20 rounded-full hover:opacity-50";
    return (
        <div class={parentFormStyle}>
            {showForm() && (
                <div class={formStyle}>
                    <UpshoreButton icon="Close" action={()=>setShowForm(false)} style={closeStyle}/>
                    <PillSelector />
                    some text
                    <h1>some text</h1>
                </div>
            )}
        </div>
    )
}