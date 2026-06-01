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
    <div className="w-full overflow-x-hidden">
      <Navbar />

      <div className="px-0 sm:px-10 md:px-20 lg:px-30 xl:px-60">
        <div className="min-h-screen border-x border-secondary-900/70">
          <Hero />
        </div>
      </div>

      <Marquee />

      <div className="px-0 sm:px-10 md:px-20 lg:px-30 xl:px-60">
        <div className="min-h-screen border-b border-l border-r border-secondary-900/70">
          <FlowArtDefaultDemo />
        </div>
      </div>

      <div className="px-0 sm:px-10 md:px-20 lg:px-30 xl:px-60 mt-4">
        <Customers />
      </div>

      <div className="px-0 sm:px-10 md:px-20 lg:px-30 xl:px-60 mt-4">
        <FAQ />
      </div>

      <div className="px-4 sm:px-10 md:px-16 lg:px-20 xl:px-30 mt-12">
        <CTA />
      </div>

      <Footer />
    </div>
  );
};
