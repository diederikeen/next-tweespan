import React, { FC } from "react";
import { TImage } from "categorie/types";

interface IThumbNailImages {
  images: Array<TImage>;
}

const ThumbNailImages: FC<IThumbNailImages> = ({ images }) => {
  return (
    <div className="thumbnail-wrap">
      {images.map((img) => (
        <div className="thumbnail-image" key={img.node.id}>
          <img src={img.node.originalSrc} />
        </div>
      ))}
    </div>
  );
};

export default ThumbNailImages;
