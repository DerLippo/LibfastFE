import styled from 'styled-components';

export const Wrapper = styled.button`
    cursor:pointer;
    display: block;
    min-height: 30px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 20px auto;
    border-radius: 9px !important;
    -webkit-appearance: none;
    border: none;
    background: var(--color-bg-1);
    color: var(--color-5);
    border: 0;
    font-size: var(--fontMed);
    transition: all 0.3s;
    outline: none;

    :hover {
        opacity: 0.75;
    }
    :focus {
        opacity: 0.75;
    }
`;