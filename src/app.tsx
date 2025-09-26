import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { Navigation } from "~/components/Navigation";
import "./app.css";
import { ContactCTA } from "~/components/ContactCTA";
import { Footer } from "~/components/Footer";


export default function App() {
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
