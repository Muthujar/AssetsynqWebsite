import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhoItsFor } from "@/components/sections/who-its-for";
import { Pricing } from "@/components/sections/pricing";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <WhoItsFor />
        <Pricing />
        <Contact />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
