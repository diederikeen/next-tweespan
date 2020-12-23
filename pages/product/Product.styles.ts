import styled from "styled-components";
import { breakpoint } from "../../styles";
import { rgba } from "polished";

export const MainImage = styled.div`
  width: 100%;
  padding: 0 0 75%;
  position: relative;
  background-color: white;
  border-radius: 3px;
  overflow: hidden;

  div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const Wrap = styled.div`
  display: flex;

  .content-wrap {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${breakpoint.md}) {
      flex-direction: row;
    }
  }
`;

export const MainContent = styled.div`
  width: 100%;

  @media screen and (min-width: ${breakpoint.md}) {
    width: 40%;
    flex-shrink: 0;
  }

  .thumbnail-wrap {
    display: flex;
    position: relative;
    margin: 16px -16px 0 -16px;
    padding: 0 8px;

    .thumbnail-image {
      margin: 0 8px;
      max-width: 33%;

      img {
        width: 100%;
      }
    }
  }
`;

export const Aside = styled.div`
  flex-grow: 1;
  position: relative;
  padding: 2em 1em;

  @media screen and (min-width: ${breakpoint.md}) {
    margin-left: 3em;
    padding: 2em;
  }

  h1 {
    @media screen and (max-width: ${breakpoint.md}) {
      font-size: 1.8rem;
    }
  }

  &:after {
    content: "";
    position: absolute;
    border-radius: 4px;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100%;
    background-color: white;
    display: block;
    box-shadow: 0px 4px 10px ${rgba("#000", 0.05)};
    z-index: -1;
  }

  .select-content {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${breakpoint.md}) {
      align-items: flex-end;
      flex-direction: row;
    }
  }

  .button-content {
    margin-top: 3em;

    @media screen and (max-width: ${breakpoint.md}) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .product-price {
    font-size: 1.4rem;
    opacity: 0.6;
    margin: 0 0 1.2em;
  }

  .product-description {
    margin-top: 0;
    margin-bottom: 1em;
    font-size: 14px;
    opacity: 0.7;
  }
`;
