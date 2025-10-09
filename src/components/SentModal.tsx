import { createEffect, createSignal, onMount } from "solid-js";
import { sent, setSent } from "./Form";
import { setShowForm } from "./ContactForm";

const parentStyle = "fixed top-20 md:bottom-[64px] p-4 left-1/2 -translate-x-1/2 w-full md:w-auto fade-down z-90";
const contentStyle = "flex flex-col gap-4 bg-black/90 backdrop-blur-xl items-center justify-items-center w-full md:w-[300px] h-auto rounded-3xl md:rounded-4xl p-6 md:p-8 border border-white/10 text-white ";

const [sentModal, setSentModal] = createSignal(false);

createEffect (()=>{
    if(!sent()) return;
    const timer1 = setTimeout (()=>setSentModal(true), 500);
    const timer2 = setTimeout (()=> setSentModal(false), 3000);
    const clearTimers = () => {clearTimeout(timer1); clearTimeout(timer2)};
    
    return () => clearTimers();
})

export function SentModal () {

    onMount(()=>{setShowForm(false)});

    return (
        <div class={parentStyle}>
            {sentModal() && <div class={contentStyle}>
                <img src="/icons/Checked.svg" class="w-24 h-24"/>
                <h3 class="!text-[20px]">Email Sent!</h3>
                <p class="mb-2 text-center opacity-60">Thanks for getting in touch. We will get back to you soon.</p>
            </div>}
        </div> 
    )
}