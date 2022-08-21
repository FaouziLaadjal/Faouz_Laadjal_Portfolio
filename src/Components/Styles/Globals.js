import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*{box-sizing:border-box;}
body{
background:${({ theme }) => theme.colors.body};
color:hsl(192,100%,9%);
font-family:"roboto",sans-serif;
font-size:16px;
margin:0;
padding:0;
}

`;
