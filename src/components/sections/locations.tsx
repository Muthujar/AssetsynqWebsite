import Link from "next/link";
import { MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/feature-card";
import { cn } from "@/lib/utils";
import { LOCATION_REGIONS, LOCATIONS } from "@/lib/locations";

export function Locations() {
  return (
    <section id="locations" className="bg-background py-14 sm:py-16">
      <div className="section-container">
        <SectionHeader
          title="Pawn Shop Software Across Tamil Nadu & UAE"
          description="We set up and support pawn shops all over Tamil Nadu and in the UAE."
        />

        <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-3">
          {LOCATION_REGIONS.map((region) => {
            const cities = LOCATIONS.filter(
              (location) => location.region === region,
            );
            const wide = cities.length > 6;
            return (
              <div key={region} className={cn(wide && "md:col-span-2")}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  {region}
                </h3>
                <ul
                  className={cn(
                    "mt-3 grid gap-x-6 gap-y-2",
                    wide && "sm:grid-cols-2",
                  )}
                >
                  {cities.map(({ slug, name }) => (
                    <li key={slug}>
                      <Link
                        href={`/pawn-shop-software/${slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                      >
                        <MapPin
                          className="h-4 w-4 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
