import { createGlobalStyle, css } from "styled-components";
export const GlobalStyle = createGlobalStyle`${css`
  @font-face {
    font-family: "Frankfurter Medium";
    src: url("./font/LT.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  html,
  body,
  #root {
    height: 100%;
    background-color: white;
  }

  /* Text Styling */
  a:hover {
    color: ${props => props.theme.select};
  }
  .basic-text {
    font-size: 1rem;
    color: ${props => props.theme.text};
  }
  .light-text {
    font-weight: 300;
    color: ${props => props.theme.textLight};
  }
  .lighter-text {
    font-weight: 300;
    color: ${props => props.theme.textSecondary};
  }
  .underline:hover {
    text-decoration: underline;
  }
  .small-text {
    font-size: 0.875rem;
  }
  .selected {
    color: ${props => props.theme.select};
  }
  .theme-text {
    font-family: "Frankfurter Medium";
  }
  .form-title {
    font-weight: 600;
  }

  .error {
    color: ${props => props.theme.red} !important;
    input {
      border-color: ${props => props.theme.red} !important;
    }
  }

  .left-0 {
    left: 0;
  }
  .left-15 {
    left: 15rem;
  }
  .right-0 {
    right: 0;
  }

  .sticky {
    z-index: 1;
    position: sticky;
    top: 0;
  }

  .box-shadow {
    box-shadow: ${props => props.theme.lightGreyBoxShadow};
  }
  /* Scroll Bar */
  .dropdown-scrolling {
    overflow-y: auto !important;
    overflow-x: hidden;
    overscroll-behavior: contain;

    ::-webkit-scrollbar-thumb {
      display: none;
    }

    :hover {
      ::-webkit-scrollbar-thumb {
        display: flex;
      }
    }
  }

  &&& {
    .scrolling {
      overflow-y: auto !important;
      overflow-x: auto !important;
      overscroll-behavior: contain;

      ::-webkit-scrollbar-thumb {
        display: none;
      }

      :hover {
        ::-webkit-scrollbar-thumb {
          display: flex;
        }
      }
    }
    ::-webkit-scrollbar {
      width: 0.4rem;
      height: 0.4rem;
    }

    ::-webkit-scrollbar-track {
      background-color: inherit;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 0.5rem;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background: rgba(0, 0, 0, 0.2);
    }
  }

  .icon-size {
    font-size: 1rem;
  }

  .opacity-half {
    opacity: 0.5 !important;
  }

  /* Disabled elements */
  .disabled {
    opacity: 0.65;
  }
  .overflow-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Flex Styling */
  .row-start {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .row-center {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .row-end {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
  .column-start {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .column-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .column-end {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .text-wrap {
    word-break: break-word;
  }

  /* Grid Styling */
  .gap-0 {
    display: flex;
    gap: 0 !important;
  }
  .gap-1 {
    display: flex;
    gap: 0.25rem;
  }
  .gap-2 {
    display: flex;
    gap: 0.5rem;
  }
  .gap-3 {
    display: flex;
    gap: 0.75rem;
  }
  .gap-4 {
    display: flex;
    gap: 1rem;
  }
`}`;
export const theme = {
  // Background
  background: "rgb(255, 255, 255)",

  // Warning
  yellowLight: "rgb(255, 248, 197)",

  // Text
  textDark: "rgb(50, 50, 50)",
  text: "rgb(80, 80, 80)",
  textLight: "rgb(100, 100, 100)",
  textSecondary: "rgb(162, 162, 162)",
  textColorTransparent: "rgb(80, 80, 80, 0.25)",

  // Grey
  grey: "rgb(200, 200, 200)",
  grey2: "rgb(220, 220, 220)",
  greyTransparent: "rgb(200, 200, 200, 0.25)",
  greyLight: "rgb(234, 234, 234)",
  greyLighter: "rgb(242, 242, 242)",
  greyLighter2: "rgb(247, 247, 247)",
  greyLightest: "rgb(250, 250, 250)",

  // Blue
  selectLightest: "rgb(0, 145, 255, 0.2)",
  selectLight: "rgb(0, 145, 255, 0.75)",
  select: "rgb(0, 145, 255)",

  // RAG
  red: "rgb(203, 36, 49)",
  redLight: "rgb(235, 81, 109)",
  error: "rgb(220, 50, 50)",
  amber: "rgb(220, 180, 50)",
  warning: "rgb(255, 248, 197)",
  green: "rgb(40, 167, 69)",
  greenDark: "rgb(25, 103, 43)",

  // Box Shadow
  lightGreyBoxShadow: "0 0 10rem 0 rgba(100, 100, 100, 0.25)",

  //update comment error
  commentText: "#24292f",
  commentErrorBorder: "#cf222e",
  commentBackgroundColor: "#FFEBE9"
};
