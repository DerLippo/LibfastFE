import React from 'react';
import { useParams } from 'react-router-dom';
//Mobile Check
import {isMobile} from 'react-device-detect';
//Functions
import UserFunctions from './UserFunctions';
import Wrapper from './Wrapper'
// Components
import UserInfo from './UserInfo';
import Header from './Header';
import Footer from './Footer';
import { Wrapper as ProfileWrapper } from './Profile/profile.styles';

const Profile = () => {

    const {
        userName
    } = useParams();
    
    return (
        <>
            <Header userName={UserFunctions.getUserName()} />
            <Wrapper>
                <ProfileWrapper>
                    <UserInfo userName={userName} userHash={UserFunctions.getSessionHash()}/>
                </ProfileWrapper>
            </Wrapper>
            {
                (!isMobile) ? <Footer /> :null
            }
        </>
    )
};

export default Profile;