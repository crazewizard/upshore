export function Company(props: {logo: any, size?:string}) {
    return (
        <div class={`${props.size}`}>
                {props.logo}
        </div>
    )
}
