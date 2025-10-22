export function Company(props: {logo: any, size?:string}) {
    return (
        <svg role="img"
            class={`fill-primary ${props.size}`}
            viewBox="0 0 240 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
                {props.logo}
        </svg>
    )
}
