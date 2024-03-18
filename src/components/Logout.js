import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';
// Components
import Header from './Header';
//Functions
import UserFunctions from './UserFunctions';
// Styles
import { Wrapper as AuthWrapper } from './Auth/Auth.styles';
import Wrapper from './Wrapper';
import Spinner from './Spinner';

const Logout = () => {

    
    const navigate = useNavigate();
    useEffect(() => {

        
        const logoutUser = async() => {
            try {

                const logout = await API.logout(UserFunctions.getUserId(), UserFunctions.getSessionHash());
    
                var resultMessage = logout.resultMessage;
    
                if(resultMessage === 'success') {
                    UserFunctions.deleteUserId();
                    UserFunctions.deleteUserName();
                    UserFunctions.deleteSessionHash();
                    UserFunctions.deleteScrollPage();
                    UserFunctions.deleteDarkMode();
                    navigate('/');
                }

            } catch (error) {

            }
        };

        logoutUser();
    }, [])

    return (
        <>
            <Header userName={UserFunctions.getUserName()} />
            <Wrapper>
                <AuthWrapper>
                    <Spinner />
                </AuthWrapper>
            </Wrapper>
        </>
    )
}

export default Logout;