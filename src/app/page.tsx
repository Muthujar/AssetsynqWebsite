import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { MobileExperience } from "@/components/sections/mobile-experience";
import { WhyChoose } from "@/components/sections/why-choose";
import { PlanIncluded } from "@/components/sections/plan-included";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Benefits } from "@/components/sections/benefits";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
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
        <MobileExperience />
        <WhyChoose />
        <PlanIncluded />
        <ProblemSolution />
        <HowItWorks />
        <Pricing />
        <Benefits />
        <Contact />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
