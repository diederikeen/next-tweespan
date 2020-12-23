export enum ProductTypes {
  Overview = "overview",
  Product = "product",
}

export interface IProductCard {
  id?: string;
  title?: string;
  handle?: string;
  imageUrl?: string;
  type?: ProductTypes;
  minPrice?: string;
  maxPrice?: string;
}

export interface IGetBottomContent {
  type: ProductTypes;
}
