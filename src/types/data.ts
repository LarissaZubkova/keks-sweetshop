export type ShopsInfo = {
  FIRST_SHOP: Shop;
  SECOND_SHOP: Shop;
  PRODUCTION: Shop;
}

export type Shop = {
  name: string;
    address: [number, number];
}
