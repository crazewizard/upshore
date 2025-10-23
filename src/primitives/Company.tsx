export function Company(props: {company: any, size?:string}) {
    return (
        <div class={`${props.size}`}>
                {props.company}
        </div>
    )
}
