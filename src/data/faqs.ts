import type { FaqItem } from "@/types/content";

export const faqs: FaqItem[] = [
  {
    id: "how-does-longera-work",
    question: "How does Longéra deodorant work?",
    answer:
      "Longéra is designed around the biology of body odour. Instead of masking odour with fragrance, it focuses on the compounds bacteria rely on to create underarm odour, helping reduce odour before it starts.",
  },
  {
    id: "does-longera-stop-sweating",
    question: "Does Longéra stop sweating?",
    answer:
      "No. Longéra is designed to control odour, not block your natural sweating process. Sweat itself does not smell — body odour forms when bacteria break down certain compounds in sweat.",
  },
  {
    id: "is-it-fragrance-free",
    question: "Is it fragrance-free?",
    answer:
      "Yes. Longéra is fragrance-free and is positioned as a real odour-control solution rather than a perfume-based deodorant.",
  },
  {
    id: "is-it-safe-for-sensitive-skin",
    question: "Is it suitable for sensitive skin?",
    answer:
      "Longéra is designed to avoid harsh chemicals and is positioned as a gentle option for many people, especially in the everyday black variant. As with any personal care product, patch testing is recommended if your skin is highly sensitive.",
  },
  {
    id: "does-it-contain-aluminium",
    question: "Does it contain aluminium?",
    answer:
      "No. Longéra is aluminium-free.",
  },
  {
    id: "does-it-contain-baking-soda",
    question: "Does it contain baking soda?",
    answer:
      "No. Longéra does not contain baking soda.",
  },
  {
    id: "how-long-does-protection-last",
    question: "How long does protection last?",
    answer:
      "The product packaging states up to 36 hours protection. Individual results may vary depending on body chemistry, climate, and activity level.",
  },
  {
    id: "what-is-the-difference-between-black-and-green",
    question: "What is the difference between the black and green variants?",
    answer:
      "The black variant is positioned for daily wear, mild to warm weather, and sensitive skin. The green variant is built for athletes, heavy sweaters, and hotter or more humid conditions.",
  },
  {
    id: "why-do-some-people-have-less-body-odour",
    question: "Why do some people naturally have less body odour?",
    answer:
      "The founder materials reference the ABCC11 gene, which affects whether some people produce the odour-forming precursors that bacteria break down. This helps explain why some people naturally have less underarm odour than others.",
  },
  {
    id: "can-i-use-longera-every-day",
    question: "Can I use Longéra every day?",
    answer:
      "Yes. Longéra is designed for regular daily use as part of a simple, fragrance-free personal care routine.",
  },
];

export function getFaqById(id: string) {
  return faqs.find((faq) => faq.id === id);
}