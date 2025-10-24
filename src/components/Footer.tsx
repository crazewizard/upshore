import { ProductCard } from "./ProductCard";
import { Service, MobileApp, SaaSProduct, LandingPage } from "~/types/Service";
import { Bars } from "~/primitives/Bars";
import { radioValues } from "./Form";
import { For } from "solid-js";
import { A } from "@solidjs/router";

export function Footer () {
    return (
        <main class="max-w-[1600px] mx-auto w-[100vw] p-4 flex flex-col gap-4 place-items-center">
            <Bars Style={"h-[40vh] md:h-[50vh]  sticky top-0"}/>
          
            <div class="w-full flex flex-col gap-2 bg-gradient-to-b from-transparent to-background to-70% z-20" >
                <div class="w-full flex flex-col gap-4 z-20 md:flex-row">
                    <For each={radioValues}>
                        {(service) => <ProductCard service={service}/>}
                    </For>

                </div>
                <div class="w-full overflow-x-hidden py-4">
                    <span class="no-line-height text-[48px] md:text-[120px] text-center whitespace-wrap md:whitespace-nowrap text-disabled">Copyright 2025 © Upshore</span>
                </div>
                
                <div class="flex flex-col md:flex-row w-full md:place-content-between items-center md:py-[24px] pb-24 gap-4">
                    <a  href="mailto:leonardo@upshore.studio?subject=re%20–%20Design%20/%20Build%20a%20Digital%20Product&body=Hi%20there!" 
                        class="flex items-center gap-2 opacity-60 hover:opacity-100">
                        <p class="mt-[2px]">LEONARDO@UPSHORE.STUDIO</p> 
                        <img src="/icons/Mail-icon-2.svg" class="w-[24px] h-[24px] invertthemeicon" alt="Send an email"/>
                    </a>
                    <A href="/privacy" class="flex items-center gap-2  opacity-60 hover:opacity-100">
                        <p class="mt-[2px]">PRIVACY POLICY</p> 
                        <img src="/icons/ArrowUPForward.svg" class="w-[24px] h-[24px] invert dark:invert-0" alt="Open privacy"/>
                    </A>
                </div>
            </div>
        </main>
    )
}

//<FrameworkSection />