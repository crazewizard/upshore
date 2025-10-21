import { Signal, createEffect, createSignal, onCleanup,onMount } from "solid-js"
import { UpshoreButton } from "~/primitives/UpshoreButton";
import { Form, sent } from "./Form";

export const [showForm, setShowForm] = createSignal(false);
const themes = {blue:"#256AF4", red:"#F24347", purple:"#njjn"};
export const [FormTheme, setFormTheme] = createSignal(themes.blue);

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

    const parentFormStyle = "absolute -bottom-4 md:bottom-[64px] p-4 left-1/2 -translate-x-1/2 w-full md:w-auto fade-up z-90";
    const formStyle = "group flex flex-col gap-4 bg-overlay backdrop-blur-xl items-start w-full md:w-[600px] h-auto rounded-3xl md:rounded-4xl p-4 md:p-6 border border-white/10";
    const closeStyle = "absolute w-8 h-8 top-4 right-4 md:top-6 md:right-6 p-1 border border-white opacity-20 rounded-full hover:opacity-50";
    
    return (
        <div id="from" class={parentFormStyle}>
            {showForm() && (
                <div class={formStyle}>
                    <UpshoreButton icon="Close" action={()=>setShowForm(false)} style={closeStyle}/>
                    <Form />
                </div>
            )}
        </div>
    )
}