import React from 'react';
import { Link } from 'react-router-dom';
//Functions
import UserFunctions from './UserFunctions';
//Components
import GetText from './GetText';
// Styles
import styled from 'styled-components';

export const MaintenanceWrapper = styled.div`
    width:100%;
    height:100vh;
    max-height:100vh;
    overflow:hidden;
    padding: 40px 20px;
    animation: animatePostInfo 1s;
    text-align: center;
    color: var(--color-5);
    background: var(--color-bg-2);

    h1 {
        color: var(--color-5);
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
const Maintenance = () => {


    return (
        <>
            <MaintenanceWrapper>
                <h1><GetText textName={'maintenanceTitle'} /></h1>
                <p><GetText textName={'maintenanceText'} /></p>
            </MaintenanceWrapper>
        </>
    )
}

export default Maintenance;