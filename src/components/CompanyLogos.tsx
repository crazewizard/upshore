import { For } from "solid-js";
import { Company } from "~/primitives/Company";
import * as Companies from "~/companies";
import { EliteXP } from "~/companies";

export function CompanyLogos () {
  
  const entries = Object.entries(Companies);
    
  return (
      <div class="w-full overflow-hidden py-4 md:py-8 flex-shrink-0">
        <style>{`
                  @keyframes scroll {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(0%); }
                  }
                `}</style>
        <div  class="flex w-auto gap-6 md:gap-16 flex-shrink-0"
              style = {{animation: `scroll 30s linear infinite` }}>

          <For each={[...entries, ...entries, ...entries, ...entries]}>
            {([name, Component]) => 
              <div class="relative flex-shrink-0 w-[180px] md:w-[240px] min-w-[180px] md:min-w-[240px]">
                <Component/>
              </div>
              }
          </For>

          <Company company={EliteXP} />
          
        </div>
      </div>
     
    )
  }

  // w-[180px] md:w-[240px] min-w-[180px] md:min-w-[240px] max-h-[80px]

