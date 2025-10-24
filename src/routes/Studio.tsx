import { For } from "solid-js";
import { PageHeader } from "~/components/PageHeader";
import { Title, Meta, MetaProvider, Link } from "@solidjs/meta";
import * as metaData from "~/data/Metadata";

export default function Studio() {
    const parentStyle = "flex flex-col w-full max-w-[3000px] justify-center mt-32 mx-auto";
    const imageStyle = "max-h-[500px] rounded-2xl border border-tertiary";

    const images = import.meta.glob("~/studio/*.{png,jpg}", { eager: true, import: "default" }) as Record<string, string>;
    const imageList: string[] = Object.values(images);

    return (
        <>
            <MetaProvider>
                <Title>{metaData.studioTitle}</Title>
                <Meta name="description" content={metaData.studioDescription} />
                <Meta name="robots" content="index, follow" />
                <Meta name="author" content="Upshore Studio" />
                <Link rel="canonical" href={metaData.studioUrl} />
            </MetaProvider>

            <div class={parentStyle}>
                <PageHeader title="The Studio" />
                <div class="flex flex-wrap w-full gap-8 md:gap-16 px-4 py-8 mx-auto justify-center">
                    <For each={imageList}>
                        {(src) => {
                            const filename = src.split('/').pop()?.split('.')[0] || 'Studio Work';
                            return <img src={src} alt={`${filename} - Upshore Studio Design Work`} class={imageStyle} />;
                        }}
                    </For>
                </div>
            </div>
        </>

    )
}