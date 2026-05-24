const steps = [
  {
    step: "1",
    title: "Sign up your shop",
    description:
      "Register your organization, first branch, and admin user.",
  },
  {
    step: "2",
    title: "Set up schemes, rates, and items",
    description: "Match how you already run the business.",
  },
  {
    step: "3",
    title: "Start pledges and collections",
    description: "Dashboard and reports update as you work.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-dark py-16 sm:py-20">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-heading">How it works</h2>
          <p className="section-subheading mx-auto">
            Up and running in three straightforward steps.
          </p>
        </div>
        <ol className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map(({ step, title, description }) => (
            <li key={step} className="relative text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-lg font-bold text-white shadow-lg shadow-accent/30">
                {step}
              </span>
              <h3 className="mt-4 font-semibold text-dark-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dark-muted">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
