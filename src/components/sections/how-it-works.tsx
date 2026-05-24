const steps = [
  {
    step: "1",
    title: "WhatsApp us",
    description:
      "Tell us about your shop. We will explain the plan and answer your questions.",
  },
  {
    step: "2",
    title: "We set up your shop",
    description:
      "We create your account, loan schemes, branch, and staff logins.",
  },
  {
    step: "3",
    title: "Start using it",
    description:
      "We train your staff. You can create loans, take payments, and run reports.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-heading">How it works</h2>
          <p className="section-subheading mx-auto">
            Three simple steps. We do the setup — you run your shop.
          </p>
        </div>
        <ol className="mt-10 grid gap-8 sm:grid-cols-3">
          {steps.map(({ step, title, description }) => (
            <li key={step} className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-lg font-bold text-white">
                {step}
              </span>
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
