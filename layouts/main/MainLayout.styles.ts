import { createGlobalStyle } from "styled-components";
import { rgba, darken, lighten } from "polished";
import { padding, breakpoint } from "../../styles";

const cheveronDown = "/images/icons/cheveron_down.svg";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    font-family: 'Nunito Sans', sans-serif;
  }

  body {
    background-color: #f9fafb;
    overflow-x: hidden;
    overflow-y: inherit;
  }


  h1,h2,h3,h4,h5 {
    margin: 0;
    font-weight: 800;
  }

  /*Flex classes*/

  .flex {
    display: flex;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-end {
    justify-content: flex-end;
  }

  .flex-center {
    justify-content: center;
  }

  .items-center {
    align-items: center;
  }

  .items-end {
    align-items: flex-end;
  }

  .self-start {
    margin-right: auto;
  }

  .self-end {
    margin-left: auto;
  }

  .align-end {
    margin-top: auto;
  } 

  .align-top {
    margin-bottom: auto;
  } 

  .text-right {
    text-align: right;
  }

  .text-left {
    text-align: left;
  }

  input, select {
    -webkit-appearance: none;
    border-radius: 2px;
    background: white;
    border: 1px solid ${rgba("#000", 0.1)};
    height: 45px;
    padding: 0 ${padding.m};
    font-size: 16px;
    transition: 125ms ease;
    transition-property: box-shadow, border;
    width: 100%;
    box-shadow: 0px 4px 6px ${rgba("#000000", 0.05)};
    
    &:focus {
      box-shadow: 0px 4px 8px ${rgba("#000000", 0.05)};
      border-color: ${rgba("#000", 0.5)};
    }

    &[disabled] {
      background-color: #eae2e2;
      opacity: 0.4;
    }
  }

  select {
    padding-right: ${padding.xxl};
    background-image: url(${cheveronDown});
    background-position: right ${padding.m} center;
    background-repeat: no-repeat;
  }

  

  button {
    border: none;
    border-radius: 3px;
    font-weight: 600;
    font-size: 16px;
    transition: 125ms ease;
    transition-property: background, color, opacity;
    background: none;
    padding: ${padding.m} ${padding.l};
    font-size: 14px;

    &[disabled] {
      background-color: lightgrey;
    }

    &.primary {
      background-color: #5b64d0;
      color: white;
      transition: all 125ms ease;

      &:hover {
        background-color: ${darken("0.1", "#5b64d0")}
        cursor: pointer;
        box-shadow: 0px 2px 6px ${rgba("#000000", 0.2)}
      }

      &[disabled] {
        background-color: ${lighten("0.2", "#5b64d0")}
      }
    }

    &.secondary {
      &:hover {
        background-color: ${darken("0.05", "#ffffff")};
        box-shadow: 0px 2px 6px ${rgba("#000000", 0.2)}
      }
    }
  }
  

  .logo-wrap--desktop {
    @media screen and (max-width: ${breakpoint.l}) {
      display: block;
    }
  }

  .logo-wrap--mobile {
    @media screen and (min-width: ${breakpoint.l}) {
      display: none;
    }
  }

  .logo {
    margin-right: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;

    @media screen and (min-width: ${breakpoint.md}) {
      width: 68px;
      height: 68px;
    }    

    svg {
      width: 100%;
    }
  }

  .mobile-toggle-button {
    width: 48px;
    height: 48px;
    padding: 0;
    
    margin-right: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    span {
      display: inline-block;
      position: relative;
      width: 50%;
      height: 2px;
      border-radius: 3px;
      background-color: white;
      transition: all 125ms ease;

      &:nth-child(2) {
        margin: 0.4em 0;
      }
    }

    &.is-open {
      span {

        &:first-child {
          transform: rotate(45deg);
          top: 8px;
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:last-child {
          transform: rotate(-45deg);
          top: -7px;
        }
      }
    }
  }

  .margin-0 {
    margin: 0;
  }

  .margin-bottom-1 {
    margin-bottom: 1em;
  }

  .section-title {
    display: block;
    width: 100%;
    position: relative;

    &:before {
      border-top: 2px solid #dfdfdf;
      content:"";
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      bottom: 0;
      width: 45%;
      z-index: -1;
    }

    span { 
      background: #f9fafb; 
      padding: 0 15px 0 15px; 
      margin: 0 0 0 30px;
    }
  }

  .note {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 800;
    padding: 0.4em 1em;
    border-radius: 4px;
    display: inline-block;
  }

  .note.warning {
    background: #e00;
    color: white;
  }


  .btn-primary {
    padding: 1em 3em;
    color: white;
    background-color: blue;
  }

  .btn-ghost {
    padding: 1em 3em;
  }

  .btn-text {
    padding: 0;
  }

  .btn-secondary {
    background-color: #eee;

    &:hover {
      background-color: ${darken(0.025, "#eee")}
    }
  }

  
`;

export default GlobalStyles;
