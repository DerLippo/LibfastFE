import styled from "styled-components";
//Mobile Check
import {isMobile} from 'react-device-detect';

export const Wrapper = styled.div`
width:100%;
margin:auto;
min-height:100vh;
margin-top: var(--headerHeight);

.searchResultsTitle {
    margin:auto;
    max-width: var(--maxWidth);
    color: var(--color-5);
    ${(isMobile) ? `text-align:center;` :null }
}

.post-wrapper {
    margin: 12px auto;
    max-width:var(--superMediumWidth);
}

.homeNavigation {
    margin:auto;
    width:100%;
    max-width:var(--superMediumWidth);
    display: table;

    .homeNavigationTop {

    }
}

.homeTopUser {
    width:100%;
    display:table;
}

.homeTrends {
    width:100%;
    display:table;
}

.buttonNavigation {
    display: inline-block;
    text-align: center;
    margin: 10px;
    color: var(--color-2);
    padding: 12px;
    font-size: var(--fontSmall);
    border-radius:2px !important;
}

.topUsersButton {
    display: flex;
    float: left;
}

.rankingImage {
    width:40px;
    height:40px;
    border-radius:100%;
    border: 2px solid;
    border-color: var(--color-border-1);
    margin:10px;
    display:flex;
    float: left;
}

/* Dropdown */
.dropdown {
    position: relative;
    display: flex;
    float: right;
    margin: 10px;
    padding: 8px 24px;
}

span {
    font-size: var(--fontMed);
    cursor:pointer;
    color: var(--color-4);

    .fa-sort-down {
        font-size: var(--fontBig);
    }
}

  .dropdown-content {
    display: none;
    position: absolute;
    background: var(--color-bg-2);
    min-width: 160px;
    box-shadow: var(--box-shadow-1);
    z-index: 1;
    right:0px;
    border-radius:6px;

    div {
        width:100%;
        padding: 12px 8px;
        cursor:pointer;
        color:var(--color-5);
        background:var(--color-bg-2);
        font-size: var(--fontSmall);
        border-radius:6px;
    }
    div:hover {
        opacity:0.75;
        background: var(--color-bg-3);
    }
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
/* Dropdown End */
`;