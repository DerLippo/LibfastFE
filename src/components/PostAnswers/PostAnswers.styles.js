import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    min-height: 100px;
    background: var(--darkGrey);
    padding: 0 auto;

    width:100%;
    max-width: var(--superMediumWidth);
    margin:auto;
    margin-top:20px;
`;

export const Content = styled.div`
width:100%;
h2 {
    text-align:center;
    font-size: var(--fontMed);
    color: var(--color-5);
}
article {
margin-top:10px;
}

.answerDate {
    font-size: var(--fontSuperSmall);
    color: var(--color-1);
    font-weight: 800;
    display: block;
    float: left;
}

`;