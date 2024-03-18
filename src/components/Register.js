import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import API from '../API';
//Mobile Check
import {isMobile} from 'react-device-detect';
//Functions
import UserFunctions from './UserFunctions';
// Components
import Button from './Button';
import Input from './Input';
import GetText from './GetText';
import Header from './Header';
import Footer from './Footer';
import Wrapper from './Wrapper'
//Functions
import User from './UserFunctions';
// Styles
import { Wrapper as AuthWrapper } from './Auth/Auth.styles';

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setResultMessage] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if(name === 'username') setUsername(value);
        if(name === 'email') setEmail(value);
        if(name === 'password') setPassword(value);

    };

    const handleSubmit = async () => {
        try {
            setError(false);

            const register = await API.register(username, password, email);

            var resultUserId = register.userId;
            var resultUserName = register.userName;
            var resultSessionHash = register.sessionHash;
            var resultMessage = register.resultMessage;
            var registered = register.registered;

            if(resultMessage) {
                setResultMessage(null);
                setResultMessage(resultMessage);
            }
            
            if(registered == true) {
                if(resultUserId) {
                    //User.setUserId(resultUserId);
                }
                if(resultUserName) {
                    //User.setUserName(resultUserName);
                }
                if(resultSessionHash) {
                    //User.setSessionHash(resultSessionHash);
                }

                if((resultUserId) && (resultUserName) && (resultSessionHash)) {
                    navigate('/login');
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
                    <h3><GetText textName='signup_title' /></h3>

                    {error && <div className="error">There was an error!</div>}
                    {message && <div className="error">{<GetText textName={message} textStyle={'default'} />}</div>}
                    
                    <label><GetText textName='email' /></label>
                    <Input type='text' value={email} name='email' onChange={handleInput} className={'marginBottom20'} />

                    <label><GetText textName='username' /></label>
                    <Input type='text' value={username} name='username' onChange={handleInput} className={'marginBottom20'} />
                    
                    <label><GetText textName='password' /></label>
                    <Input type='password' value={password} name='password' onChange={handleInput} />

                    <div className="marginTop4 marginBottom20">
                        <span><Link to='/legal/terms'><GetText textName='signup_terms' /></Link><br/><Link to='/legal/privacy'><GetText textName='signup_privacy' /></Link></span>
                    </div>
                    <Button text={<GetText textName='signup_button' />} className={'marginTop4 marginBottom20'} callback={handleSubmit} />

                    <div><GetText textName='signup_signin_text' /> <Link to='/login' className="marginTop4 marginBottom20"><GetText textName='signin_button' /></Link></div>
                </AuthWrapper>
            </Wrapper>
            {
                (!isMobile) ? <Footer /> :null
            }
        </>
    )
}

export default Register;