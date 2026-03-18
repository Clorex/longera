export type ShippingQuoteInput = {
  country: string;
  postalCode?: string;
  city?: string;
};

export type TrackingLookupInput = {
  orderNumber?: string;
  email?: string;
  trackingNumber?: string;
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

export async function getTrackingStatus(input: TrackingLookupInput) {
  return {
    carrier: "CouriersPlease",
    status: "Tracking integration ready",
    trackingNumber: input.trackingNumber || "Not provided",
    message:
      "Tracking page is active. Live courier status integration can be connected to CouriersPlease API using your account credentials.",
  };
}
