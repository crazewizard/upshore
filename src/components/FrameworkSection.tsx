
export function FrameworkSection () {
  return (
    <div class="relative  w-full no-line-height font-medium text-black/10 lg:!text-[110px] md:!text-[90px] !text-[68px] py-8 md:py-12 -z-10 mb-0 md:mb-36">
        <span lang="en" class="text-black/90 hyphens-aut break-words" >We Work Globaly –– </span>
        with market’s favorites tools and frameworks 
        <span class="flex -space-x-4 inline-block">
          {<Frameworks Framework={"/public/images/Figma.svg"}/>}
          {<Frameworks Framework={"/public/images/React.svg"}/>}
          {<Frameworks Framework={"/public/images/Framer.svg"}/>}
          {<Frameworks Framework={"/public/images/Solidjs.png"}/>}
          {<Frameworks Framework={"/public/images/Nextjs.svg"}/>}&nbsp
        </span>
        to provide the best in class experience.
    </div>
  )
}
//md:sticky md:top-12
export function Frameworks (props: { Framework : string}){
  return (
    <span class="flex inline-block rounded-full
                  lg:w-[100px] lg:h-[100px]
                  md:w-[80px] md:h-[80px]
                  w-[48px] h-[48px]
                  backdrop-blur-md bg-black/5 border border-black/10" >
      <img src={props.Framework} class="w-full h-full bg-size-[100%] object-cover bg-center bg-no-repeat" />
    </span>
  )
}
