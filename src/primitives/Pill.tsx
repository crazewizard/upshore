import { servicePill, setServicePill } from "~/components/Form";

export function Pill (props: {pill:string}) {
    const pillStyle = "text-[16px] py-2 px-4 md:px-5 cursor-pointer transition-all duration-250";
    return (
        <div class={pillStyle}
                onClick={() => setServicePill(props.pill)}
                classList={{
                    "bg-[#256AF4] text-white shadow-2xl shadow-[#256AF4]" : servicePill() === props.pill,
                    "bg-transparent text-white/60 hover:bg-white/10" : servicePill() !== props.pill
                }}>
            {props.pill}
        </div>
    )
}