import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Prompt', sans-serif;
    }
    html,body,#root  {  
        background-color: #fafafa;       
        font-size: 16px;
        height: 100%;
        overflow: hidden;
    
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    a:hover {
        text-decoration: underline;
    }
  
`;

export default GlobalStyles;
