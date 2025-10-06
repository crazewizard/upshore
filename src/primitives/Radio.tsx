import { activeRadio, setActiveRadio } from "~/components/Form";

export function Radio (props: {name:string, value:string, checked?:boolean}) {
    const radioStyle = "flex w-full gap-2 px-4 py-3 border rounded-xl items-center ";
    
    return (
        <label  class={radioStyle}
                onChange={()=>setActiveRadio(props.value)}
                classList={{
                    "bg-[#256AF450] text-white border-[#256AF4]" : activeRadio() === props.value,
                    "bg-white/10 text-white/60 border-white/10" : activeRadio() !== props.value
                }}>
            <input type="radio" name={props.name} value={props.value} class="" checked={activeRadio() === props.value ? true : false}/>
            <p>{props.value}</p>
        </label>
        
    )
}