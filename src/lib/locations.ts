/** City and region landing pages under /pawn-shop-software/[slug]. */

export type Location = {
  slug: string;
  name: string;
  region: "Tamil Nadu" | "UAE";
  /** Unique opening paragraph for this page — keep each one different. */
  intro: string;
  /** Nearby towns and areas we mention for local relevance. */
  nearby: string[];
};

export const LOCATIONS: Location[] = [
  {
    slug: "chennai",
    name: "Chennai",
    region: "Tamil Nadu",
    intro:
      "Chennai pawn brokers handle a high volume of pledges every day, often across more than one branch. AssetSynQ replaces the register book with a fast pledge screen, automatic interest, and a live view of cash and gold in every branch.",
    nearby: ["T. Nagar", "Sowcarpet", "Tambaram", "Ambattur", "Avadi", "Porur"],
  },
  {
    slug: "vellore",
    name: "Vellore",
    region: "Tamil Nadu",
    intro:
      "Gold loan shops in Vellore serve customers from town and the surrounding villages. AssetSynQ keeps every customer's pledge history in one place, so your staff can find old pledges in seconds instead of turning register pages.",
    nearby: ["Katpadi", "Gudiyatham", "Ranipet", "Arcot", "Walajapet", "Vaniyambadi"],
  },
  {
    slug: "kanchipuram",
    name: "Kanchipuram",
    region: "Tamil Nadu",
    intro:
      "Kanchipuram pawn shops work with families who pledge gold for weddings, farming, and business needs. AssetSynQ calculates interest the way your schemes are set up and shows overdue pledges before they become a problem.",
    nearby: ["Sriperumbudur", "Walajabad", "Uthiramerur", "Cheyyar"],
  },
  {
    slug: "tiruvallur",
    name: "Tiruvallur",
    region: "Tamil Nadu",
    intro:
      "From Tiruvallur town to Ponneri and Gummidipoondi, pawn brokers need simple software their staff can learn in a day. AssetSynQ works in the browser on any PC or phone, with Tamil and English, and we train your team.",
    nearby: ["Ponneri", "Gummidipoondi", "Tiruttani", "Uthukottai", "Poonamallee"],
  },
  {
    slug: "chengalpattu",
    name: "Chengalpattu",
    region: "Tamil Nadu",
    intro:
      "Chengalpattu district is growing fast, and so are its gold loan businesses. AssetSynQ lets you open new branches without new register books: each branch gets its own cash, pledges, and reports, all visible to the owner.",
    nearby: ["Tambaram", "Guduvanchery", "Maraimalai Nagar", "Madurantakam", "Kelambakkam"],
  },
  {
    slug: "villupuram",
    name: "Villupuram",
    region: "Tamil Nadu",
    intro:
      "Villupuram pawn shops often run on long-standing customer trust and handwritten records. AssetSynQ moves those records into the cloud, including your existing customers and open pledges, so nothing is lost when you switch.",
    nearby: ["Tindivanam", "Gingee", "Kallakurichi", "Ulundurpet", "Vikravandi"],
  },
  {
    slug: "tiruvannamalai",
    name: "Tiruvannamalai",
    region: "Tamil Nadu",
    intro:
      "Gold loan businesses in Tiruvannamalai deal with part payments, renewals, and repledges every week. AssetSynQ records each of these in a few taps and keeps the customer's balance and interest correct automatically.",
    nearby: ["Arani", "Polur", "Chengam", "Vandavasi", "Cheyyar"],
  },
  {
    slug: "cuddalore",
    name: "Cuddalore",
    region: "Tamil Nadu",
    intro:
      "Cuddalore pawn brokers need a clear daily cash report at closing time. AssetSynQ tracks opening balance, cash in and out, and till closing for each branch, and exports reports to Excel in one click.",
    nearby: ["Panruti", "Chidambaram", "Neyveli", "Virudhachalam", "Nellikuppam"],
  },
  {
    slug: "krishnagiri",
    name: "Krishnagiri",
    region: "Tamil Nadu",
    intro:
      "From Krishnagiri to Hosur, pawn shop owners often manage the business while away from the counter. AssetSynQ's phone view shows today's pledges, cash in hand, and overdue items wherever you are.",
    nearby: ["Hosur", "Denkanikottai", "Bargur", "Uthangarai", "Pochampalli"],
  },
  {
    slug: "coimbatore",
    name: "Coimbatore",
    region: "Tamil Nadu",
    intro:
      "Coimbatore's gold loan market is competitive, so speed at the counter matters. AssetSynQ creates a pledge quickly with scheme-based terms, item weights, and photos, so customers are not kept waiting.",
    nearby: ["Gandhipuram", "Tiruppur", "Pollachi", "Mettupalayam", "Sulur"],
  },
  {
    slug: "madurai",
    name: "Madurai",
    region: "Tamil Nadu",
    intro:
      "Madurai has a long pawn broking tradition. AssetSynQ respects how you already work, with your interest schemes, penal interest after the due date, and auction rules, and simply removes the manual calculation.",
    nearby: ["Thirumangalam", "Melur", "Usilampatti", "Dindigul", "Virudhunagar"],
  },
  {
    slug: "tiruchirappalli",
    name: "Tiruchirappalli (Trichy)",
    region: "Tamil Nadu",
    intro:
      "Trichy pawn brokers with several branches need one place to see everything. AssetSynQ gives the owner a live dashboard of active pledges, vault gold and silver, and cash across all branches.",
    nearby: ["Srirangam", "Thuvakudi", "Manapparai", "Lalgudi", "Musiri"],
  },
  {
    slug: "salem",
    name: "Salem",
    region: "Tamil Nadu",
    intro:
      "Salem gold loan shops handle both gold and silver pledges. AssetSynQ tracks each item's weight, notes, and photos, and shows your vault totals for gold and silver separately.",
    nearby: ["Attur", "Omalur", "Mettur", "Namakkal", "Rasipuram"],
  },
  {
    slug: "dubai",
    name: "Dubai",
    region: "UAE",
    intro:
      "AssetSynQ is cloud-based, so gold loan and jewellery businesses in Dubai can use the same pledge workflow as shops in India. It runs in the browser on any PC or phone, and our team supports you over WhatsApp.",
    nearby: ["Deira Gold Souk", "Bur Dubai", "Karama", "Al Barsha", "Jebel Ali"],
  },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    region: "UAE",
    intro:
      "Gold loan and jewellery businesses in Abu Dhabi can run their pledges, interest, and daily cash in AssetSynQ from any browser. There is nothing to install, your data is backed up in the cloud, and setup and training are done online.",
    nearby: ["Mussafah", "Khalifa City", "Al Ain", "Madinat Zayed", "Al Reem Island"],
  },
  {
    slug: "sharjah",
    name: "Sharjah",
    region: "UAE",
    intro:
      "Sharjah gold loan and jewellery businesses often serve customers across the northern Emirates. AssetSynQ keeps every customer's pledge history and payments in one place, on the shop PC or on the owner's phone.",
    nearby: ["Rolla", "Al Nahda", "Ajman", "Umm Al Quwain", "Ras Al Khaimah"],
  },
];

export const LOCATION_REGIONS = ["Tamil Nadu", "UAE"] as const;

export function getLocation(slug: string) {
  return LOCATIONS.find((location) => location.slug === slug);
}

export function locationFaqs(location: Location) {
  const place = location.name;
  return [
    {
      question: `Do you set up pawn shops in ${place}?`,
      answer: `Yes. We set up your shop account, schemes, branches, and staff logins for shops in ${place} and nearby areas, and train your staff. Setup is done online, so no visit is needed.`,
    },
    {
      question: `Can I move my existing register book records in ${place}?`,
      answer:
        "Yes. We help migrate your existing customers and open pledges from register books or Excel, so you can start without re-entering everything.",
    },
    {
      question: "Does it work on a phone?",
      answer:
        "Yes. AssetSynQ runs in the browser on PC and phone. There is nothing to install, and your data is backed up in the cloud.",
    },
    {
      question: "How do I get pricing?",
      answer:
        "Message us on WhatsApp. We share a clear quote for your shop, with setup, training, and cloud hosting included.",
    },
  ];
}
