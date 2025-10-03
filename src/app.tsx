import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createEffect, createRenderEffect, Suspense } from "solid-js";
import { Navigation } from "~/components/Navigation";
import "./app.css";
import { ContactCTA } from "~/components/ContactCTA";
import { Footer } from "~/components/Footer";
import { setShowForm, showForm } from "./components/ContactForm";
import { setShowMenu, showMenu } from "./components/Menu";

export default function App() {

  createEffect (()=>{if(showMenu()){setShowForm(false)}});
  createEffect (()=>{if(showForm()){setShowMenu(false)}});

  return (
    <Router
      root={props => (
        <>
          <Navigation />
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
