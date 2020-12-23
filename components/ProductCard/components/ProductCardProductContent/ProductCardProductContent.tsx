import React, { FC } from "react";
import { titlelize } from "../../../../helpers";
import { formatCurrency } from "../../../../helpers/formatting";

interface IProductCardProductContent {
  minPrice: string;
  maxPrice?: string;
  title: string;
}

const ProductCardProductContent: FC<IProductCardProductContent> = ({
  minPrice,
  maxPrice,
  title,
}) => {
  return (
    <div className="card-content">
      <h4>{titlelize(title, true)}</h4>
      <span
        className="card-price"
        style={{
          color: "rgb(159, 159, 159)",
          fontSize: "0.925rem",
          fontWeight: "bolder",
        }}
      >
        {formatCurrency(minPrice)} {maxPrice && `- ${formatCurrency(maxPrice)}`}
      </span>
      <div className="text-right">
        {" "}
        <span className="card-button">Bekijk</span>{" "}
      </div>
    </div>
  );
};

export default ProductCardProductContent;
