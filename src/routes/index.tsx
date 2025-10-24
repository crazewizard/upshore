import { A } from "@solidjs/router";
import { Hero } from "../components/Hero";
import { CompanyLogos } from "../components/CompanyLogos"
import { TestimonialSection } from "../components/TestimonialSection"
import { FrameworkSection } from "~/components/FrameworkSection";
import { createEffect } from "solid-js";
import { showForm } from "~/components/ContactForm";
import { Title, Meta, MetaProvider } from "@solidjs/meta";
import * as metaData from "~/data/Metadata";

export default function Home() {

  createEffect(() => {
    if (showForm()) { document.body.style.overflow = "hidden" }
    else { document.body.style.overflow = "" }
  })

  return (
    <>
      <MetaProvider>
        <Title>{metaData.title}</Title>
        <meta name="description" content={metaData.description} />
      </MetaProvider>

      <main class="flex flex-col max-w-[1600px] w-[100vw]  mx-auto justify-items-center px-3 md:px-4 gap-10">
        <Hero />
        <CompanyLogos />
        <FrameworkSection />
        <TestimonialSection />

      </main>
    </>

  );
}

