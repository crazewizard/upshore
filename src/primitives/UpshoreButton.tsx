
export function UpshoreButton (props: { icon : string, style : string,  action : any }) {
    return (
        <button     class={props.style}
                    onClick={props.action}>
                <img src={`/icons/${props.icon}.svg`} alt="button icon" class="w-full h-full" />
        </button>      
    )
}

