import styled from "styled-components";
import { rgba } from "polished";
import { padding } from "../../styles";

export const Card = styled.div`
  background-color: white;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 4px 10px ${rgba(115, 115, 115, 0.1)};
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 125ms ease-out;

  &:hover {
    transform: translateY(-5px);

    .card-arrow {
      transform: translateX(10px);
    }
  }

  a {
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .image-wrap {
    position: relative;
    padding: 0 0 100%;

    .image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .card-content {
    padding: ${padding.m};
    margin-top: auto;

    p {
      margin: 0;
    }
  }

  .card-arrow {
    width: 16px;
    display: inline-block;
    position: relative;
    top: 3px;
    margin-left: 8px;
    transition: transform 125ms ease-out;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .card-button {
    padding: ${padding.sm} ${padding.l};
    border-radius: 2px;
    background-color: blue;
    color: white;
    font-size: 0.8rem;
    font-weight: 800;
    margin-top: 1em;
    display: inline-block;
  }
`;
