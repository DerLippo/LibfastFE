import React from 'react';
//Mobile Check
import {isMobile} from 'react-device-detect';
//Functions
import UserFunctions from './UserFunctions';
// Components
import UserSettings from './UserSettings';
import Login from './Login';
import Header from './Header';
import Wrapper from './Wrapper'
import Footer from './Footer';
//Styles
import { Wrapper as SettingsWrapper } from './Settings/Settings.styles';

const Settings = () => {


    return (
        (UserFunctions.getSessionHash()) ? (
            <>
                <Header NavigationActive={'settings'} />
                <Wrapper>
                    <SettingsWrapper>
                        <UserSettings userName={UserFunctions.getUserName()} userHash={UserFunctions.getSessionHash()}/>
                    </SettingsWrapper>
                </Wrapper>
                {
                    (!isMobile) ? <Footer /> :null
                }
            </>
        )
        :
        (
            <><Login /></>
        )
        
    )
};

export default Settings;