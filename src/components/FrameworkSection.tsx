
export function FrameworkSection () {
  return (
    <div class="relative w-full no-line-height font-medium text-black/10 lg:!text-[110px] md:!text-[90px] !text-[68px] py-8 md:py-12 -z-10 mb-0 md:mb-36">
        <span class="text-black/90" >We Work Globaly –– </span>
        <span>with market’s favorites tools and frameworks</span>
        <span class="-space-x-4 inline-block">&nbsp
          {<Frameworks Framework={"Figma"}/>}
          {<Frameworks Framework={"React"}/>}
          {<Frameworks Framework={"Framer"}/>}
          {<Frameworks Framework={"Solidjs"}/>}
          {<Frameworks Framework={"Nextjs"}/>}&nbsp
        </span>
        <span>to provide the best in class experience.</span>
    </div>
  )
}
//md:sticky md:top-12
export function Frameworks (props: { Framework : string}){
  return (
    <span class="inline-block rounded-full
                  lg:w-[100px] lg:h-[100px]
                  md:w-[80px] md:h-[80px]
                  w-[48px] h-[48px]
                  backdrop-blur-md bg-black/5 hover:bg-white/90 border border-black/10" >
      <img src={`/frameworks/${props.Framework}.svg`} class="w-full h-full bg-size-[100%] object-cover bg-center bg-no-repeat" />
    </span>
  )
}
