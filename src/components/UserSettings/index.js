import React, { useState } from 'react';
import API from '../../API';
// Config
import { USER_IMG_URL } from '../../config'
//Functions
import UserFunctions from '../UserFunctions';
//Components
import Spinner from '../Spinner';
import GetText from '../GetText';
import UserImage from '../UserImage';
import UserDefaultImage from '../../images/user/profile-img-default.png'
import ImageUploaderComponent from './imgUpload';
//Hook
import { useUserFetch } from '../../hooks/useUserFetch';
// Styles
import { Wrapper } from './UserSettings.styles';
import Button from '../Button';
import Input from '../Input';

const UserSettings = ({userName, userHash}) => {

    const [userNameNew, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [passwordOld, setPasswordOld] = useState('');
    const [passwordNew, setPasswordNew] = useState('');

    const [success, setSuccess] = useState(false);
    const [message, setResultMessage] = useState('');

    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if(name === 'updateUsername') setUsername(value);
        if(name === 'updateEmail') setEmail(value);
        if(name === 'updatePasswordOld') setPasswordOld(value);
        if(name === 'updatePasswordNew') setPasswordNew(value);
    };

    const handleDarkMode = e => {
        var valueDarkMode = e.currentTarget.value;
        //Darkmode
        if(valueDarkMode != null) {
            UserFunctions.setDarkMode(valueDarkMode);
            window.location.reload(true);//Refresh is actually necessary
        }
    }

    const deleteImage = async () => {

        try {
            setResultMessage('');
            setSuccess(false);
            const updateSettings = await API.updateSettings('deleteImage', null, userHash);

            if(updateSettings.results[0].success === true) {
                window.location.reload(true);//Refresh is actually necessary
            }

        } catch (error) {
            setSuccess(false);
        }
    };

    const handleSubmit = async (valueDarkMode) => {

        try {
            setResultMessage('');
            setSuccess(false);
            const updateSettings = await API.updateSettings(null, userName, userHash, null, email, passwordOld, passwordNew, null);

            if(updateSettings.results[0].success === true) {
                setSuccess(true);
            }

            if(updateSettings.results[0].resultMessage) {
                setResultMessage(updateSettings.results[0].resultMessage);
                console.log(message);
            }

            if(updateSettings.results[0].userNameNew != null) {
                UserFunctions.setUserName(updateSettings.results[0].userNameNew);
            }

        } catch (error) {
            setSuccess(false);
        }
    };

    const {
        state,
        loading, 
        error
    } = useUserFetch(userName, userHash);

    if(loading) return <Spinner />
    if(error) return <div>Something went wrong...</div>

    return (
        <>
            <Wrapper>
                <div className="container-main container">
                    <div className="settings-wrapper">
                        <div id="general" className="settings-content">
                            <h2><GetText textName='settings_navigation_one' /></h2>
                            <h3>
                                {
                                    success ?

                                        message ? 
                                            <span className='successTrue'>{<GetText textName={message} textStyle={'default'} />}</span>
                                        :
                                            <></>
                                    :
                                            message ? 
                                            <span className='successFalse'>{<GetText textName={message} textStyle={'default'} />}</span>
                                        :
                                            <></>
                                }
                            </h3>
                            <div className="settings-row">
                                <aside>
                                    <UserImage src={(state.userImgUrl) ? ( USER_IMG_URL + state.userImgUrl ) : ( UserDefaultImage )} alt='UserImage' id="settingsUserImage" className='settings-user-img' />
                                </aside>
                                <div className="settings-change">
                                    <div id="settingsUsername" className="settings-username" style={{width: "100%"}}>
                                        { UserFunctions.getUserName }
                                    </div>
                                    <div className="color-1" style={{width: "100%"}}>
                                        <aside>
                                            <label><GetText textName='settings_picture_change' /></label>
                                        </aside>
                                            <ImageUploaderComponent />
                                            <Button text={<GetText textName={'delete'} />} callback={deleteImage}/>
                                    </div>
                                </div>
                            </div>
                            <div className="settings-row">
                                <h3>
                                    {
                                        success ?

                                            message ? 
                                                <span className='successTrue'>{<GetText textName={message} textStyle={'default'} />}</span>
                                            :
                                                <></>
                                        :
                                                message ? 
                                                <span className='successFalse'>{<GetText textName={message} textStyle={'default'} />}</span>
                                            :
                                                <></>
                                    }
                                </h3>
                                <aside>
                                    <label><GetText textName='username' /></label>
                                </aside>
                                <div className="settings-change">
                                    <div  style={{width: "100%"}}>
                                        <Input type='text' id="updateUsername" value={userNameNew} name='updateUsername' placeholder={state.userName} autocomplete='off' onChange={handleInput} disabled />
                                        <div id="updateUsernameText" style={{width: "100%"}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="settings-row">
                                <aside>
                                    <label><GetText textName='email' /></label>
                                </aside>
                                <div className="settings-change">
                                    <div  style={{width: "100%"}}>
                                        <Input type='email' id="updateEmail" value={email} name='updateEmail' placeholder={state.userEmail} autocomplete='off' onChange={handleInput} />
                                        <div id="updateEmailText" style={{width: "100%"}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="settings-row">
                                <aside>
                                    <label></label>
                                </aside>
                                <div className="settings-change">
                                    <Button type='button' text={<GetText textName='save' />} callback={handleSubmit} />
                                </div>
                            </div>
                            <div className="settings-row">
                                <aside>
                                    <label></label>
                                </aside>
                            </div>
                        </div>
                        
                        <div id="password" className="settings-content">
                            <h2><GetText textName='settings_navigation_two' /></h2>
                            <h3>
                                {
                                    success ?

                                        message ? 
                                            <span className='successTrue'>{<GetText textName={message} textStyle={'default'} />}</span>
                                        :
                                            <></>
                                    :
                                            message ? 
                                            <span className='successFalse'>{<GetText textName={message} textStyle={'default'} />}</span>
                                        :
                                            <></>
                                }
                            </h3>
                            <div className="settings-row">
                                <aside>
                                    <label><GetText textName='password_old' /></label>
                                </aside>
                                <div className="settings-change">
                                    <div style={{width: "100%"}}>
                                        <Input type='password' id="updatePasswordOld" value={passwordOld} name='updatePasswordOld' autocomplete='off' onChange={handleInput} />
                                    </div>
                                </div>
                            </div>
                            <div className="settings-row">
                                <aside>
                                    <label><GetText textName='password_new' /></label>
                                </aside>
                                <div className="settings-change">
                                    <div style={{width: "100%"}}>
                                        <Input type='password' id="updatePasswordNew" value={passwordNew} name='updatePasswordNew' autocomplete='off' onChange={handleInput} />
                                    </div>
                                </div>
                            </div>
                            <div className="settings-row">
                                <aside>
                                    <label></label>
                                </aside>
                                <div className="settings-change">
                                    <Button type='button' text={<GetText textName='save' />} callback={handleSubmit} />
                                </div>
                            </div>
                        </div>

                        <div id="darkMode" className="settings-content">
                            <div className="settings-row">
                                <aside>
                                    <label><GetText textName='darkMode' /></label>
                                </aside>
                                <div className="settings-change">
                                    <div style={{width: "100%"}}>
                                        {
                                            (UserFunctions.getDarkMode() == 'true') ? 
                                                <select onChange={handleDarkMode}>
                                                    <option value='true'>On</option>
                                                    <option value='false'>Off</option>
                                                </select>
                                            :
                                                <select onChange={handleDarkMode}>
                                                    <option value='false'>Off</option>
                                                    <option value='true'>On</option>
                                                </select>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
};

export default UserSettings;