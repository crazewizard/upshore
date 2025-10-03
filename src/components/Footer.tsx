import { ServiceCard } from "./ServiceCard";
import { Service, MobileApp, SaaSProduct, LandingPage } from "~/types/Service";
import { CreativeTeam } from "./CreativeTeam";
import { FrameworkSection } from "./FrameworkSection";
import { Bars } from "~/primitives/Bars";

export function Footer () {
    return (
        <main class="max-w-[1600px] mx-auto w-[100vw] p-4 flex flex-col gap-4 place-items-center">
            <Bars Style={"h-[40vh] md:h-[50vh]  sticky top-0"}/>
          
            <div class="w-full flex flex-col gap-2 bg-gradient-to-b from-[#F7F7F700] to-[#F7F7F7] to-70% z-20" >
                <div class="w-full flex flex-col gap-4 z-20 md:flex-row">
                    <ServiceCard Service={MobileApp} />
                    <ServiceCard Service={SaaSProduct} />
                    <ServiceCard Service={LandingPage} />
                </div>
                <div class="w-full overflow-x-hidden py-4">
                    <span class="no-line-height text-[48px] md:text-[120px] text-center whitespace-wrap md:whitespace-nowrap text-black/10">Copyright 2025 © Upshore</span>
                </div>
                
                <div class="flex flex-col md:flex-row w-full md:place-content-between items-center md:py-[24px] pb-24 gap-4">
                    <a href="" class="flex items-center gap-2  opacity-60 hover:opacity-100">
                        <p class="mt-[2px]">LEONARDO@UPSHORE.STUDIO</p> 
                        <img src="/public/icons/Mail-icon-2.svg" class="w-[24px] h-[24px]" />
                    </a>
                    <a href="" class="flex items-center gap-2  opacity-60 hover:opacity-100">
                        <p class="mt-[2px]">PRIVACY POLICY</p> 
                        <img src="/public/icons/ArrowUPForward.svg" class="invert w-[24px] h-[24px]" />
                    </a>
                </div>
            </div>
        </main>
    )
}

//<FrameworkSection />