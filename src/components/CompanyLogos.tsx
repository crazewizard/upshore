import { For } from "solid-js";
import { Company } from "~/primitives/Company";
import * as Companies from "~/companies";
import { EliteXP } from "~/companies";

export function CompanyLogos () {
  
  const entries = Object.entries(Companies);
    
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

          <For each={[...entries, ...entries, ...entries, ...entries]}>
            {(logo) => <Company logo={(logo)} size=" min-w-[200px] md:min-w-[240px]" />}
          </For>

          <Company logo={EliteXP} />
          
        </div>
      </div>
     
    )
  }

