import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--superMediumWidth);
    margin:auto;
    padding-top:20px;

    /* Post Create */
    .post-create-title {
    width: max-content;
    padding: 12px;
    font-weight: bold;
    font-size: 18px;
    border-radius: 6px;
    color: var(--color-1);
    background: var(--color-bg-2);
    box-shadow: var(--box-shadow-1);
    }
    .post-create-textarea-title {
    width: 100%;
    min-height: 75px;
    margin-top: 1.5vh;
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    color: var(--color-5);
    background: var(--color-bg-2);
    box-shadow: var(--box-shadow-1);
    }
    .post-create-textarea-title-count {
    position: relative;
    bottom: 30px;
    left: 5px;
    color: red;
    }
    .post-create-textarea-text {
    display:none;
    width: 100%;
    min-height: 150px;
    margin-top: 1.5vh;
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    color: var(--color-1);
    background: var(--color-bg-2);
    box-shadow: var(--box-shadow-1);
    }
    .disabled {
        opacity:0.25 !important;
        cursor:not-allowed;

        :hover {
            opacity:0.25 !important;
            cursor:not-allowed;
        }
    }
    a {
        color: var(--color-1);
    }
    textarea {
        resize: vertical;
    }
    /* Post Create END */
`;

export const QaWrapper = styled.div`
position:absolute;
top:0;
left: 50%;
transform: translate(-50%,0%);
width:100vw;
min-height:100vh;
background:var(--color-bg-2);
margin:auto;
padding: var(--padding-left-right);
`;

export const QaContent = styled.div`
width:100%;
max-width: var(--superMediumWidth);
background:var(--color-bg-2);
font-size:var(--fontMed);
padding: var(--padding-all);
position: absolute;
left: 50%;
top: var(--headerHeight);
transform: translate(-50%, 0%);
color:var(--color-5)
overflow:scroll;

h2, span {
    display:block;
    text-align:center;
}

.QaTitle {
    text-align:center;
    margin:auto;
    margin-top:10px;
    width: 100%;
    padding: 12px;
    font-weight: bold;
    font-size: var(--fontBig);
    border-radius: 6px;
    color: var(--color-1);
    background: var(--color-bg-2);
}

.QaText {
    text-align:center;
    margin:auto;
    width: 100%;
    padding: 12px;
    font-size: var(--fontMed);
    border-radius: 6px;
    color: var(--color-5);
    background: var(--color-bg-2);
}

.QaTextarea {
    width:100%;
    font-size:var(--fontMed);
    padding:12px;
    background:none;
    color: var(--color-5);
    background: var(--color-bg-2);
    border-radius:0px;
    border-top:none;
    border-left:none;
    border-right:none;
    text-align:center;
    display:block;
    margin:auto;
    resize:none;

    :focus {
        outline: none;
    }
}

.QaHashtagWrapper {
    margin:auto;
    padding: 12px;
    border-radius: 6px;
    color: var(--color-5);
    background: var(--color-bg-2);
}
`;


export const QaButtonWrapper = styled.div`
text-align:center;
margin:auto;
margin-bottom:100px;
padding: 12px;
border-radius: 6px;
color: var(--color-5);
background: var(--color-bg-2);
`;

export const QaButton = styled.button`
cursor:pointer;
display:inline-block;
margin:auto;
font-size:var(--fontSuperBig);
background:transparent !important;
border:none;
color:var(--color-1);
`;