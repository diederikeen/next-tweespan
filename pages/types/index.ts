type TSingleProduct = {
  handle: string;
  id: string;
  edges?: [];
};

type TImage = {
  id: string;
  altText: string;
  originalSrc: string;
};

type TSingleCollection = {
  node: {
    handle: string;
    id: string;
    image: TImage;
    products: TSingleProduct;
    title: string;
  };
};

export interface ICollectionsResponse {
  collections: {
    edges: Array<TSingleCollection>;
  };
  loading: boolean;
}
