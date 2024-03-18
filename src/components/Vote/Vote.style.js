import styled from "styled-components";

export const Wrapper = styled.div`
width:max-content;
float:right;
display:block;
`;
export const Content = styled.div`
    .active {
        color: var(--color-1) !important;
    }
`;
export const CoolDown = styled.div`
    width:100%;
    height:100%;
    padding:5px;
    display:block;

    font-size:var(--fontMed);

    .icon {
        color: var(--color-1);
    }
`;