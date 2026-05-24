import { Button } from "@/components/ui/button";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/contact";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-16 sm:py-20">
      <div className="section-container relative text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Ready to try AssetSynq?
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
            Chat on WhatsApp
          </Button>
          <Button
            href="#contact"
            variant="secondary"
            size="lg"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            Send enquiry
          </Button>
        </div>
      </div>
    </section>
  );
}
