import { For } from "solid-js";
import { PageHeader } from "~/components/PageHeader";

export default function Studio () {
    const parentStyle = "flex flex-col w-full max-w-[3000px] justify-center mt-32 mx-auto";
    const imageStyle= "max-h-[500px] rounded-2xl border border-tertiary";

    const images = import.meta.glob("~/studio/*.{png,jpg}", { eager:true, import:"default"}) as Record <string, string>;
    const imageList : string[] = Object.values(images);
    
    return (
        <div class={parentStyle}>
            <PageHeader title="The Studio" />
            <div class="flex flex-wrap w-full gap-8 md:gap-16 px-4 py-8 mx-auto justify-center">
                <For each={imageList}>
                    {(src) => <img src={src} alt="Studio Gallery" class={imageStyle}/>}
                </For>
            </div>
        </div>
    )
}