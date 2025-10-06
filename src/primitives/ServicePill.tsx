import { Signal, createSignal, For } from "solid-js";

// Dynamic Data
const servicePillData = [ "Design + Build","Design","Build" ];  

// Creating the signal
export const [servicePill, setServicePill] = createSignal(servicePillData[0]);

export function ServicePill () {
    // Pill Style
    const selectorStyle ="flex border border-white/10 rounded-2xl overflow-hidden";
    
    // Creating the Pill
    const Pill = (props : { pill : string } ) => {
        const pillStyle = "text-[16px] py-2 px-4 md:px-5 cursor-pointer transition-bg duration-250";
        return (
            <button class={pillStyle}
                    onClick={() => setServicePill(props.pill)}
                    classList={{
                        "bg-[#256AF4] text-white shadow-2xl shadow-[#256AF4]" : servicePill() === props.pill,
                        "bg-transparent text-white/60 hover:bg-white/10" : servicePill() !== props.pill
                    }}>
                {props.pill}
            </button>
        )
    }
    //Returning the chain of pills
    return(
        <div class={selectorStyle}>
            <For each={servicePillData}>
                {(data) => <Pill pill={data} />}
            </For>
        </div>
    )
}