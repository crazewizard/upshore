import { A } from "@solidjs/router";
import { Hero } from "../components/Hero";
import { CompanyLogos } from "../components/CompanyLogos"
import { TestimonialSection } from "../components/TestimonialSection"
import { FrameworkSection } from "~/components/FrameworkSection";
import { createEffect } from "solid-js";
import { showForm } from "~/components/ContactForm";
import { Title, Meta, MetaProvider, Link } from "@solidjs/meta";
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
        <Meta name="description" content={metaData.description} />
        <Meta name="robots" content="index, follow" />
        <Meta name="author" content="Upshore Studio" />
        <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Link rel="canonical" href={metaData.url} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Upshore Studio",
            "description": "We design and build digital products and experiences",
            "url": "https://upshore.vercel.app",
            "logo": "https://upshore.vercel.app/Upshore-logo.svg",
            "sameAs": [],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "foundingDate": "2020",
            "services": [
              "UI/UX Design",
              "Web Development",
              "Digital Product Design",
              "Branding"
            ]
          })}
        </script>
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

