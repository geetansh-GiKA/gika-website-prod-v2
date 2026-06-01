import type { FC } from "react";
import { Navbar } from "../../Design-System/Components/Navbar/Navbar";
import { Footer } from "../../Design-System/Components/Footer/Footer";
import { Hero } from "./Components/Hero/Hero.tsx";
import { Marquee } from "../../Design-System/Components/Marquee/Marquee.tsx";
import FlowArtDefaultDemo from "./Components/StoryScroll/Component.tsx";
import { Customers } from "./Components/Customers/Customers.tsx";
import { FAQ } from "./Components/FAQ/FAQ.tsx";
import { CTA } from "./Components/CTA/CTA.tsx";

export const Home: FC = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingLeft: "240px", paddingRight: "240px" }}>
        <div className="min-h-screen border-x border-secondary-900/70">
          <Hero />
        </div>
      </div>
      <Marquee />
      <div style={{ paddingLeft: "240px", paddingRight: "240px" }}>
        <div className="min-h-screen border-b border-l border-r border-secondary-900/70">
          <FlowArtDefaultDemo />
        </div>
      </div>
      <div
        style={{ paddingLeft: "240px", paddingRight: "240px" }}
        className="mt-4"
      >
        <Customers />
      </div>
      <div
        style={{ paddingLeft: "240px", paddingRight: "240px" }}
        className="mt-4"
      >
        <FAQ />
      </div>
      <div
        style={{ paddingLeft: "120px", paddingRight: "120px" }}
        className="mt-12"
      >
        <CTA />
      </div>
      <Footer />
    </>
  );
};
