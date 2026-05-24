import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.2) 0%, transparent 50%)",
        }}
      />
      <div className="section-container relative text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to simplify your pawn shop?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Join shops across India moving from registers to a system built for
          pledges, interest, and branch cash.
        </p>
        <Button
          href="#contact"
          variant="gold"
          size="lg"
          className="mt-8"
        >
          Book a demo
        </Button>
      </div>
    </section>
  );
}
