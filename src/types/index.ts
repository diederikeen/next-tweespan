// type TSingleProduct = {
//   handle: string;
//   id: string;
//   edges?: [];
// };

// type TImageSum = {
//   id: string;
//   altText: string;
//   originalSrc: string;
// };

// type TSingleCollectionNode = {
//   node: {
//     handle: string;
//     id: string;
//     image: TImageSum;
//     products: TSingleProduct;
//     title: string;
//   };
// };

export interface ICollectionsResponse {
  collections: {
    edges: Array<TSingleCollection>;
  };
  loading: boolean;
}


export type TImage = {
  node: {
    altText?: string;
    id: string;
    originalSrc?: string;
  };
};

export type TSingleProduct = {
  node: {
    id: string;
    title: string;
    handle: string;
    images: {
      edges: Array<TImage>;
    };
    priceRange: {
      minVariantPrice: {
        amount: string;
      };
      maxVariantPrice: {
        amount: string;
      };
    };
  };
};

export type TSingleCollection = {
  description?: string;
  id: string;
  title: string;
  products: {
    edges: Array<TSingleProduct>;
  };
};

export interface ISingleCollection {
  data: {
    collectionByHandle: TSingleCollection;
  };
  loading: boolean;
}


export type TOption = {
  id: string;
  name: string;
  values: string[];
};

export type TVariant = {
  node: {
    id: string;
    priceV2: {
      amount: string;
    };
    title: string;
    quantityAvailable: number;
    product: {
      id: string;
      priceRange: {
        maxVariantPrice: {
          amount: string;
          currencyCode: string;
        };
        minVariantPrice: {
          amount: string;
          currencyCode: string;
        };
      };
    };
  };
};

interface IProduct {
  images: {
    edges: Array<TImage>;
  };
  options: Array<TOption>;
  variants: {
    edges: Array<TVariant>;
  };
  description: string;
}

export interface IProductByHandle {
  data: {
    productByHandle: IProduct;
  };
  loading: boolean;
}
