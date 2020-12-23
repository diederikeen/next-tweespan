import styled from "styled-components";
import { rgba } from "polished";
import { padding } from "..";

const Nav = styled.nav`
  padding: 1.2rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #dfdfdf;

  a {
    color: black;
    font-weight: 600;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 2em;
    }

    &:hover {
      color: #a88687;
    }
  }

  .active {
    color: #a88687;
  }

  .dropdown {
    position: relative;
    display: inline-block;
    font-weight: 600;
    margin-right: 2em;

    &:hover {
      cursor: pointer;

      .dropdown-content {
        display: block;
      }
    }

    .dropdown-content {
      display: none;
      position: absolute;
      right: 0;
      z-index: 8;
    }

    ul {
      position: relative;
      background-color: white;
      list-style-type: none;
      box-shadow: 0px 1px 8px ${rgba("#000", 0.12)};
      padding: ${padding.m};

      &:before,
      &:after {
        content: "";
        position: absolute;
        bottom: 100%;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #dfdfdf;

        right: 10px;
      }

      &:after {
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        border-bottom: 9px solid white;
        transform: translateX(-1px);
      }

      li {
        padding: ${padding.sm} 0;
      }
    }
  }
`;

export default Nav;
