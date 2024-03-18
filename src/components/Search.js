import {React, useState} from 'react';
//Mobile Check
import {isMobile} from 'react-device-detect';
//Functions
import UserFunctions from './UserFunctions';
// Styles
import { SearchWrapper } from './Search/Search.styles';
// Components
import Login from './Login';
import Header from './Header';
import Wrapper from './Wrapper'
import Footer from './Footer';
import SearchBar from './SearchBar';
import LogoWhite from '../images/logo/logoWhite.png'
import LogoBlack from '../images/logo/logoBlack.png';

const PostCreate = () => {

    const [value, setValue] = useState('');
    

    return (
        (UserFunctions.getSessionHash()) ? (
            <>
                <Header userName={UserFunctions.getUserName()} />
                {
                    <Wrapper>
                        <SearchWrapper>
                        {
                            (UserFunctions.getDarkMode() == 'true') ?
                                <img className='logo' src={LogoWhite} alt='logo' />
                            :
                                <img className='logo' src={LogoBlack} alt='logo' />
                        }
                            <h1>Stell deine Frage</h1>
                            <SearchBar value={value}/>
                            <h3 className='hover' onClick={() => setValue('Was ist Libfast?')}>Was ist Libfast?</h3>
                        </SearchWrapper>
                    </Wrapper>
                }
                {

                }
            </>
        )
        :
        (
            <><Login /></>
        )
    )
};

export default PostCreate;