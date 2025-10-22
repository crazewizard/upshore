import { A } from "@solidjs/router";

export function FrameworkSection() {
  return (
    <div class="py-8 md:py-12 mb-0 md:mb-24 w-full">
      <div class="relative w-full no-line-height font-medium text-tertiary lg:!text-[110px] md:!text-[90px] !text-[68px] ">
        <span class="text-primary" >We Work Globaly –– </span>
        <span>with market’s favorites tools and frameworks</span>
        <span class="-space-x-4 hover:space-x-4 inline-block transition-all duration-500">&nbsp
          {<Frameworks Framework={"Figma"} />}
          {<Frameworks Framework={"React"} />}
          {<Frameworks Framework={"Framer"} />}
          {<Frameworks Framework={"Solidjs"} />}
          {<Frameworks Framework={"Nextjs"} />}&nbsp
        </span>
        <span>to provide the best in class experience.</span>
      </div>
      <A href="/Studio" class="flex flex-wrap gap-2 md:gap-8 my-12 cursor-pointer w-full" >
        <img src="/icons/LongArrow.svg" class="invertthemeicon max-w-[400px]" />
        <span class="text-primary text-[40px] md:text-[48px] hover:text-brand-blue transitio-all duration-250">Visit our Studio</span>
      </A>
    </div>
  )
}
//md:sticky md:top-12
export function Frameworks(props: { Framework: string }) {
  return (
    <span class="inline-block rounded-full
                  lg:w-[100px] lg:h-[100px]
                  md:w-[80px] md:h-[80px]
                  w-[48px] h-[48px]
                  backdrop-blur-md bg-disabled border border-border" >
      <img src={`/frameworks/${props.Framework}.svg`} class="w-full h-full bg-size-[100%] object-cover bg-center bg-no-repeat" />
    </span>
  )
}
