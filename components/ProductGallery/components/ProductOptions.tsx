import React, { FC } from "react";
import styled from "styled-components";
import { TVariant } from "product/types";
import { breakpoint } from "../../../styles";

export const Wrap = styled.div`
  @media screen and (min-width: ${breakpoint.md}) {
    margin-left: 2em;
  }
`;

interface IProductOptions {
  variants: {
    edges: TVariant[];
  };
  onVariantChange: (id: string) => void;
}

const ProductOptions: FC<IProductOptions> = ({
  variants,
  onVariantChange,
}: any) => {
  const handleSelectChange = ({ currentTarget }: any) => {
    onVariantChange(currentTarget.value);
  };

  return (
    <Wrap>
      <h4 style={{ marginBottom: "0.5em" }}>Beschikbare varianten:</h4>
      <select style={{ width: "300px" }} onChange={handleSelectChange}>
        {variants.edges.map(({ node }: TVariant) => (
          <option key={node.id} value={node.id}>
            {node.title}
          </option>
        ))}
      </select>
    </Wrap>
  );
};

export default ProductOptions;
