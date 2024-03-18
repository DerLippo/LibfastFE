import React from 'react';
import { Link } from 'react-router-dom';
//Components
import GetText from '../GetText';
//Functions
import UserFunctions from '../UserFunctions';
//Styles
import { Wrapper, Content } from './Footer.styles';

const Footer = () => {

    /* Language */

    const handleUserLanguage = e => {
        var valueUserLanguage = e.currentTarget.value;
        //UserLanguage
        if(valueUserLanguage != null) {
            UserFunctions.deleteUserLanguage();
            UserFunctions.setUserLanguage(valueUserLanguage);
            window.location.reload(true);//Refresh is actually necessary
        }
    }
  
    /* Language End */

    return (
        <Wrapper id="footer">
            <Content>
                <Link to='/legal/about' className='hover'>{<GetText textName='about' />}</Link>
                <Link to='/legal/terms' className='hover'>{<GetText textName='terms' />}</Link>
                <Link to='/legal/privacy' className='hover'>{<GetText textName='privacy' />}</Link>
                <Link to='/!faq' className='hover'>{<GetText textName='faq' />}</Link>

                {
                    (UserFunctions.getUserLanguage() == 'de') ? 
                        <select className='selectLanguage' onChange={handleUserLanguage}>
                            <option value='de'>Deutsch</option>
                            <option value='en'>English</option>
                        </select>
                    :
                        <select className='selectLanguage' onChange={handleUserLanguage}>
                            <option value='en'>English</option>
                            <option value='de'>Deutsch</option>
                        </select>
                }

                <span className='copyRight'>&copy; {new Date().getFullYear()} Libfast</span>

                <a href='https://twitter.com/LibfastOfficial' target='_blank' className='fa-twitter hover'><i className="fa-brands fa-twitter"></i></a>
                <a href='https://www.instagram.com/libfast.official/' target='_blank' className='fa-instagram hover'><i className="fa-brands fa-instagram"></i></a>
            </Content>
        </Wrapper>
    )
};

export default Footer;