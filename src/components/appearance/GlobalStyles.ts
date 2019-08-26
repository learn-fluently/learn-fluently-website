import { createGlobalStyle } from 'styled-components';
import { Colors } from './Colors';

export default createGlobalStyle`
    html {
        height: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }
    div, label, p, span {
        user-select: none;
    }
    body {
        background-color: ${Colors.backgroundColor};
        margin: 0;
        padding: 0;
        flex: 1;
        display: flex;
        min-height: 100%;
    }
    body, button, input, select, textarea {
        font-family: sans-serif;
    }
    input, button, textarea, :focus {
      outline: none;
    }
    #root {
        display: flex;
        flex: 1;
    }
`;
