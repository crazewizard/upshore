import { A } from "@solidjs/router";
import { Hero } from "../components/Hero";
import { CompanyLogos } from "../components/CompanyLogos"
import { TestimonialSection } from "../components/TestimonialSection"
import { CreativeTeam } from "../components/CreativeTeam";
import { FrameworkSection } from "~/components/FrameworkSection";



export default function Home() {
  return (
    <main class="flex flex-col max-w-[1600px] w-[100vw]  mx-auto justify-items-center px-3 md:px-4 gap-10">
      
      <Hero />
      <CompanyLogos />
      <FrameworkSection />
      <TestimonialSection />

    </main>
  );
}
