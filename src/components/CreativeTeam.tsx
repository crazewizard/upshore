import { Avatar } from "./Team";
import { Leonardo, Alison  } from "~/types/Person";

export function Puzzle(){
    return (
      <div class="relative w-[360px] h-[100px] inline-block rounded-full bg-black/10 border border-black/20">
        <img src="/public/images/Puzzle.png" class="h-[220px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
      </div>
    )
  }

export function CreativeTeam(){
    return (
        
        <div class="my-36 relative md:sticky md:top-12 w-full no-line-height font-medium text-black/10 lg:!text-[110px] md:!text-[90px] !text-[68px] py-8 md:py-12 -z-10">
           
            <span class="text-black/90 hyphens-aut break-words">
                <span class="text-black/10">A Creative</span>Team 
                <span class="flex -space-x-4 inline-block ">
                    <Avatar Person={Leonardo} Style={"w-[110px] h-[110px] bg-[#F24347]"} />
                    <Avatar Person={Alison} Style={"w-[110px] h-[110px] bg-[#256AF4]"} />
                </span>
                <span class="text-black/10"> That </span> Exceeds <span class="text-black/10">Your</span> Expectations.
            </span>
        </div>
    )
}