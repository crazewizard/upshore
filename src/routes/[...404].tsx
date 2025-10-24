import { Meta, MetaProvider, Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <>
      <MetaProvider>
        <Title>404 page not found!</Title>
        <Meta name="description" content="Hmm… we couldn't find that page. But don't worry — there's plenty of great work to explore. Head back to the home page and check out what we've been creating."/>
        <Meta name="robots" content="noindex, follow" />
        <Meta name="author" content="Upshore Studio" />
      </MetaProvider>

      <main class="text-center mx-auto p-4  m-24">
        <h1 class="text-[240px] text-disabled">404</h1>
        <div class="flex flex-col gap-6 w-full md:w-[500px] mx-auto bg-accent border border-border rounded-4xl -mt-24 p-6 backdrop-blur-xl ">
          <h2 class="!text-3xl text-brand-red"> Oops, page not found</h2>
          <p class="text-secondary">
            Hmm… we couldn’t find that page. But don’t worry — there’s plenty of great work to explore. Head back to the home page and check out what we’ve been creating.
          </p>
          <A href="/" class="px-8 py-2 text-xl bg-brand-blue rounded-2xl border border-border shadow-2xl hover:shadow-brand-blue transition-all duration-250">
            Home
          </A>
        </div>
      </main>
    </>
  );
}
