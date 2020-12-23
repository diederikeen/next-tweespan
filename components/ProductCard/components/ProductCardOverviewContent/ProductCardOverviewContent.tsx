import React, { FC } from "react";
import { ReactSVG } from "react-svg";

interface IProductCardOverviewContent {
  title: string;
  icon?: string;
  button?: string;
}

const ProductCardOverviewContent: FC<IProductCardOverviewContent> = ({
  title,
  icon,
  button,
}) => {
  return (
    <div className="card-content">
      {icon && (
        <div className="margin-0 flex items-center">
          <p>
            <strong>{title}</strong>
          </p>
          <ReactSVG src={icon} className="card-arrow" />
        </div>
      )}
    </div>
  );
};

export default ProductCardOverviewContent;
