import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Title, Link,  Meta,  MetaProvider } from "@solidjs/meta";
import { createEffect, createRenderEffect, Suspense } from "solid-js";
import { Navigation } from "~/components/Navigation";
import "./app.css";
import { ContactCTA } from "~/components/ContactCTA";
import { Footer } from "~/components/Footer";
import { setShowForm, showForm } from "./components/ContactForm";
import { setShowMenu, showMenu } from "./components/Menu";
import { sent, setSent } from "./components/Form";
import { SentModal } from "./components/SentModal";
import * as metaData from "~/data/Metadata";

export default function App() {

  createEffect(() => { if (showMenu()) { setShowForm(false) } });
  createEffect(() => { if (showForm()) { setShowMenu(false) } });

  return (
    <Router
      root={props => (
        <>
          <MetaProvider>
            <Meta property="og:title" content={metaData.title} />
            <Meta property="og:description" content={metaData.description} />
            <Meta property="og:image" content={metaData.image} />
            <Meta property="og:url" content={metaData.url} />
            <Meta property="og:type" content="website" />
            <Meta property="og:site_name" content="Upshore Studio" />
            <Meta property="og:locale" content="en_US" />

            <Meta name="twitter:card" content="summary_large_image" />
            <Meta name="twitter:title" content={metaData.title} />
            <Meta name="twitter:description" content={metaData.description} />
            <Meta name="twitter:image" content={metaData.image} />

            <Link rel="icon" type="image/x-icon" href={metaData.favicon} />
          </MetaProvider>

          <Navigation />
          {sent() && <SentModal />}
          <ContactCTA />
          <Suspense>{props.children}</Suspense>
          <Footer />
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
