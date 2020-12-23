import React, { FC } from "react";
import { TImage } from "../../src/types";
import MainProductImage from "./components/MainProductImage";
import ThumbNailImages from "./components/ThumbNailImages";

interface IProductGallery {
  hasMultipleImages: boolean;
  hasNoImage: boolean;
  images: Array<TImage>;
}

const ProductGallery: FC<IProductGallery> = ({
  hasMultipleImages,
  hasNoImage,
  images,
}) => {
  const image = hasNoImage
    ? "/images/icons/2-SPAN.svg"
    : images[0].node.originalSrc;

  return (
    <>
      <MainProductImage imageSrc={image} hasPlaceholder={hasNoImage} />
      {hasMultipleImages && <ThumbNailImages images={images.splice(1)} />}
    </>
  );
};

export default ProductGallery;
