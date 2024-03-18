import styled from "styled-components";

export const SearchWrapper = styled.div`
text-align:center;
margin-top:3em;
width:100%;

h1 {
    margin-top:2rem;
    font-size: var(--fontBig);
    font-weight:600;
}

input {
    width:100%;
    max-width:var(--mediumWidth);
}

img {
    width:100%;
    max-width:var(--mediumWidth);
    padding:var(--padding-all);
}
`;