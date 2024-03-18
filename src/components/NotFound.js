import React from 'react';
import { Link } from 'react-router-dom';
//Mobile Check
import {isMobile} from 'react-device-detect';
//Functions
import UserFunctions from './UserFunctions';
//Components
import Header from './Header';
import Wrapper from './Wrapper';
import Footer from './Footer';
import GetText from './GetText';
// Styles
import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
    width:100%;
    padding: 40px 20px;
    animation: animatePostInfo 1s;
    text-align: center;
    color: var(--color-5);

    a {
        color: var(--color-1);
    }

    @keyframes animatePostInfo {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
const NotFound = () => {


    return (
        <>
            <Header userName={UserFunctions.getUserName()} />
            <Wrapper>
                <NotFoundWrapper>
                    <h2><GetText textName={'notFoundTitle'} /></h2>
                    <p><GetText textName={'notFoundText'} /> <Link to='/'><GetText textName={'notFoundLink'} /></Link></p>
                </NotFoundWrapper>
            </Wrapper>
            {
                (!isMobile) ? <Footer /> :null
            }
        </>
    )
}

export default NotFound;