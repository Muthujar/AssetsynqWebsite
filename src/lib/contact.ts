/** Public contact details — keep in sync across site and docs */

export const CONTACT = {
  phone: "7200333298",
  phoneDisplay: "+91 72003 33298",
  phoneTel: "+917200333298",
  email: "hello@assetsynq.com",
  whatsappNumber: "917200333298",
  businessHours: "Mon–Sat, 9 AM – 6 PM IST",
} as const;

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  if (!text?.trim()) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi, I'm interested in AssetSynq for my pawn shop. I'd like to know more about pricing and setup.";

export function buildEnquiryWhatsAppMessage(data: {
  name: string;
  business: string;
  phone: string;
  email: string;
  city: string;
  message?: string;
}): string {
  const lines = [
    "AssetSynq enquiry",
    "",
    `Name: ${data.name}`,
    `Shop: ${data.business}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `City: ${data.city}`,
  ];
  if (data.message?.trim()) {
    lines.push("", `Message: ${data.message.trim()}`);
  }
  return lines.join("\n");
}
