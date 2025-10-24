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
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.image} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content={metaData.title} />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />

        <link rel="icon" type="image/x-icon" href={metaData.favicon} />
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

