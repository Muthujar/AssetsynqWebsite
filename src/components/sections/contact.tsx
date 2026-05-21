"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, Clock } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-y border-border bg-surface py-16 sm:py-20">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="section-heading">Get in touch</h2>
            <p className="section-subheading">
              Book a demo or ask about pricing and migration from your existing
              books.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href="mailto:YOUR_EMAIL@assetsynq.com"
                    className="text-sm text-muted hover:text-accent"
                  >
                    YOUR_EMAIL@assetsynq.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="text-sm text-muted hover:text-accent"
                  >
                    +91 XXXXXXXXXX
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Business hours
                  </p>
                  <p className="text-sm text-muted">Mon–Sat, 9 AM – 6 PM IST</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <p className="text-lg font-semibold text-foreground">
                  Thank you for reaching out!
                </p>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  We&apos;ll get back to you shortly. For urgent queries, call
                  or WhatsApp us directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="business"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Shop / Business name{" "}
                      <span className="text-accent">*</span>
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      required
                      className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Phone <span className="text-accent">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    City <span className="text-accent">*</span>
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Message{" "}
                    <span className="font-normal text-muted">
                      (optional: number of branches)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-y rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
