import styled from "styled-components";
import { breakpoint } from "../styles";

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;

  @media screen and (min-width: ${breakpoint.md}) {
    margin: 0 -16px;
    justify-content: flex-start;
    width: calc(100% + 32px);
  }
`;

export const Col = styled.div`
  width: calc(100% / 2 - 16px);
  margin: 8px;
  flex-shrink: 0;
  position: relative;

  @media screen and (min-width: ${breakpoint.md}) {
    width: calc(100% / 3 - 32px);
    margin: 16px;
  }

  @media screen and (min-width: ${breakpoint.l}) {
    width: calc(100% / 4 - 32px);
  }

  @media screen and (min-width: ${breakpoint.lg}) {
    width: calc(100% / 5 - 32px);
  }
`;
