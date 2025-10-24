import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Title, MetaProvider } from "@solidjs/meta";
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

            <link rel="icon" href={metaData.favicon} />
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
