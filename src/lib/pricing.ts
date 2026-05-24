/** Public pricing — keep in sync with docs/PRICING_AND_PLANS.md */

export const PRICING = {
  planName: "AssetSynq Complete",
  billing: "Yearly",

  firstYear: {
    list: 15000,
    offer: 9999,
  },
  renewal: {
    list: 5999,
    offer: 3999,
  },
  extraBranch: {
    list: 3499,
    offer: 2499,
  },

  includedBranches: 1,
} as const;

export function formatInr(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

/** Shorthand for display strings */
export const firstYearPrice = PRICING.firstYear.offer;
export const renewalPrice = PRICING.renewal.offer;
export const extraBranchPrice = PRICING.extraBranch.offer;

export const PLAN_FEATURES = [
  "1 branch included",
  "Unlimited staff users",
  "Loans, interest, payments, repledge & auction",
  "Daily cash, overdue & income reports",
  "Excel export & bulk import",
  "Printable receipts",
  "Cloud hosting & data backup",
  "Setup, training & WhatsApp support (first year)",
  "Tamil & English",
] as const;
