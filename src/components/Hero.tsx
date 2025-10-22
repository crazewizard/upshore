import { ProjectCarousel } from "./ProjectCarousel";
import { Bars } from "~/primitives/Bars";
import { Signal, createSignal } from "solid-js";

const Heart = () => (
    <span role="img" data-nosnippet class="relative inline-block
                 w-[100px] h-[44px] md:w-[180px] md:h-[64px] 
                 rounded-full bg-overlay border border-tertiary">
      <img src="/images/Heart1.png" class="h-[80px] md:h-[100px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
    </span>
  )

export function Hero () {
    const [ateratingText, setAlteratingText] = createSignal("Product");
    
    return (
      <div class="w-full relative flex flex-col gap-4 pt-0">
        <Bars Style={"h-[25vh] md:h-[30vh] sticky top-0"}/>
        <div class="flex flex-col md:flex-row items-end gap-8 md:gap-4  pt-8 pb-10">
          <h1 class="w-full text-[56px] md:text-[90px] md:max-w-[900px] sm:max-w-[100%]">
             <span class="text-tertiary"> We { <Heart />} </span> Design<span class="opacity-20"> –– </span>Build<span class="text-tertiary"> Digital </span>Products
          </h1>
          
          <div class="w-full md:w-[400px] ml-0 md:ml-auto hidden md:block">
            <h6 class="text-brand-red">We engineer solutions !</h6>
            <p class="text-secondary">We create software that drive businesses forward –– covering the complete lifecycle of a digital product from design to development, and deployment.</p>
          </div>
        </div>

        <div class="w-full flex place-content-between font-bold md:text-[20px] text-[15px] uppercase">
          <span>Pretty</span>
          <span>Functional</span>
          <span>Robust</span>
          <span>Scalable</span>
        </div>
        <ProjectCarousel />
        
        <div class="w-full  block md:hidden py-8 px-2">
            <h5 class="text-brand-red">We engineer solutions !</h5>
            <p class="!text-[18px] text-secondary">We create software that drive businesses forward –– covering the complete lifecycle of a digital product from design to development, and deployment.</p>
          </div>
      </div>
    )
}