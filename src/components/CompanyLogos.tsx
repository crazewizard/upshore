import { For } from "solid-js"

const CompanyLogo = (props: {src:string}) => <img src={`/company-logos/${props.src}.svg`} class="h-[64px] md:h-[80px]"/>

const logos = [
  "Founders-Lair",
  "Elite-xp",
  "Incubated",
  "k-bio",
  "Xtellar",
];

export function CompanyLogos () {
    return (
      <div class="w-full overflow-hidden py-4 md:py-8">
        <style>{`
                  @keyframes scroll {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(0%); }
                  }
                `}</style>
        <div  class="flex gap-6 md:gap-16"
              style = {{width : 'auto',
                        animation: `scroll 30s linear infinite`
              }}>
          <For each={[...logos, ...logos, ...logos, ...logos]}>
            {(logo) => <CompanyLogo src={(logo)} />}
          </For>
        </div>
      </div>
     
    )
  }

