import styled from 'styled-components';
//Mobile Check
import {isMobile} from 'react-device-detect';

export const Wrapper = styled.div`
display: flex;
width:100%;
align-items: center;
${(isMobile) ? '' : 'background: var(--color-bg-10);'}
`;

export const Content = styled.div`
    width: var(--maxWidth);
    min-height: var(--footerHeight);
    padding: 10px 0;
    color: var(--color-5);
    margin:auto;
    margin-bottom:85px;

    a, span {
        display:block;
        font-weight: 600;
        font-size: var(--fontSmall);
        margin: 8px 0;
        width: max-content;
        height: 28px;
        color: var(--color-5);
    }
    .copyRight {
        cursor:default;
        display:block;
        padding-top:10px;
        font-weight: 500;
        font-size: var(--fontSuperSmall);
        color: var(--color-4);
    }
    .selectLanguage {
        font-size: var(--fontSmall);
        font-weight: 500;
        border-radius: 3px;
        padding: 6px;
        background: transparent;
        border: 2px solid;
        border-color: var(--color-border-4);
        color: var(--color-4);
    }
    .fa-twitter, .fa-instagram {
        font-size: var(--fontSmall);
        display:inline-block;
        padding:6px;
        float:right;
    }
`;