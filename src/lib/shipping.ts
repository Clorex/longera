export type ShippingQuoteInput = {
  country: string;
  postalCode?: string;
  city?: string;
};

export async function getShippingQuote(_input: ShippingQuoteInput) {
  return {
    carrier: "CouriersPlease",
    serviceName: "Standard Shipping",
    amount: 0,
    currency: "AUD",
    estimatedDays: "Calculated in later shipping batch",
  };
}