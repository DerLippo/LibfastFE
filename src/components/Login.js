import React, { useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import API from '../API';
//Mobile Check
import {isMobile} from 'react-device-detect';
// Components
import Button from './Button';
import Input from './Input';
import GetText from './GetText';
import Header from './Header';
import Footer from './Footer';
import Wrapper from './Wrapper'
//Functions
import UserFunctions from './UserFunctions';
// Styles
import { Wrapper as AuthWrapper } from './Auth/Auth.styles';

const Login = () => {

    //Email Register Code NO ACCOUNT RECOVERY
    const {
        code
    } = useParams();

    const [message, setResultMessage] = useState('');

    //Confirm E-Mail
    const confirmEmail = async () => {
        try {
            const login = await API.login(null, null, code);

            if(login.resultMessage) {
                setResultMessage(login.resultMessage);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    if(code) {
        confirmEmail();
    }
    //Confirm E-Mail End

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authenticatorPin, setAuthenticatorPin] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if(name === 'username') setUsername(value);
        if(name === 'password') setPassword(value);
        if(name === 'authenticatorPin') setAuthenticatorPin(value);

    };

    const handleSubmit = async () => {

        try {
            setError(false);

            const login = await API.login(username, password, null, authenticatorPin);

            var resultUserId = login.userId;
            var resultUserName = login.userName;
            var resultSessionHash = login.sessionHash;
            var resultMessage = login.resultMessage;

            if(resultMessage) {
                setResultMessage(null);
                setResultMessage(resultMessage);
            }
            else
            {

                if(resultUserId) {
                    UserFunctions.setUserId(resultUserId);
                }
                if(resultUserName) {
                    UserFunctions.setUserName(resultUserName);
                }
                if(resultSessionHash) {
                    UserFunctions.setSessionHash(resultSessionHash);
                }

                if((resultUserId) && (resultUserId) && (resultSessionHash)) {
                    navigate('/');
                }
            }
        } catch (error) {
            setError(true);
        }
    };

    return (
        <>
            <Header userName={UserFunctions.getUserName()} />
            <Wrapper>
                <AuthWrapper>
                    <h3><GetText textName='signin_title' /></h3>
                    <span><GetText textName='signin_text' /></span>

                    {error && <div className="error">There was an error!</div>}
                    {message && <div className="error">{<GetText textName={message} textStyle={'default'} />}</div>}
                    
                    <label><GetText textName='username' /> / <GetText textName='email' /></label>
                    <Input type='text' value={username} name='username' onChange={handleInput} className={'marginBottom20'} />
                    
                    <label><GetText textName='password' /></label>
                    <Input type='password' value={password} name='password' onChange={handleInput} />
                    <span style={message == 'authenticatorPinWrong' ? {display:'block'} : {display:'none'}}>
                        <label><GetText textName='authenticatorPin' /></label>
                        <Input type='text' value={authenticatorPin} name='authenticatorPin' onChange={handleInput} />
                    </span>
                    <Link to='/account-recovery' className="marginTop4 marginBottom20"><GetText textName='signin_account_recovery' /></Link>

                    <Button text={<GetText textName='signin_button' />} callback={handleSubmit} />

                    <div><GetText textName='signin_signup_text' /> <Link to='/register' className="marginTop4 marginBottom20"><GetText textName='signup_title' /></Link></div>
                </AuthWrapper>
            </Wrapper>
            {
                (!isMobile) ? <Footer /> :null
            }
        </>
    )
}

export default Login;