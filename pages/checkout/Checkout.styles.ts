import styled from "styled-components";
import { rgba } from "polished";
import { breakpoint } from "../../styles";

export const Wrap = styled.div`
  border-radius: 4px;
  margin-top: 2em;
`;

//TODO Create different styling for seperation between checkout components
export const Row = styled.div`
  padding: 2em;
  display: flex;
  align-items: flex-start;
  background-color: white;
  width: 100%;
  box-shadow: 0px 2px 8px ${rgba("#000", 0.05)};
  margin: 1em 0;

  @media screen and (min-width: ${breakpoint.md}) {
    align-items: center;
  }

  .thumbnail {
    position: relative;
    flex-shrink: 0;
    width: 100px;
    height: 100px;

    @media screen and (min-width: ${breakpoint.md}) {
      width: 125px;
      height: 125px;
    }

    > div {
      position: absolute;
      border-radius: 2px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }
  }

  .row-content {
    display: flex;
    flex-direction: column;

    a {
      color: black;
      text-decoration: none;

      &:hover {
        h3 {
          color: blue;
        }
      }
    }

    @media screen and (min-width: ${breakpoint.md}) {
      flex-direction: row;
      flex-grow: 1;
      align-self: stretch;
    }
  }

  .text-content {
    flex-direction: column;
    padding: 0 2em;

    h3 {
      font-size: 1.2rem;
      margin: 0 0 0.5em;

      @media screen and (min-width: ${breakpoint.md}) {
        font-size: 1.4rem;
      }
    }

    p {
      opacity: 0.7;
      margin: 0;
      font-size: 0.825rem;

      @media screen and (min-width: ${breakpoint.md}) {
        font-size: 1rem;
      }

      &:not(:last-child) {
        margin: 0 0 0.25em;
      }
    }
  }

  .actions {
    padding: 1em 0 0 2em;
    margin-top: 0.4em;
    position: relative;

    @media screen and (min-width: ${breakpoint.md}) {
      margin-left: auto;
      margin-top: 0;
      display: flex;
      align-items: center;
    }
  }

  .remove-icon {
    width: 18px;
    height: 18px;
    margin: 0 0.5em 0 0;
  }

  .remove-button {
    display: flex;
    align-items: center;
    padding: 0.5em 0.5em 0.5em 0;
    background-color: transparent;

    &:hover {
      background-color: #eee;
    }
  }

  .price {
    border-top: 1px solid #ccc;
    margin: 1em 0 0 0;
    padding: 1em 0 0 0;
    width: 100%;
    text-align: right;

    @media screen and (min-width: ${breakpoint.md}) {
      margin: 0;
      padding: 0;
      border: none;
      font-size: 1.2rem;
    }
  }
`;

export const PaymentActions = styled.div`
  margin: 3em 0 0;
  display: flex;
  justify-content: flex-end;
`;

export const PriceColumn = styled.div`
  text-align: right;
  padding: 2em;
  background-color: white;
  margin-top: 4em;

  span {
    font-weight: 800;
    font-size: 1.1rem;
  }
`;
