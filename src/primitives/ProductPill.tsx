import { For } from "solid-js";
import { createSignal } from "solid-js";

const productPillData = ["Mobile App", "SASS", "Landing Page"];
export const [productPill, setProductPill] = createSignal(productPillData[0]);

export function ProductPill() {
    
    function Pill(props: { pill: string }) {
        const pillStyle = "flex w-full gap-2 px-4 py-3 border border-white/10 rounded-xl items-center";
        return (
            <button class={pillStyle}
                onclick={() => setProductPill(props.pill)}
                classList={{
                    "bg-[#256AF4] text-white": productPill() === props.pill,
                    "bg-transparent text-white/60": productPill() !== props.pill
                }}>
                {props.pill}
            </button>
        )
    }
    //Returning the chain of Pills
    return (
       <div class="flex gap-4 w-full">
        <For each={productPillData}>
            {(pill) => <Pill pill={pill}/>}
       </For>
       </div>
    )
}