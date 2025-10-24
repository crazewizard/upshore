import { PageHeader } from "~/components/PageHeader";
import privacy from "~/data/Privacy.txt?raw";
import { Title, Meta, MetaProvider } from "@solidjs/meta";
import * as metaData from "~/data/Metadata";

export default function Privacy() {
    const parentStyle = "flex flex-col w-full max-w-[3000px] justify-center mt-32 mx-auto";

    return (
        <>
            <MetaProvider>
                <Title>{metaData.privacyTitle}</Title>
                <Meta name="description" content={metaData.privacyDescription} />
            </MetaProvider>

            <div class={parentStyle}>
                <PageHeader title="Privacy Policy" />
                <div class="p-4">
                    <div class="flex flex-wrap w-full md:max-w-[800px] gap-4 p-4 pt-6 md:p-8 md:my-8 mx-auto justify-center bg-card border border-border rounded-2xl md:rounded-4xl">
                        <pre class="w-full text-wrap">
                            {privacy}
                        </pre>
                    </div>
                </div>
            </div>
        </>
    )
}