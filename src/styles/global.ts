import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.DefaultBackgroundColor};
        color: ${props => props.theme.DefaultTextColor};
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme.DefaultFocusColor};
    }


    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button {
        cursor: pointer;
    }
`;
