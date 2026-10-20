export type FaqItem = {
  question: string;
  answer: string;
  questionTa: string;
  answerTa: string;
};

export const FAQS: FaqItem[] = [
  {
    question: "Is AssetSynQ suitable for small pawnshops?",
    questionTa: "சிறிய pawn shop-களுக்கு AssetSynQ ஏற்றதா?",
    answer:
      "Yes. It is built for small and medium pawn shops, especially owners moving from register books. We help with setup, training, and migrating your existing records.",
    answerTa:
      "ஆம். Register book-ல் இருந்து மாறும் சிறிய மற்றும் நடுத்தர pawn shop-களுக்காக இது உருவாக்கப்பட்டது. Setup, training, மற்றும் உள்ள records-ஐ migrate செய்ய நாங்கள் உதவுகிறோம்.",
  },
  {
    question: "Can AssetSynQ manage gold loan interest?",
    questionTa: "Gold loan interest-ஐ AssetSynQ கணக்கிடுமா?",
    answer:
      "Yes. You set your scheme rules. Simple interest runs until expiry. After due date, penal interest compounds monthly as per your settings.",
    answerTa:
      "ஆம். உங்கள் scheme rules-ஐ நீங்கள் அமைக்கலாம். Due date வரை simple interest. அதற்குப் பிறகு உங்கள் settings-ன்படி monthly penal interest சேரும்.",
  },
  {
    question: "Does it support repledge, auction, and part payments?",
    questionTa: "Repledge, auction, மற்றும் part payment support உண்டா?",
    answer:
      "Yes. You can record part payments, track repledges to external stores, and manage auction items in the same system.",
    answerTa:
      "ஆம். Part payment பதிவு செய்யலாம், repledge track செய்யலாம், auction items-ஐயும் ஒரே system-ல் manage செய்யலாம்.",
  },
  {
    question: "Is customer data secure?",
    questionTa: "Customer data பாதுகாப்பா?",
    answer:
      "Yes. Each shop has a separate account. Login needs your shop code, username, and password. Role-based access and cloud backups are included.",
    answerTa:
      "ஆம். ஒவ்வொரு shop-க்கும் தனி account. Login-க்கு கடை குறியீடு, username, password தேவை. Role-based access மற்றும் cloud backup உண்டு.",
  },
  {
    question: "How do I get pricing?",
    questionTa: "விலை எப்படி தெரிந்துகொள்வது?",
    answer:
      "Message us on WhatsApp or send an enquiry. We share a clear quote for your shop on the call or chat — setup, training, and cloud hosting are included.",
    answerTa:
      "WhatsApp-ல் message அனுப்புங்கள் அல்லது enquiry அனுப்புங்கள். உங்கள் shop-க்கு ஏற்ற quote-ஐ call அல்லது chat-ல் சொல்கிறோம் — setup, training, cloud hosting included.",
  },
  {
    question: "How do I get started? Do you support Tamil?",
    questionTa: "எப்படி தொடங்குவது? Tamil support உண்டா?",
    answer:
      "Message us on WhatsApp or fill the enquiry form. We create and set up your shop account — there is no self sign-up. Tamil and English are both supported. No install needed; open the app in your browser on PC or phone.",
    answerTa:
      "WhatsApp-ல் message அனுப்புங்கள் அல்லது enquiry form நிரப்புங்கள். நாங்கள் உங்கள் shop account-ஐ create செய்து setup செய்கிறோம் — website-ல் தானாக sign up இல்லை. Tamil மற்றும் English இரண்டும் உண்டு. Install தேவையில்லை; PC அல்லது phone browser-ல் திறக்கலாம்.",
  },
];
