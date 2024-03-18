import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

export const Search = styled.div`
padding:var(--padding-all);
margin:auto;

h1 {
    font-size: var(--fontBig);
    color: var(--color-5);
}

input {
    margin:auto;
    width:100%%;
    max-width:var(--maxWidth);
    display: block;
    border-radius: 3px;
    font-size: var(--fontBig);
    background: var(--color-bg-2);
    border: 3px solid;
    border-color: var(--color-5);
}
`;

export const Wrapper = styled.div`
    display: flex;
    position: fixed;
    top:0;
    align-items: center;
    height: 6vh;
    min-height: var(--footerHeight);
    max-width: var(--mediumWidth);
    width:100%;
    background: transparent;
    padding: var(--padding-left-right);
    z-index:100;
    right: 55%;
    transform: translate(50%,0%);

    @media only screen and (max-width: 1000px) {
        max-width:unset;
        top:unset;
        right:unset;
        transform: translate(0%,0%);
        bottom:0px;
        background: var(--color-bg-1);
      }

`;

export const Content = styled.div`
    position:relative;
    width: 100%;
    height: 45px;
    background: var(--color-bg-3);
    border-radius: 6px;
    border: 1px solid var(--color-border-1);
    color: var(--color-2);
    max-width: var(--mediumWidth);
    margin:auto;
    padding: var(--padding-left-right);

    .fa-magnifying-glass {
        font-size: var(--fontMed);
        position: absolute;
        width: 30px;
        cursor: pointer;
        top: 50%;
        transform: translateY(-50%);
        padding: 8px;
        color: var(--color-1);
        z-index:1;
    }
    .fa-xmark {
        font-size: var(--fontMed);
        position: absolute;
        width: 30px;
        cursor: pointer;
        top: 50%;
        transform: translateY(-50%);
        padding: 8px;
        color: var(--color-1);
        z-index:1;
        right:15px;
    }
    .placeholder {
        font-size: var(--fontMed);
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding: 8px 15px 8px 40px;
        color: var(--color-4);
        z-index: 1;
    }
    input {
        font-size: var(--fontMed);
        margin: 8px 0;
        padding: 0 0 0 40px;
        border: none;
        width: 92%;
        background: var(--color-bg-3);
        height: 28px;
        color: var(--color-5);
        border-radius:6px;

        :focus {
            outline:none;
        }
    }
`;