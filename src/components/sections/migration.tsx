import { BookOpen, FileSpreadsheet, GraduationCap, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/feature-card";

const items = [
  { icon: Users, label: "Existing Customer Records" },
  { icon: BookOpen, label: "Existing Pledge Records" },
  { icon: FileSpreadsheet, label: "Excel Import Support" },
  { icon: GraduationCap, label: "Staff Training Included" },
] as const;

const steps = [
  {
    step: "1",
    title: "WhatsApp us",
    description: "Tell us about your shop. We answer questions and share a quote on WhatsApp.",
  },
  {
    step: "2",
    title: "We set up your shop",
    description: "We create your account, schemes, branch, and staff logins.",
  },
  {
    step: "3",
    title: "Start using it",
    description: "We train your staff. You create pledges, take payments, and run reports.",
  },
] as const;

export function Migration() {
  return (
    <section id="migration" className="bg-background py-14 sm:py-16">
      <div className="section-container">
        <SectionHeader
          title="Moving From Register Books?"
          description="We help migrate your existing customer and pledge records into AssetSynQ. No need to start from scratch."
        />

        <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-sm">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </li>
          ))}
        </ul>

        <ol className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
          {steps.map(({ step, title, description }) => (
            <li key={step} className="text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                {step}
              </span>
              <h3 className="mt-3 font-semibold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
