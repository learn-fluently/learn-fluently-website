import { createGlobalStyle } from 'styled-components';
import { Colors } from './Colors';

export default createGlobalStyle`
    html {
        height: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
    body {
        background-color: ${Colors.backgroundColor};
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
        display: flex;
    }
    body, button, input, select, textarea {
        font-family: 'Helvetica Neue', Arial, sans-serif;
    }
    input, button, textarea, :focus {
      outline: none;
    }
    #root {s
        display: flex;
        flex: 1;
    }
`;
