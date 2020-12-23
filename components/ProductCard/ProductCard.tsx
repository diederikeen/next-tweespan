import React, { FC } from "react";
import Link from "next/link";

import { Card } from "./ProductCard.styles.";

import ProductCardOverviewContent from "./components/ProductCardOverviewContent/ProductCardOverviewContent";
import ProductCardProductContent from "./components/ProductCardProductContent/ProductCardProductContent";
import { IProductCard, IGetBottomContent, ProductTypes } from "./types";

const ProductCard: FC<IProductCard> = ({
  title,
  handle,
  imageUrl,
  type = ProductTypes.Overview,
  minPrice,
  maxPrice,
}) => {
  const LongArrow = "/images/icons/long-arrow.svg";

  const GetBottomComponent = ({ type }: IGetBottomContent) => {
    switch (type) {
      case ProductTypes.Product:
        return (
          <ProductCardProductContent
            title={title}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        );

      case ProductTypes.Overview:
        return <ProductCardOverviewContent title={title} icon={LongArrow} />;
    }
  };

  const cardUrl = {
    href:
      type === ProductTypes.Overview ? "/categorie/[cid]" : "/product/[pid]",
    as:
      type === ProductTypes.Overview
        ? `/categorie/${handle}`
        : `/product/${handle}`,
  };

  return (
    <Card>
      <Link href={cardUrl.href} as={cardUrl.as}>
        <a>
          <div className="image-wrap">
            <div
              className="image"
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            ></div>
            {/* <img className="image" src={imageUrl} alt={`${title} - 2-Span`} /> */}
          </div>

          <GetBottomComponent type={type} />
        </a>
      </Link>
    </Card>
  );
};

export default ProductCard;
