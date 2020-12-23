import React, { FC } from "react";
import { Wrap } from "./ProductQuantitySelect.styles";

interface IProductQuantitySelect {
  onChange: (val: number) => void;
  maxAmount: number;
}

const ProductQuantitySelect: FC<IProductQuantitySelect> = ({
  onChange,
  maxAmount,
}) => {
  const handleChange = (event: { currentTarget: { value: string } }) => {
    const value = parseInt(event.currentTarget.value);
    onChange(value);
  };

  return (
    <Wrap>
      <p style={{ marginBottom: "0.5em" }}>
        <strong>Aantal</strong>
      </p>
      <select
        onChange={handleChange}
        style={{ width: "150px" }}
        disabled={!maxAmount}
      >
        {Array.from(Array(maxAmount ? maxAmount : 1)).map((_, index) => {
          return (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          );
        })}
      </select>
    </Wrap>
  );
};

export default ProductQuantitySelect;
