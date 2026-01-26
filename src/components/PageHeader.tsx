import { Bars } from "~/primitives/Bars";

export function PageHeader (props: {title:string}) {
    const headerStyle = "flex flex-col w-full max-w-[1600px] justify-center p-4 mx-auto gap-16";
    
    return (
        <div class={headerStyle}>
            <h2 class="text-[64px]! md:text-[110px]! no-line-height text-center">{props.title}</h2>
            <Bars Style={"h-[25vh] md:h-[30vh]"} />
        </div>
    )
}