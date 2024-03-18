import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
max-width: var(--superMediumWidth);
margin:auto;
margin-top:20px;
color: var(--color-5);

/* Post Answer */
    .post-answer-title {
    width: max-content;
    padding: 12px 0;
    font-weight: bold;
    font-size: var(--fontMed);
    color: var(--color-5);
}
.post-answer-textarea-text {
    margin-top: 1.5vh;
    width: 100%;
    border: none;
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 6px;
    min-height: 150px;
    background-color:#fff;
}
textarea {
    resize: vertical;
}
/* Post Answer END */
`;