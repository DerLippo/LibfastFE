import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//Mobile Check
import {isMobile} from 'react-device-detect';
//Functions
import UserFunctions from '../UserFunctions';
//Components
import GetText from '../GetText';
import LogoWhite from '../../images/logo/logoWhite.png'
import LogoBlack from '../../images/logo/logoBlack.png';
import Hashtag from '../Hashtag';
import Dropdown from '../Dropdown';
import Footer from '../Footer';

import {Wrapper, Content, LogoImg } from './Header.styles';
import {MobileWrapper, MobileContent, MobileLogoImg } from './Header.styles';
//Hook
import { useHashtagsFetch } from '../../hooks/useHashtagsFetch';

const Header = ( setSearchTerm, NavigationActive ) => {




    /* Language */

        /* Detect Browser language */
        function getBrowserLocales(options = {}) {
            const defaultOptions = {
            languageCodeOnly: false,
            };
            const opt = {
            ...defaultOptions,
            ...options,
            };
            const browserLocales =
            navigator.languages === undefined
                ? [navigator.language]
                : navigator.languages;
            if (!browserLocales) {
            return undefined;
            }
            return browserLocales.map(locale => {
            const trimmedLocale = locale.trim();
            return opt.languageCodeOnly
                ? trimmedLocale.split(/-|_/)[0]
                : trimmedLocale;
            });
        }
        /* Detect Browser language End  */
    
        /* Check if user got language cookie */
        if(UserFunctions.getUserLanguage() == null) {
            var userLang = getBrowserLocales({ languageCodeOnly: true }) //only give back the language not the country "languageCodeOnly: true"
            UserFunctions.setUserLanguage(userLang[0]); //Save the first found language "userLang[0]"
        }
        /* Check if user got language cookie end */
        
        window.document.documentElement.lang = UserFunctions.getUserLanguage(); //Header html lang
    /* Language End */

    const [hashtagObject, setHashtagObject] = useState('');

    const {
        state: dataHashtags,
        loading: hashtagLoading,
        error: hashtagError
    } = useHashtagsFetch();

    if(dataHashtags[0] && !hashtagObject[0]) {
        setHashtagObject(dataHashtags);
    }


    const [showSideNavigation, setSideNavigation] = useState(false);

    if(isMobile) {
        return (
        <>
            {
                <MobileWrapper id="header">
                    <MobileContent>
                        <span className='sideNavigationIconWrapper' onClick={event => setSideNavigation(true)}>
                            <i className="fa-solid fa-bars sideNavigationIcon"></i>
                        </span>
                        <div className={(showSideNavigation == true) ? `sideNavigation visible` : `sideNavigation hidden`} >
                            {
                                <span className='sideNavigationIconWrapper' onClick={event => setSideNavigation(false)}>
                                    <i className="fa-solid fa-bars sideNavigationIcon"></i>
                                </span>
                            }
                            <div className='sideNavigationContent'>
                                <div className='sideNavigationHeader' >
                                    <Link to='/' onClick={event => setSearchTerm('')}>
                                        {
                                        (UserFunctions.getDarkMode() == 'true') ?
                                                <MobileLogoImg className='logo' src={LogoWhite} alt='logo' />
                                            :
                                                <MobileLogoImg className='logo' src={LogoBlack} alt='logo' />
                                        }
                                    </Link>
                                </div>
                                <HeaderUser hashtagObject={hashtagObject} NavigationActive={NavigationActive} />
                                <div className='sideNavigationFooter'>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                        {
                            (UserFunctions.getSessionHash()) ?
                                <div class="dropdown">
                                    <span><i className="fa-solid fa-book hashtagIcon"></i></span>

                                    <div class="dropdown-content">
                                        {
                                            (hashtagObject) ?
                                            Object.keys(hashtagObject).map((a) => (
                                                (hashtagObject[a].hidden != true) ?
                                                    <Link to={`/!${encodeURIComponent(hashtagObject[a].hashtag)}`}>
                                                        <Hashtag key={hashtagObject[a].hashtagId}
                                                            text={hashtagObject[a].hashtag}
                                                            hidden={ `${(hashtagObject[a].hidden == true) ? true : false}`}
                                                            disabled={ `${(hashtagObject[a].disabled == true) ? true : false}`} />
                                                    </Link>
                                                :null
                                            ))
                                            :null
                                        }
                                    </div>
                                </div>
                            :null
                        }
                    </MobileContent>
                </MobileWrapper>
            }
        </>
        );
    }
    else
    {
        return (
            <>
                <Wrapper id="header">
                    <Content>
                        <Link to='/' onClick={event => setSearchTerm('')}>
                            {
                            (UserFunctions.getDarkMode() == 'true') ?
                                    <LogoImg src={LogoWhite} alt='logo' />
                                :
                                    <LogoImg src={LogoWhite} alt='logo' />
                            }
                        </Link>
                        <HeaderUser hashtagObject={hashtagObject} NavigationActive={NavigationActive} />
                    </Content>
                </Wrapper>
            </>
            );
    }
};

const HeaderUser = ({ hashtagObject, NavigationActive }) => (
    

    UserFunctions.getSessionHash() ? (
        <>
                {
                    (isMobile) ?
                        <div className='sideNavigationLink'>
                            {
                                (UserFunctions.getUserId() == 1 || UserFunctions.getUserId() == 2) ?                                    
                                    <Link to='/create'><i className="fas fa-tools"></i> <span><GetText textName={'navigationCreatePost'} /></span></Link>
                                :null
                            }
                            <Link to={`/@${UserFunctions.getUserName()}`} className={`${(NavigationActive == UserFunctions.getUserName()) ? 'navigationActive' : ''}`}><i className="fas fa-user"></i> <span>{UserFunctions.getUserName()}</span></Link>
                            <Link to='/search' className={`${(NavigationActive == 'search') ? 'navigationActive' : ''}`}><i className="fa-solid fa-magnifying-glass"></i> <span><GetText textName={'navigation_search'} /></span></Link>
                            <Link to='/settings' className={`${(NavigationActive == 'settings') ? 'navigationActive' : ''}`}><i className="fas fa-tools"></i> <span><GetText textName={'navigation_settings'} /></span></Link>
                            <Link to='/logout' className={`${(NavigationActive == 'logout') ? 'navigationActive' : ''}`}><i className="fas fa-sign-out-alt"></i> <span><GetText textName={'navigation_logout'} /></span></Link>
                        </div>
                    :
                        <div className='topNavigationLink'>
                            {
                                (UserFunctions.getUserId() == 1 || UserFunctions.getUserId() == 2) ?                                    
                                    <Link to='/create'><span><GetText textName={'navigationCreatePost'} /></span></Link>
                                :null
                            }
                            <Link to={`/@${UserFunctions.getUserName()}`} className={`${(NavigationActive == UserFunctions.getUserName()) ? 'navigationActive' : ''}`}><span>{UserFunctions.getUserName()}</span></Link>
                            <div class="dropdown">
                                <span className='linkTitle'><i className="fa-solid fa-book hashtagIcon"></i> <GetText textName={'hashtag'}/></span>

                                <div class="dropdown-content">
                                    {
                                        (hashtagObject) ?
                                        Object.keys(hashtagObject).map((a) => (
                                            (hashtagObject[a].hidden != true) ?
                                                <Link to={`/!${encodeURIComponent(hashtagObject[a].hashtag)}`}>
                                                    <Hashtag key={hashtagObject[a].hashtagId}
                                                        text={hashtagObject[a].hashtag}
                                                        hidden={ `${(hashtagObject[a].hidden == true) ? true : false}`}
                                                        disabled={ `${(hashtagObject[a].disabled == true) ? true : false}`} />
                                                </Link>
                                            :null
                                        ))
                                        :null
                                    }
                                </div>
                            </div>
                            <Link to='/search' className={`${(NavigationActive == 'search') ? 'navigationActive' : ''}`}><i className="fas fa-tools settingsIcon "></i> <span><GetText textName={'navigation_search'} /></span></Link>
                            <Link to='/settings' className={`${(NavigationActive == 'settings') ? 'navigationActive' : ''}`}><i className="fas fa-tools settingsIcon "></i> <span><GetText textName={'navigation_settings'} /></span></Link>
                            <Link to='/logout' className={`${(NavigationActive == 'logout') ? 'navigationActive' : ''}`}><i className="fas fa-sign-out-alt logoutIcon"></i> <span><GetText textName={'navigation_logout'} /></span></Link>

                        </div>
                }
        </>
    ) : (
        <>
            <div className='topNavigationLink'>
                <Link to='/login'>
                    <button className="signin-button hover"><span><GetText textName='navigation_signin' /></span></button>
                </Link>
                </div>
        </>
    )
);
export default Header;