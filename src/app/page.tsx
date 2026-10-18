import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { PainPoints } from "@/components/sections/pain-points";
import { Migration } from "@/components/sections/migration";
import { MobileExperience } from "@/components/sections/mobile-experience";
import { Contact } from "@/components/sections/contact";
import { Trust } from "@/components/sections/trust";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Locations } from "@/components/sections/locations";
import { JsonLd } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-gradient focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <FeaturesGrid />
        <PainPoints />
        <Migration />
        <MobileExperience />
        <Contact />
        <Trust />
        <FAQ />
        <Locations />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
