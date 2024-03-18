import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    width:100%;
    max-width: 392px;
    padding: 32px;
    color: var(--color-5);
    background: var(--color-bg-2);
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
    border-radius: 5px;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-0);
    margin-top: 32px;

    input {
        width: 100%;
        heigt:40px;
        border: 1px solid var(--color-border-3);
        border-radius: 3px;
        margin: 0;
        padding: 10px;
        background: var(--color-bg-3)
    }

    .checkbox {
        width: 10%;
        height: 16px;
        margin-top: 2px;
        display: inline-block;
        vertical-align: top;
    }

    button {
        width: 100%;
        border: 1px solid var(--color-border-3);
        border-radius: 5px;
        margin: 10px 0;
        padding: 10px;
        background: var(--color-bg-1)
    }

    .marginTop4 {
        margin-top:4px;
    }

    .marginBottom20 {
        margin-bottom: 20px;
    }

    a {
        color: var(--color-1);
        font-size:14px;
    }

    div {
        font-size: 14px;
        color: var(--color-4);
    }

    label {
        font-size:12px;
        text-transform: uppercase;
        margin-bottom: 8px;
    }

    h3 {
        font-size: 24px;
        line-height: 30px;
        margin-bottom:8px;
    }

    span {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 20px;
        color: var(--color-4);
        width: 90%;
        display: inline-block;
    }

    .error {
        color: red;
        margin: 5px 0;
    }
    .success {
        color: green;
        margin: 5px 0;
    }
`;