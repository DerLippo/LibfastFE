import styled from 'styled-components';

export const Wrapper = styled.div`
margin:auto;
width:100%;
max-width: var(--maxWidth);
padding: var(--padding-all);
text-align: justify !important;
color: var(--color-5);
background: var(--color-2);
overflow:hidden;

    h1 {
        font-size: var(--fontSuperBig);
    }
    h2 {
        font-size: var(--fontBig);
    }
    h3 {
        font-size: var(--fontMed)
    }
    p {
        font-size: var(--fontSmall);
    }
`;