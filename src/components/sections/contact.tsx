"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  buildEnquiryWhatsAppMessage,
  CONTACT,
  DEFAULT_WHATSAPP_MESSAGE,
  whatsappUrl,
} from "@/lib/contact";

const inputClass =
  "w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent focus:ring-2 focus:ring-accent/20";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const message = buildEnquiryWhatsAppMessage({
      name: String(formData.get("name") ?? ""),
      business: String(formData.get("business") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      city: String(formData.get("city") ?? ""),
      message: String(formData.get("message") ?? ""),
    });
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="border-y border-border bg-surface py-16 sm:py-20"
    >
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="section-heading">Get started with us</h2>
            <p className="section-subheading">
              We set up your shop account for you — no self sign-up. Message us
              on WhatsApp for the fastest response, or send an enquiry using the
              form.
            </p>

            <div className="mt-8">
              <Button
                href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                variant="whatsapp"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                Chat on WhatsApp
              </Button>
              <p className="mt-3 text-sm text-muted">
                Preferred — demo, pricing, and account setup
              </p>
            </div>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <MessageCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#25D366]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">WhatsApp</p>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <a
                    href={`tel:${CONTACT.phoneTel}`}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Business hours
                  </p>
                  <p className="text-sm text-muted">{CONTACT.businessHours}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="card rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Enquiry form
            </h3>
            <p className="mt-1 text-sm text-muted">
              Fill in your details — we&apos;ll open WhatsApp with your message
              so our team can reply and arrange setup.
            </p>

            {submitted ? (
              <div className="mt-8 flex min-h-[280px] flex-col items-center justify-center text-center">
                <p className="text-lg font-semibold text-foreground">
                  Thank you!
                </p>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  WhatsApp should have opened with your enquiry. Send the message
                  there and we&apos;ll get back to you shortly.
                </p>
                <Button
                  href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                  variant="whatsapp"
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6"
                >
                  Open WhatsApp again
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
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
                      className={inputClass}
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
                      className={inputClass}
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
                      className={inputClass}
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
                      className={inputClass}
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
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Message{" "}
                    <span className="font-normal text-muted">
                      (optional: branches, questions)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${inputClass} resize-y`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand-gradient px-5 py-3 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Send enquiry via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
