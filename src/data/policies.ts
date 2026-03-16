import type { PolicySection } from "@/types/content";

export const refundPolicy: PolicySection[] = [
  {
    title: "Exchange-Only Policy",
    body: [
      "Longéra offers exchanges only and does not provide refunds for change-of-mind purchases.",
      "If your item arrives damaged or there is an issue with your order, please contact our support team so we can review the situation and assist you.",
    ],
  },
  {
    title: "Eligibility",
    body: [
      "To be eligible for an exchange, products must be returned in accordance with the exchange instructions provided by our team.",
      "Proof of purchase may be required.",
    ],
  },
];

export const privacyPolicy: PolicySection[] = [
  {
    title: "Information We Collect",
    body: [
      "We collect only the information necessary to process orders, provide shipping updates, respond to support enquiries, and improve the customer experience.",
      "This may include your name, email address, shipping details, and other order-related information provided during checkout.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "Your information is used to process transactions, manage deliveries, send order communications, and support customer service.",
      "We may also use limited analytics tools to understand website performance and improve site usability.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We take reasonable steps to protect customer information and work with trusted third-party service providers for payments, hosting, analytics, and operational services.",
    ],
  },
];

export const shippingPolicy: PolicySection[] = [
  {
    title: "Shipping Regions",
    body: [
      "Longéra is based in Australia and aims to serve both Australian and international customers.",
      "Shipping availability may vary by region.",
    ],
  },
  {
    title: "Shipping Updates",
    body: [
      "Customers will receive order-related communication by email, including order confirmation and relevant fulfilment updates where available.",
    ],
  },
  {
    title: "Courier Support",
    body: [
      "Australian shipping architecture is planned with CouriersPlease support as part of the order and logistics workflow.",
    ],
  },
];