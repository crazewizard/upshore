export function Input (props: {id: string, type:string, placeholder:string, label:string}) {
    const labelStyle = "text-white/60 text-[12px]";
    const inputStyle = "bg-white/10 border border-white/20 p-2 px-4 text-[16px] text-white w-full rounded-xl";
    return (
        <div class="flex flex-col w-full items-start gap-2">
            <label for={props.id} class={labelStyle}>{props.label}</label>
            <input type={props.type} id={props.id} placeholder={props.placeholder} class={inputStyle}/>
        </div>
    )
}