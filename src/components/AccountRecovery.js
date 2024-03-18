import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import API from '../API';
//Functions
import UserFunctions from './UserFunctions';
// Components
import Button from './Button';
import Input from './Input';
import GetText from './GetText';
import Header from './Header';

// Styles
import { Wrapper as AuthWrapper } from './Auth/Auth.styles';
import Wrapper from './Wrapper'

const AccountRecovery = () => {

    const {
        code
    } = useParams();

    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setResultMessage] = useState('');

    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if(name === 'email') setEmail(value);
        if(name === 'newPassword') setNewPassword(value);

    };

    const handleSubmit = async () => {

        try {

            setError(false);
            setSuccess(false);
            setResultMessage(null);


            const accountRecovery = await API.accountRecovery(email, code, newPassword);


            if(accountRecovery.resultMessage) {
                setResultMessage(accountRecovery.resultMessage);
            }

            if(accountRecovery.success == true) {
                setSuccess(true);
            }

            if(accountRecovery.success != true) {
                setSuccess(false);
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
                    <h3><GetText textName='accountRecoveryTitle' /></h3>

                    {error && <div className="error">There was an error!</div>}
                    
                    {(success == true && message) ? <div className="success">{<GetText textName={message} />}</div> :null}
                    {(success != true && message) ? <div className="error">{<GetText textName={message} />}</div> :null}

                    {!success && !code && <>{<label><GetText textName='email' /></label>}</>}
                    {!success && !code && <>{<Input type='text' value={email} name='email' onChange={handleInput} className={'marginBottom20'} />}</>}

                    {code && <>{<label><GetText textName='accountRecoverySetPassword' /></label>}</>}
                    {code && <>{<Input type='password' value={newPassword} name='newPassword' onChange={handleInput} className={'marginBottom20'} />}</>}

                    {!success && !code && <>{<Button text={<GetText textName='accountRecoveryButton' />} className={'marginTop4 marginBottom20'} callback={handleSubmit} />}</>}
                    {code && <>{<Button text={<GetText textName='accountRecoveryPasswordButton' />} className={'marginTop4 marginBottom20'} callback={handleSubmit} />}</>}

                    <div><GetText textName='signup_signin_text' /> <Link to='/login' className="marginTop4 marginBottom20"><GetText textName='signin_button' /></Link></div>
                </AuthWrapper> 
            </Wrapper>
        </>
    )
}

export default AccountRecovery;