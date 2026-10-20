import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PRODUCT_SCREENSHOTS } from "@/lib/brand";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/contact";
import { Cloud, Languages, GraduationCap, Smartphone } from "lucide-react";

const trustPills = [
  { icon: Cloud, label: "Cloud Based" },
  { icon: Languages, label: "Tamil & English" },
  { icon: Smartphone, label: "Works on your phone" },
  { icon: GraduationCap, label: "Setup & Training Included" },
];

function HeroVisual() {
  const { dashboard } = PRODUCT_SCREENSHOTS;

  return (
    <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
      <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-surface shadow-2xl shadow-black/30">
        <div className="flex items-center gap-2 border-b border-border bg-background/80 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <p className="mx-auto truncate text-xs font-medium text-muted">
            AssetSynQ — today at the shop
          </p>
        </div>

        <Image
          src={dashboard.src}
          alt={dashboard.alt}
          width={dashboard.width}
          height={dashboard.height}
          className="block h-auto w-full"
          sizes="(min-width: 1152px) 544px, (min-width: 1024px) 45vw, (min-width: 672px) 672px, 100vw"
          preload
        />
      </div>

      <div className="absolute -left-2 top-10 hidden rounded-lg border border-gold/30 bg-surface px-3 py-2 shadow-md sm:block">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-gold-dim">
          Vault view
        </p>
        <p className="text-xs font-bold text-foreground">Gold · Silver</p>
      </div>
      <div className="absolute -right-1 bottom-12 hidden rounded-lg border border-accent/20 bg-surface px-3 py-2 shadow-md sm:block">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-accent">
          Live dashboard
        </p>
        <p className="text-xs font-bold text-foreground">Cash &amp; pledges</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      {/* Accent circles from the app's sign-in panel. */}
      <span
        className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold-bright/90 lg:-right-24 lg:-top-24 lg:h-72 lg:w-72"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10"
        aria-hidden="true"
      />

      <div className="section-container relative py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-bright">
              Pawn shop software
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Run your pawn shop without the{" "}
              <span className="text-gold-bright">register book</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/85 sm:text-xl">
              New pledge, take payment, close jewels — on phone or PC. Tamil
              and English. We set up your shop.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Button
                href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                variant="whatsapp"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp for Demo
              </Button>
              <Button href="#migration" variant="onDark" size="lg">
                See how it works
              </Button>
            </div>

            <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {trustPills.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white"
                >
                  <Icon className="h-3.5 w-3.5 text-gold-bright" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
