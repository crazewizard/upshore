const buttonStyle = "relative min-w-[48px] h-[48px] rounded-xl overflow-hidden border border-transparent transition-colors transition-border duration-250 ease-linear hover:bg-black/10 hover:border-black/10 cursor-pointer z-50";

export function UpshoreButton (props: { icon : string, action : any }) {
    return (
        <button     class={`${buttonStyle}`}
                    onClick={props.action}>
                <img src={`/icons/${props.icon}.svg`} alt="button icon" class="w-full h-full" />
        </button>      
    )
}

