import {
  Zap,
  Gem,
  RefreshCw,
  Coins,
  UserCheck,
  Calculator,
  Languages,
  FileSpreadsheet,
  LayoutDashboard,
  Gavel,
  Landmark,
} from "lucide-react";
import {
  HorizontalFeatureRow,
  SectionHeader,
} from "@/components/ui/feature-card";

const features = [
  {
    icon: Zap,
    title: "Fast Pledge Creation",
    description: "Create new pledges quickly with scheme-based terms.",
  },
  {
    icon: Gem,
    title: "Item Management",
    description: "Track weight, qty, photos, and notes for each pledge item.",
  },
  {
    icon: RefreshCw,
    title: "Repledge Management",
    description: "Send pledges to repledge stores and close them in bulk.",
  },
  {
    icon: Coins,
    title: "Part Payment",
    description: "Take part interest or part principal payments easily.",
  },
  {
    icon: UserCheck,
    title: "Customer Records",
    description: "Save customer details, ID proof, phone, and full pledge history.",
  },
  {
    icon: Calculator,
    title: "Interest & Due Dates",
    description: "Auto interest before expiry. Penal interest after due date.",
  },
  {
    icon: Languages,
    title: "Tamil & English",
    description: "Staff can use the app in Tamil or English.",
  },
  {
    icon: FileSpreadsheet,
    title: "Detailed Reports",
    description: "Daily cash, overdue pledges, and interest collected. Export to Excel.",
  },
  {
    icon: LayoutDashboard,
    title: "Live Dashboard",
    description: "See active pledges, cash in hand, vault metals, and profit at a glance.",
  },
  {
    icon: Gavel,
    title: "Auction",
    description: "Mark items for auction, track sold or unsold, and settle amounts.",
  },
  {
    icon: Landmark,
    title: "Branch Cash",
    description: "Track opening balance, daily cash in/out, and till closing.",
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="bg-background py-14 sm:py-16">
      <div className="section-container">
        <SectionHeader
          title="Built Specifically for Pawn Shops"
          description="Designed for Indian pawn shops and gold loan businesses."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4">
          {features.map((item) => (
            <HorizontalFeatureRow key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
