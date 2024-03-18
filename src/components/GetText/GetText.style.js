import styled from "styled-components";

export const Wrapper = styled.div`
.placeholder {
    margin: 0 auto;
    width: 50%;
    min-height: 25px;
    background: var(--color-bg-2);
    display:inline-block;
    position:relative;
   }
   
   @keyframes placeHolderShimmer{
       0%{
           background-position: -318px 0
       }
       100%{
           background-position: 318px 0
       }
   }
   
   .animated-background {
       animation-duration: 1.25s;
       animation-fill-mode: forwards;
       animation-iteration-count: infinite;
       animation-name: placeHolderShimmer;
       animation-timing-function: linear;
       background: darkgray;
       background: linear-gradient(to right, var(--color-bg-3) 10%, var(--color-bg-2) 18%, var(--color-bg-3) 33%);
       background-size: 800px 104px;
       height: 25px;
       position: relative;
   }
`;

export const ResultMessage = styled.div`
padding: 5px 10px;
width:100%;
margin-top:10px;
margin-bottom:10px;
font-size:var(--fontMed);
background: var(--color-bg-1) !important;
color: var(--color-2) !important;
border-radius: 6px;
box-shadow: var(--box-shadow-1);
`;