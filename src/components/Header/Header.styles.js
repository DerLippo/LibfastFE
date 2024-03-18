import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    position: fixed;
    width:100%;
    top:0px;
    z-index:100;
    background: var(--color-bg-9);
`;

export const Content = styled.div`
    width:100%;
    max-width: var(--maxWidth);
    height: var(--headerHeight);
    position: relative;
    display:flex;
    align-items: center;
    justify-content: space-between;
    font-weight:400;
    margin: 0 auto;
    color: var(--color-5);

    .topNavigationLink {
        padding: 15px 0;
        display:inline-block;
    }

    a {
        color: var(--color-3);
        text-decoration:none;
        display:inline-block;

        :hover {
            color:var(--color-2);
        }

    }

    .navigationActive {
        color:var(--color-2);
    }
    span {
        margin: auto 2px;
        padding:var(--padding-all);
        font-size: var(--fontSmall);

        :hover {
            border-bottom: 2px solid;
        }
    }
    .hashtagIcon, .userIcon, .settingsIcon, .logoutIcon, .dropDownIcon {
        display:inline-block;
        display:none;
        cursor:pointer;
        margin:0 10px;
        font-size:var(--fontBig);
        color: var(--color-3);

        :hover, :focus {
            opacity:0.75;
        }
    }
    .signin-button {
        background: var(--color-bg-1);
        cursor:pointer;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 6px;
        padding-bottom: 6px;
        border-radius:0px !important;
        border:none;
        margin-top:-6px;

        span {
            font-size: var(--fontSmall);
            color: var(--color-2);
        }
    }
    
    /* Dropdown */
    .dropdown {
        position: relative;
        display: inline-block;
    }
    
    .dropdown span {
        font-size: var(--fontSmall);
        cursor:pointer;
        color: var(--color-3);

        :hover {
            color:var(--color-2);
        }

        .hashtagIcon {
            font-size: var(--fontBig);
        }
    }
    
      .dropdown-content {
        display: none;
        position: absolute;
        background: var(--color-bg-2);
        width: 240px;
        max-height:60vh;
        box-shadow: var(--box-shadow-1);
        z-index: 100000;
        right:0px;
        border-radius:6px;
        overflow-y:scroll;


        a {
            width:100%;
            padding:0;
        }

        div {
            display:block;
            margin:0px;
            padding:0px;
        }
        button {
            width:100%;
            margin:0px;
            border-radius:0px;
            background:var(--color-bg-2);
            color:var(--color-5);
            text-align:left;
            font-weight:500;
            font-size:var(--fontSmall);
        }
      }
      
      .dropdown:hover .dropdown-content {
        display: block;
      }
    /* Dropdown End */

`;

export const LogoImg = styled.img`
    width: 175px;
`;




/* Mobile */
export const MobileWrapper = styled.div`
    position: fixed;
    top:0px;
    z-index:100;
`;

export const MobileContent = styled.div`
    width: 100vw;
    height: var(--headerHeight);
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0 auto;
    color: var(--color-5);
    background:none;
    box-shadow: var(--box-shadow-1);

    a {
        color: var(--color-5);
        text-decoration:none;
    }
    span {
        margin: auto 10px;
    }

    .hashtagIcon, .userIcon, .settingsIcon, .logoutIcon, .dropDownIcon, .navigationIcon {
        cursor:pointer;
        margin:0 10px;
        font-size:var(--fontBig);
        color: white;

        :hover, :focus {
            opacity:0.75;
        }
    }

    .visible {
        visibility: visible;
        opacity: 1;
        transition: opacity 0.1s linear;
    }

    .hidden {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 0.1s, opacity 0.1s linear;
    }

    .sideNavigation {
        width:100%;
        background: var(--color-bg-2);
        height:100vh;
        width:60vw;
        box-shadow: var(--box-shadow-1);
        position:absolute;
        top:0;
        overflow:hidden;
        overflow-y:scroll;

        .signin-button {
            display:block;
            margin:auto;
            width:100%;
            margin-top:2vh;
            margin-bottom:2vh;
        }
    }

    .sideNavigationContent {
        padding: var(--padding-left-right);
    }

    .sideNavigationHeader {
        display:inline-block;
        margin:0px;
        padding:0px;
        vertical-align:top;
        padding: var(--padding-left-right);

        .sideNavigationIcon, .logo, .sideNavigationIconWrapper {
            display:inline-block;
            margin:0px;
            padding:0px;
            vertical-align:top;
            color:var(--color-5);
        }

        .sideNavigationIconWrapper {
            display:inline-block;
            padding: 6px;
            font-size:var(--fontBig);
        }

        .logo {
            
        }

    }

    .sideNavigationFooter {
        border-top:2px solid;
        border-color: var(--color-border-3);
    }

    .sideNavigationIcon {
        margin:16px;
        color:var(--color-5) !important;
        font-size:30px;
    }

    .sideNavigationLink {
        padding: var(--padding-all);
        font-size: var(--fontBig);

        a {
            display:block;
            color:var(--color-5) !important;
            padding-left:6px;
            margin-top:12px;
        }
        span {
            padding-left:6px;
            color:var(--color-5) !important;
        }
    }

    .signin-button {
        background: var(--color-bg-1);
        cursor:pointer;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 6px;
        padding-bottom: 6px;
        border-radius:0px !important;
        border:none;

        span {
            font-size:18px;
            color: var(--color-2);
        }
    }
    
    /* Dropdown */
    .dropdown {
        position: absolute;
        right: 0;
        display: inline-block;
    }
    
    span {
        display:inline-block;
        font-size: var(--fontMed);
        cursor:pointer;
        color: var(--color-4);
        margin:0px;
        padding:0px;
    
        .hashtagIcon {
            margin:16px;
            color:var(--color-5) !important;
            font-size:30px;
        }
    }
    
      .dropdown-content {
        display: none;
        position: absolute;
        background: var(--color-bg-2);
        width: 240px;
        max-height:60vh;
        box-shadow: var(--box-shadow-1);
        z-index: 100000;
        right:0px;
        border-radius:6px;
        overflow-y:scroll;

        div {
            display:block;
            margin:0px;
            padding:0px;
        }
        button {
            width:100%;
            margin:0px;
            border-radius:0px;
            background:var(--color-bg-2);
            color:var(--color-5);
            text-align:left;
            font-weight:600;
            font-size:var(--fontSmall);
        }
      }
      
      .dropdown:hover .dropdown-content {
        display: block;
      }
    /* Dropdown End */

`;

export const MobileLogoImg = styled.img`
    max-width: 175px;
    padding: var(--padding-all);
`;