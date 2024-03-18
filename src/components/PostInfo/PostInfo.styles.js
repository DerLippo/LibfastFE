import styled from 'styled-components';

export const Wrapper = styled.div`

`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    width:100%;
    margin: 0 auto;
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        display: block;
        max-height: none;
    }

    article {
        width: 100%;
    }

    i {
        color: var(--color-4) !important;
    }

    .post-wrapper {
    margin: auto;
    padding: 12px;
    width: 100%;
    border-radius:9px !important;
    overflow:hidden;
    background: var(--color-bg-2);
    box-shadow: var(--box-shadow-1);
    color: var(--color-5);
        a {
            color: var(--color-5);
        }

        :hover, :focus, :active {
            cursor:pointer;
            background: var(--color-bg-3);
        }
    }
    .postModeration {
        max-width:10%;
        display:inline-block;
        float:right;
    }
    .post-title {
    border: none;
    padding-bottom: 12px;
    border-radius: 6px;
    height:auto;
    color:  var(--color-5) !important;
    font-size: var(--fontMed);
    font-weight: 600;
    word-break: break-word;
    padding: 0px !important;
    max-width:90%;
    display:inline-block;
    }
    .post-text {
    width: 100%;
    border: none;
    padding:0px;
    padding-bottom: 12px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    height:auto;
    color: var(--color-4) !important;
    }
    .post-text p {
    font-size: var(--fontSmall);
    font-weight: normal;
    word-break: break-word;
    color: var(--color-5) !important;
    }
    .post-answer {
    width: 100%;
    border: none;
    padding: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    height:auto;
    }
    .post-answer-profile {
    padding-top:0px !important;
    }
    .post-answer p {
    font-size: var(--fontSmall);
    font-weight: 500;
    color: var(--color-4) !important;
    word-break: break-word;
    white-space: pre-line;
    display:inline;
    margin-right:5px;
    }
    .post-answer-profile p {
    font-size: 16px;
    font-weight: normal;
    word-break: break-word;
    }
    .answerDate {
        display:inline-block !important;
        padding-top: 10px;
        font-size: var(--fontSuperSmall) !important;
        font-weight: 600 !important;
        
        .icon {
            display:inline-block;
            color:var(--color-1) !important;
        }
    }

    .post-answer-vote {
    display:block;
    text-align:right;
    color: var(--color-4);
    margin-top:12px;
    padding-top:12px;
    border-top: 3px solid;
    border-color: var(--color-border-3);

        div {
            float:none;
            margin:0 auto;
        }
    }
    
    .post-answer-vote-like {
    cursor:pointer;
    font-size: var(--fontBig);
    }
    .post-answer-vote-dislike {
    cursor:pointer;
    font-size: var(--fontBig);
    }
    .post-answer-vote-like:hover, .post-answer-vote-dislike:hover {
    opacity:0.75 !important;
    }
    .post-answer-vote-amount {
    font-size: var(--fontMed);
    font-weight: 600;
    margin-right:30px;
    padding:6px;
    }
`;