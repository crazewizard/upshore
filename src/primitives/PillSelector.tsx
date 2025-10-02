import { Signal, createSignal, For } from "solid-js";
import { PackageOption} from "~/types/PackageOption";
import { UpshoreButton } from "./UpshoreButton";

// Dynamic Data
const packageOptions= [ { name : "Design + Build"} , 
                        { name : "Design"}, 
                        { name : "Build"} ];  

// Creating the signal
export const [packageOption, setPackageOption] = createSignal(packageOptions[0].name);

export function PillSelector () {
    // Pill Style
    const selectorStyle ="flex border border-white/10 rounded-2xl overflow-hidden";
    
    // Creating the Pill
    const Pill = (props : { option : PackageOption } ) => {
        const pillStyle = "text-[16px] py-2 px-5 cursor-pointer transition-bg duration-250";
        return (
            <button class={pillStyle}
                    onClick={() => setPackageOption(props.option.name)}
                    classList={{
                        "bg-[#256AF4] text-white" : packageOption() === props.option.name,
                        "bg-transparent text-white/60 hover:bg-white/10" : packageOption() !== props.option.name
                    }}>
                {props.option.name}
            </button>
        )
    }
    //Returning the chain of pills
    return(
        <div class={selectorStyle}>
            <For each={packageOptions}>
                {(option) => <Pill option={option} />}
            </For>
        </div>
    )
}