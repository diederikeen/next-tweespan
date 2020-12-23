import React, { FC } from "react";
import { MainImage } from "product/Product.styles";

interface IMainProductImage {
  imageSrc: string;
  hasPlaceholder: boolean;
}

const MainProductImage: FC<IMainProductImage> = ({
  imageSrc,
  hasPlaceholder,
}) => {
  return (
    <MainImage>
      <div style={{ backgroundImage: `url(${imageSrc})` }} />
    </MainImage>
  );
};

export default MainProductImage;
