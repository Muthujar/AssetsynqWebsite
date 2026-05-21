import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="bg-accent py-16 sm:py-20">
      <div className="section-container text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to simplify your pawn shop?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-accent-light/90">
          Join shops across India moving from registers to a system built for
          pledges, interest, and branch cash.
        </p>
        <Button
          href="#contact"
          variant="secondary"
          size="lg"
          className="mt-8 border-0 bg-white text-accent hover:bg-accent-light"
        >
          Book a demo
        </Button>
      </div>
    </section>
  );
}
