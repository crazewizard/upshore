export function Radio (props: {name:string, value:string, checked?:boolean}) {
    const radioStyle = "flex w-full gap-2 px-4 py-3 border border-white/10 bg-white/10 rounded-xl items-center text-white/60";
    return (
        <label class={radioStyle}>
            <input type="radio" name={props.name} value={props.value} class="" checked={props.checked}/>
            <p>{props.value}</p>
        </label>
        
    )
}