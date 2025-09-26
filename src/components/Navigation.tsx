import { useLocation } from "@solidjs/router";
import { Team } from "./Team";
import { NavBar } from "./NavBar";


export function Navigation() {
  
  return (
    <div class="fixed w-full max-w-[1600px] mx-auto top-0 flex justify-start p-4 z-80 left-1/2 -translate-x-1/2">
      <Team />
      <NavBar />
      <div />
    </div>
  );
}
