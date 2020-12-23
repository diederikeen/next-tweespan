import styled from "styled-components";
import { padding, breakpoint } from "../../styles";

export const Wrap = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #4f0b0f;
  color: white;
  padding: ${padding.sm} 0;

  @media screen and (max-width: ${breakpoint.l}) {
    padding: ${padding.sm} ${padding.sm} ${padding.sm} 0;
  }

  a {
    color: currentColor;
  }

  svg {
    fill: currentColor;
  }

  .content {
    align-items: center;
    display: flex;
    justify-content: flex-end;

    margin-left: auto;
  }

  .price {
    padding: 0.3rem 0.5rem;
    border-radius: 20px;
    background-color: #a88687;
    font-weight: 600;
    margin: 0 0 0 1rem;
    font-size: 0.8rem;
    transform: translateY(-0.2rem);

    @media screen and (max-width: ${breakpoint.l}) {
      display: none;
    }
  }
`;

export const CartWrap = styled.div`
  position: relative;
  width: auto;
  display: inline-block;

  .count {
    display: flex;
    text-align: center;
    padding-top: 0.1px;
    font-size: 0.6rem;
    font-weight: bold;
    color: black;
    border-radius: 50px;
    height: 18px;
    width: 18px;
    background: white;
    display: inline-block;
    position: absolute;
    left: 100%;
    top: 0;
    transform: translate(-50%, -25%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
