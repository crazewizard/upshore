import { Link, Meta, MetaProvider, Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import { createEffect, createMemo, createSignal, For } from "solid-js";
import { CompanyLogos } from "~/components/CompanyLogos";
import { PageHeader } from "~/components/PageHeader";
import * as metaData from "~/data/Metadata";
import { Bars } from "~/primitives/Bars";
import { Person, Leonardo, Alison } from "~/types/Person";

export default function TeamMember() {
    const parentStyle = "flex flex-col w-full max-w-[3000px] justify-center mt-32 mx-auto";
    const imageStyle = "max-h-[500px] rounded-2xl border border-tertiary";

    const params = useParams()
    const [person, setPerson] = createSignal<Person>(Alison);
    const [service, setService] = createSignal("Mobile Apps");
    const [list, setList] = createSignal<string[]>();

    createEffect(() => setPerson((params.name === "Alison") ? Alison : Leonardo));

    const servicePills = ["Mobile Apps", "Web Apps", "Landing Pages", "Graphics"];

    const mobile = import.meta.glob("~/studio/mobile/*.{png,jpg}", { eager: true, import: "default" }) as Record<string, string>;
    const web = import.meta.glob("~/studio/web/*.{png,jpg}", { eager: true, import: "default" }) as Record<string, string>;
    const landing = import.meta.glob("~/studio/landing/*.{png,jpg}", { eager: true, import: "default" }) as Record<string, string>;
    const graphics = import.meta.glob("~/studio/graphics/*.{png,jpg}", { eager: true, import: "default" }) as Record<string, string>;

    createEffect(() => {
        if (service() === "Mobile Apps") setList(Object.values(mobile));
        if (service() === "Web Apps") setList(Object.values(web));
        if (service() === "Landing Pages") setList(Object.values(landing));
        if (service() === "Graphics") setList(Object.values(graphics));
    })

    function Pill(props: { pill: string }) {
        return (
            <div class="flex w-fit text-[20px] md:text-[24px] py-3 px-6 md:py-4 md:px-8 rounded-xl cursor-pointer transition-all duration-300 text-nowrap justify-center"
                onClick={() => setService(props.pill)}
                classList={{
                    "bg-[#256AF4] text-white": service() === props.pill,
                    "bg-transparent text-white/60 hover:bg-white/10": service() !== props.pill
                }}>
                {props.pill} /
            </div>
        )
    }

    function Skills(props: { name: string, tools: string }) {
        return (
            <div class="relative flex w-full justify-end md:justify-center bg-accent p-4 rounded-xl border border-accent backdrop-blur-3xl">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-[16px] md:text-[20px] text-secondary">{props.tools}</span>
                <span class="text-[18px] md:text-[24px]">{props.name}</span>
            </div>
        )
    }
    return (
        <>
            <MetaProvider>
                <Title>{person()?.Name}</Title>
                <Meta name="description" content={metaData.studioDescription} />
                <Meta name="robots" content="index, follow" />
                <Meta name="author" content="Upshore Studio" />
                <Link rel="canonical" href={metaData.studioUrl} />
            </MetaProvider>

            <div class="flex flex-col w-full gap-16 max-w-[2200px] justify-center mx-auto">
                <Bars Style={"h-[20vh] md:h-[25vh] sticky top-0"} />
                <h1 class="text-[80px]! md:text-[110px]! no-line-height text-center">{`${person().Name} /`}</h1>
                {/*<div class="bg-accent w-full h-[600px] md:h-[700px] rounded-2xl mx-auto z-50 backdrop-blur-3xl border border-accent"
                        style={{ "background-image": `url("")` }}>
                    somthing
                </div>*/}
            </div>

            <div class="w-full max-w-[1600px] mx-auto px-4! md:px-0 py-16 md:py-24 flex flex-col gap-16">
                <div class="flex flex-col gap-4 w-full max-w-[1600px]">
                    <Skills name="Product design" tools="Figma" />
                    <Skills name="Front-end Dev" tools="Solid.js" />
                    <Skills name="Graphic design" tools="Figma / Adobe / Affinity" />
                </div>
                <CompanyLogos />
                <div class="relative w-full no-line-height font-medium text-tertiary lg:text-[110px]! md:text-[90px]! text-[54px]! ">
                    <span class="text-primary hover:text-brand-blue transition-all duration-300" >Product Designer </span>
                    <span>with a focus on shaping innovative digital experiences by </span>
                    <span class="text-primary" >turning complex ideas into intuitive designs.</span>
                </div>
                <div class="flex gap-2 w-screen md:w-full justify-start overflow-x-scroll -m-4 p-4">
                    <For each={servicePills}>
                        {(pill) => <Pill pill={pill} />}
                    </For>
                </div>
            </div>

            <div class="flex flex-wrap w-full gap-8 md:gap-16 px-4 py-8 mx-auto justify-center">
                <For each={list()}>
                    {(src) => {
                        const filename = src.split('/').pop()?.split('.')[0] || 'Studio Work';
                        return <img src={src} alt={`${filename} - Upshore Studio Design Work`} class={imageStyle} />;
                    }}
                </For>
            </div>




        </>
    )
}