import { createGlobalStyle } from "styled-components";
//Mobile Check
import {isMobile} from 'react-device-detect';
//Functions
import UserFunctions from "./components/UserFunctions";

export const GlobalStyle = createGlobalStyle`
    :root {

        ${
            (isMobile) ?
            `
            --headerHeight: 73px;
            --bodyHeight: 100vh;
            --footerHeight:50px;
            `
            :
            `
            --headerHeight: 10vh;
            --bodyHeight: 80vh;
            --footerHeight:10vh;
            `
        }

        --maxWidth: 1280px;
        --superBigWidth: 1280px;
        --bigWidth: 960px;
        --superMediumWidth: 800px;
        --mediumWidth: 640px;
        --smallWidth: 480px;

        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        --fontSuperSmall: 0.8rem;

        --margin-left-right: 0 12px;

        --padding-left-right: 0 12px;
        --padding-top-bottom: 12 0px;
        --padding-all: 12px;
        
        ${
            (UserFunctions.getDarkMode() == 'true') ? (
                /*Dark mode ON */
                `
                --color-0: transparent !important;
                --color-1: #feae00 !important;
                --color-2: #000000 !important;
                --color-3: #15181C !important;
                --color-4: #777d86 !important;
                --color-5: #FFFFFF !important;
                --color-6: #017AFF !important;
                --color-7: #151b2b !important;
                --color-8: #fe0000 !important;
                --color-9: #845EC2 !important;
                --color-10: #353336 !important;
        
                --fill-0: transparent !important;
                --fill-1: #feae00 !important;
                --fill-2: #000000 !important;
                --fill-3: #15181C !important;
                --fill-4: #777d86 !important;
                --fill-5: #FFFFFF !important;
                --fill-6: #017AFF !important;
                --fill-7: #151b2b !important;
                --fill-8: #fe0000 !important;
                --fill-9: #845EC2 !important;
                --fill-10: #353336 !important;
        
                --color-bg-0: transparent !important;
                --color-bg-1: #feae00 !important;
                --color-bg-2: #000000 !important;
                --color-bg-3: #15181C !important;
                --color-bg-4: #777d86 !important;
                --color-bg-5: #FFFFFF !important;
                --color-bg-6: #017AFF !important;
                --color-bg-7: #151b2b !important;
                --color-bg-8: #fe0000 !important;
                --color-bg-9: #845EC2 !important;
                --color-bg-10: #353336 !important;
        
                --color-border-0: transparent !important;
                --color-border-1: #feae00 !important;
                --color-border-2: #000000 !important;
                --color-border-3: #15181C !important;
                --color-border-4: #777d86 !important;
                --color-border-5: #FFFFFF !important;
                --color-border-6: #017AFF !important;
                --color-border-7: #151b2b !important;
                --color-border-8: #fe0000 !important;
                --color-border-9: #845EC2 !important;
                --color-border-10: #353336 !important;
        
                --box-shadow-1: 0 .2rem .4rem 0 rgba(146, 146, 146, 0.2);
                `
            )
            :
            (
                /*Dark mode OFF */
                `
                --color-0: transparent !important;
                --color-1: #feae00 !important;
                --color-2: #ffffff !important;
                --color-3: #f8f6fa !important;
                --color-4: #929292 !important;
                --color-5: #000000 !important;
                --color-6: #017AFF !important;
                --color-7: #efeded !important;
                --color-8: #fe0000 !important;
                --color-9: #845EC2 !important;
                --color-10: #845EC2 !important;
        
                --fill-0: transparent !important;
                --fill-1: #feae00 !important;
                --fill-2: #ffffff !important;
                --fill-3: #f8f6fa !important;
                --fill-4: #929292 !important;
                --fill-5: #000000 !important;
                --fill-6: #017AFF !important;
                --fill-7: #efeded !important;
                --fill-8: #fe0000 !important;
                --fill-9: #845EC2 !important;
                --fill-10: #F3eaF7 !important;
        
                --color-bg-0: transparent !important;
                --color-bg-1: #feae00 !important;
                --color-bg-2: #ffffff !important;
                --color-bg-3: #f8f6fa !important;
                --color-bg-4: #929292 !important;
                --color-bg-5: #000000 !important;
                --color-bg-6: #017AFF !important;
                --color-bg-7: #efeded !important;
                --color-bg-8: #fe0000 !important;
                --color-bg-9: #845EC2 !important;
                --color-bg-10: #F3eaF7 !important;
        
                --color-border-0: transparent !important;
                --color-border-1: #feae00 !important;
                --color-border-2: #ffffff !important;
                --color-border-3: #f8f6fa !important;
                --color-border-4: #929292 !important;
                --color-border-5: #000000 !important;
                --color-border-6: #017AFF !important;
                --color-border-7: #efeded !important;
                --color-border-8: #fe0000 !important;
                --color-border-9: #845EC2 !important;
                --color-border-10: #F3eaF7 !important;
        
                --box-shadow-1: 0 .2rem .4rem 0 rgba(146, 146, 146, 0.2);
                `
            )
        }
        
    }

    *{
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration:none;
    }

    p {
        margin:0px;
    }

    ul {
        list-style:none;
    }

    .hover:hover, .hover:focus {
        cursor: pointer;
        opacity:0.75 !important;
    }

    .default:hover, .default:focus {
        cursor: default;
        opacity:1 !important;
    }

    .hidden {
        opacity:0;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-display: swap;
        margin: 0 !important;
        padding: 0 !important;
        background: var(--color-bg-3);
        color: var(--color-5);
        animation: animateBody 0.5s;

        @keyframes animateBody {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--color-5);
            padding:0;
            margin:0;
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--color-5);
            padding:0;
            margin:0;
        }

        p span {
            font-size: 1rem;
            color: var(--color-5);
            padding:0;
            margin:0;
        }

        select {
            border-radius:3px;
        }
    }

    @media (max-width:500px){
        .web {
            display: block !important;
        }

        .app {
            display:none !important;
        }
    }
    
    @media (max-width:500px){
        .web {
            display:none !important;
        }

        .app {
            display: block !important;
        }
    }
`