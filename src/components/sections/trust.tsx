import {
  Cloud,
  Lock,
  ShieldCheck,
  Building2,
  FileSpreadsheet,
  Smartphone,
} from "lucide-react";

const trustPoints = [
  { icon: Cloud, label: "Cloud Backup" },
  { icon: Lock, label: "Secure Login" },
  { icon: ShieldCheck, label: "Role-Based Access" },
  { icon: Building2, label: "Branch-wise Data Control" },
  { icon: FileSpreadsheet, label: "Exportable Reports" },
  { icon: Smartphone, label: "Mobile & Desktop Access" },
] as const;

export function Trust() {
  return (
    <section id="trust" className="border-y border-border bg-surface py-10 sm:py-12">
      <div className="section-container">
        <h2 className="text-center text-lg font-semibold text-foreground sm:text-xl">
          Why Pawn Shops Trust AssetSynq
        </h2>

        <ul className="mx-auto mt-6 grid max-w-4xl gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-foreground"
            >
              <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
