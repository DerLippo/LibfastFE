import styled from 'styled-components';

export const Wrapper = styled.div`
    /* Landingpage */
    .landing_page_one{
    width:100%;
    min-height:75vh;
    background: var(--color-bg-2);

        center {
            margin:auto;
            max-width: var(--maxWidth);
        }

    }
    .landing_page_one-one {
    width: 95%;
    max-width: 500px;
    margin-top: 22.5vh;
    margin-left:2.5%;
    margin-right:2.5%;
    display: inline-block;
    vertical-align: top;
    }
    .landing_page_one-one h1, p {
    padding:0px;
    margin-bottom:10px;
    word-break: break-word;
    text-align:left;
    color: var(--color-5);
    }
    .landing_page_one-one h1 {
    width:auto;

        b {
        font-weight:800;
        }
    font-size: var(--fontSuperBig);
    }
    .landing_page_one-one p {
    margin-top: 20px;
    text-align: justify !important;
    font-size: var(--fontMed);
    }
    .landing_page_one-one input[type='submit'] {
    margin-top:5px;
    float:left;
    }
    .landing_page_one-two {
    width: 95%;
    max-width: 650px;
    margin-left:2.5%;
    margin-right:2.5%;
    margin-top: 5vh;
    margin-bottom: 5vh;
    display: inline-block;
    }
    .landing_page_two {
    width:100%;
    min-height:40vh;
    background: var(--color-bg-10);

        center {
            margin:auto;
            max-width: var(--maxWidth);
        }

    }
    .landing_page_two-one h2 {
    text-align:center;
    font-weight:600;
    padding-top:30px;
    padding-bottom:50px;
    margin:0px;
    color: var(--color-5);
    font-size: var(--fontBig);
    }
    .landing_page_two-two {
    color: var(--color-5);
    }
    .landing_page_two-two_wrapper {
    max-width: 250px;
    display: inline-block;
    vertical-align: top;
    margin: 20px;
    }
    .landing_page_two-two_wrapper img {
    display: block;
    margin: auto;
    margin-bottom:25px;
    width: 80px;
    }
    .landing_page_two-two_wrapper h3 {
    text-align: center;
    font-weight: 700;
    font-size: var(--fontMed);
    margin: 0px;
    padding: 0px;
    }
    .landing_page_two-two_wrapper p {
    text-align: center;
    word-break: break-word;
    font-size: var(--fontSmall);
    font-weight: 400;
    margin-top: 6px;
    width: 60%;
    color: var(--color-bg-5);
    }
    .landing_page_two-three {
    width:90%;
    max-width:275px;
    margin-top:40px;
    display:inline-block;
    vertical-align: top;
    }
    .landing_page_two-three-top_topics {
    width:100%;
    border-radius:12px;
    padding-top: 40px;
    padding-bottom:40px;
    }
    .landing_page_two-three-top_topics h1 {
    text-align:right;
    padding:0px;
    margin-bottom:20px;
    margin-right: 20px;
    font-weight: 600;
    font-size:28px;
    }
    .landing_page_two-three-top_topics p {
    text-align:right;
    margin-right: 20px;
    margin-top:10px;
    padding:0;
    font-weight: 600;
    font-size:20px;
    }
    .landing_page_two-four {
    width:90%;
    max-width:600px;
    margin-top:40px;
    margin-left:30px;
    display:inline-block;
    vertical-align: top;
    }
    .landing_page_two-four-trend-post {
    text-align:left;
    width:100%;
    border-radius:12px;
    padding-bottom:40px;
    }
    .landing_page_two-four-trend-post h1 {
    padding:0px;
    margin-top:40px;
    margin-bottom:20px;
    margin-right: 20px;
    font-weight: 600;
    font-size:28px;
    }
    .landing_page_two-four-trend-post div {
    margin-top:10px;
    margin-bottom:20px;
    }
    .landing_page_two-four-trend-post p {
    font-size:20px;
    font-weight: 600;
    padding:0px;
    margin:0px;
    }
    .landing_page_two-four-trend-post span {
    text-align: justify !important;
    font-size:18px;
    font-weight: 500;
    padding:0px;
    }
    .landing_page_three {
    width:100%;
    background: var(--color-bg-2);

    center {
        margin:auto;
        max-width: var(--maxWidth);
    }

    img {
        border-radius:12px;
    }

    }
    .landing_page_three-one {
    width: 95%;
    max-width: 550px;
    margin-left:2.5%;
    margin-right:2.5%;
    margin-top: 5vh;
    margin-bottom: 5vh;
    display:inline-block;
    }
    .landing_page_three-two {
    width: 95%;
    max-width: 600px;
    margin-left:2.5%;
    margin-right:2.5%;
    margin-top: 5vh;
    margin-bottom: 5vh;
    display:inline-block;
    vertical-align:top;
    }
    .landing_page_three-two h1, p {
    padding:0px;
    margin-bottom:10px;
    word-break: break-word;
    text-align:left;
    color: var(--color-5);
    }
    .landing_page_three-two h1 {
    width:auto;
    font-weight:600;
    font-size: var(--fontSuperBig);
    }
    .landing_page_three-two p {
    text-align: justify !important;
    font-size: var(--fontMed);
    }

    .landing_page_three-three {
    width: 95%;
    max-width: 550px;
    margin-left:2.5%;
    margin-right:2.5%;
    margin-top: 5vh;
    margin-bottom: 5vh;
    display:inline-block;
    }
    .landing_page_three-four {
    width: 95%;
    max-width: 600px;
    margin-left:2.5%;
    margin-right:2.5%;
    margin-top: 5vh;
    margin-bottom: 5vh;
    display:inline-block;
    vertical-align:top;
    }
    .landing_page_three-four h1, p {
    padding:0px;
    margin-bottom:10px;
    word-break: break-word;
    text-align:left;
    color: var(--color-5);
    }
    .landing_page_three-four h1 {
    width:auto;
    font-weight:600;
    font-size: var(--fontSuperBig);
    }
    .landing_page_three-four p {
    text-align: justify !important;
    font-size: var(--fontMed);
    }

    .landing_page_four {
        center {
            margin: auto;
            max-width: var(--maxWidth);
        }
        h2 {
            text-align:center;
            font-weight:600;
            padding-top:30px;
            padding-bottom:50px;
            margin:0px;
            color: var(--color-5);
            font-size: var(--fontBig);
        }
        .landingPagePost {
            text-align:left;
            display: inline-block;
            max-width: var(--mediumWidth);
            width: 100%;
            padding: var(--padding-left-right);
        }
    }
    /* Landingpage END */
`;