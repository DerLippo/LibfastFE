import styled from 'styled-components';

export const Wrapper = styled.input`
    display:block;
    background: var(--color-bg-1);
    color: var(--color-5);
    width: 100%;
    border-radius: 30px;
    border: 0;
    font-size: var(--fontMed);
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;