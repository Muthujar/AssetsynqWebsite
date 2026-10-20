import { Button } from "@/components/ui/button";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/contact";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-hero py-12 sm:py-16">
      <span
        className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gold-bright/90 lg:-right-20 lg:-top-20 lg:h-56 lg:w-56"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-white/10"
        aria-hidden="true"
      />
      <div className="section-container relative text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to try AssetSynQ?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/85">
          Message us on WhatsApp. We will show you a demo and set up your shop
          when you are ready.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
            variant="gold"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp for Demo
          </Button>
          <Button
            href="#contact"
            variant="onDark"
            size="lg"
          >
            Send enquiry
          </Button>
        </div>
      </div>
    </section>
  );
}
