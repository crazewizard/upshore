export function TextArea (props: {id: string, placeholder:string, label:string}) {
    const labelStyle = "text-white/60 text-[12px]";
    const inputStyle = "bg-white/10 border border-white/20 p-3 px-4 text-[16px] text-white w-full rounded-xl min-h-[160px] resize-none";
    return (
        <div class="flex flex-col w-full items-start gap-2">
            <label for={props.id} class={labelStyle}>{props.label}</label>
            <textarea id={props.id} placeholder={props.placeholder} class={inputStyle} maxlength="400"/>
        </div>
    )
}