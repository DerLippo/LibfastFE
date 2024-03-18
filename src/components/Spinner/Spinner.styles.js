import styled from 'styled-components';

export const Spinner = styled.div`
    border: 5px solid var(--color-1);
    border-top: 5px solid var(--color-0);
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: spin 0.8s linear infinite;
    margin: 10px auto;

    @keyframes spin {
        0% {
            transform: roate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`