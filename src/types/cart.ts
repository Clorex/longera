export type CartItem = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  price: number;
  currency: "AUD";
  image: string;
  quantity: number;
  variant: string;
  sizeLabel: string;
  giftWrap?: boolean;
  giftNote?: string;
};