import { Signal, createSignal, For } from "solid-js";
import { servicePackage } from "~/types/servicePackages";
import { UpshoreButton } from "./UpshoreButton";

export const [selected, setSelected] = createSignal("Design + Build");

export default function PillSelector () {

    const selectorStyle ="flex border border-white/10 rounded-2xl overflow-hidden";

    const servicePackages = [
        "Design + Build",
        "Design Only",
        "Dev Only"
    ];

    const Pill = (props : { option : string} ) => {
        const pillStyle = `text-white/60 active:text-white text-[16px] p-2 px-4 cursor-pointer ${selected() === props.option ? "bg-[#256AF4]" : "bg-transparent"}`;
        return (
            <label class={pillStyle} for={props.option}>
                <input  type="radio"
                    class="hidden"
                    id={props.option} 
                    value={props.option} 
                    name="Packages" 
                    checked={selected() === props.option}
                    onInput={() => setSelected(props.option)}
                    />
                <span>{props.option}</span>
            </label>
        )
    }

    return(
        <div class={selectorStyle}>
            <For each={servicePackages}>
                {(pack) => <Pill option={pack} />}
            </For>
        </div>
    )
}