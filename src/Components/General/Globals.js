import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*{

  box-sizing:border-box;
  scroll-behavior: smooth;
}
body{
margin:0;
padding:0;
background:${({ theme }) => theme.colors.body};
color:rgb(0, 8, 31);
font-family:"ubuntu",sans-serif;
font-size:1em;

}
h1{text-align:center}
section{margin-top:48px}
`;
