import { React, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
//Mobile Check
import {isMobile} from 'react-device-detect';
// Config
import { USER_IMG_URL } from '../config'
// Components
import Button from './Button';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import PostInfo from './PostInfo';
import GetText from './GetText';
import Header from './Header';
import LandingPage from './LandingPage';
import CreatePost from './CreatePost';
import Footer from './Footer'
import Wrapper from './Wrapper/'
import UserImage from './UserImage/'
import UserDefaultImage from '../images/user/profile-img-default.png'
import Hashtag from './Hashtag';
//Styles
import { Wrapper as HomeWrapper } from './Home/Home.styles';
//Functions
import UserFunctions from './UserFunctions';
// Hook
import { usePostsFetch } from '../hooks/usePostsFetch';
import { useHashtagsFetch } from '../hooks/useHashtagsFetch';


const Home = () => {

    const {
        hashtag,
        search
    } = useParams();

    const navigate = useNavigate();

    const [autoScroll, setAutoScroll] = useState(false);
    const [userAction, setUserAction] = useState('');

    const {
        state,
        topHashtags,
        topUsers,
        loading, 
        error,
        searchTerm,
        searchFilter,
		searchHashtagObject,
        canLoadMore,
        scrollUp,
        setSearchTerm,
        setSearchFilter,
        setIsLoadingMore,
        setCanLoadMore,
        setScrollUp,
    } = usePostsFetch(UserFunctions.getScrollPage());

    //if (error) return <div>Something went wrong ...</div>

    /* Sort Posts */
    const uniquePosts = Array.from(new Set(state.results.map(a => a.id)))
    .map(id => {
      return state.results.find(a => a.id === id)
    })
    /* Sort Posts End */

    /* Search Filter */
    if((searchFilter != hashtag) || (searchFilter != search)) {
        if(hashtag != null) {
            if(searchFilter != hashtag) {
                UserFunctions.deleteScrollPage(); //Reset
                setSearchFilter(hashtag);
                setSearchTerm('');
            }
        }
        else if(search != null) {
            if(searchTerm != search) {
                UserFunctions.deleteScrollPage(); //Reset
                setSearchFilter('');
                setSearchTerm(search);
            }
        }
    }
    /* Search Filter End */

    //Load Posts when scrolling
    document.getElementsByTagName('body')[0].onscroll = () => {

        if((document.getElementById('homeWrapper') !== null) && (error === false)) {

            var windowPosition = document.documentElement.scrollTop;
            var homeWrapperHeight = document.getElementById("homeWrapper").clientHeight;
            var headerHeight = document.getElementById("header").clientHeight;
            var windowHeight = window.innerHeight;


            if(isMobile) {
                var headerHeight = 1;
            }

            var downScrollGoalOnePercent = ((homeWrapperHeight+headerHeight) / 100)
            var downScrollGoal = (downScrollGoalOnePercent * 98);

            var screenPositionTop = windowPosition;
            var screenPositionBottom = (windowPosition + windowHeight);


        /* Scroll Down */
            if((screenPositionBottom >= downScrollGoal) && (!loading) && (canLoadMore === true)) {
                setIsLoadingMore(true);
                setScrollUp(false); // Note: setScrollUp & setIsLoadingMore should load at the same time, Better -> first setScrollUp so we know we are scrolling up and then setIsLoadingMore
                                    // But if we call set ScrollUp First, the script runs two times and loads two time the same posts which cause an error. Should be fixed later
            }
            else
            {
                if(screenPositionBottom >= (downScrollGoal / 2)) {
                    if(!searchTerm) {
                        setCanLoadMore(true);
                    }
                }
            }
        /* Scroll Down End */

        /* Scroll Up */
            /*
                if((screenPositionTop <= 200) && (!loading) && (canLoadMore === true) && (!autoScroll)) {
                    setScrollUp(true);
                    setIsLoadingMore(true);
                    //console.log('scrollUp LoadMore');

                }
                else
                {

                    if(screenPositionTop <= 200) {

                        if(!searchTerm) {
                            setCanLoadMore(true);
                        }
                        //console.log('scrollUp');
        
                    }
                }
            */
        /* Scroll Up End */
        }

	};
    ////Load Posts when scrolling end

        /* Scroll down when loading "scrollUp" */
            /*
            if(scrollUp && state.page > 0 && !loading && canLoadMore) {
                if(document.documentElement.scrollTop < 200) {
                    setAutoScroll(true);
                    window.scrollBy(0, 205);
                    setAutoScroll(false);
                }
            }
            */
        /* Scroll down when loading "scrollUp" End */


    return (
        <>
            <Header userName={UserFunctions.getUserName()} setSearchTerm={setSearchTerm} />
        
            <HomeWrapper id='homeWrapper'>
                {
                    /* LOGGED IN HEADER START PAGE */
                    (!searchTerm && UserFunctions.getSessionHash()) ? (
                        <div className='homeNavigation'>
                            <div className='homeNavigationTop'>
                                {

                                        <div className='homeTopUser'>
                                            <Button className='buttonNavigation topUsersButton default' callback={() => { '' }} text={<GetText textName='rankingTopUsers' />}/>
                                            {
                                                (topUsers) ?
                                                    Object.keys(topUsers).map((a) => (
                                                        <>
                                                            <Link to={`/@${topUsers[a].userName}`}>
                                                                <UserImage src={(topUsers[a].userImgUrl) ? ( USER_IMG_URL + topUsers[a].userImgUrl ) : ( UserDefaultImage )} className={'rankingImage hover'} />
                                                            </Link>
                                                        </>
                                                    ))
                                                :null
                                            }
                                        </div>

                                }
                                {

                                    <div className='homeTrends'>
                                        <Button className='buttonNavigation default' callback={() => { '' }} text={<GetText textName='trends' />}/>
                                        {
                                            (topHashtags) ?
                                                Object.keys(topHashtags).map((a) => (
                                                    <>
                                                        <Link to={`/!${encodeURIComponent(topHashtags[a].hashtag)}`}>
                                                            <Hashtag key={topHashtags[a].hashtagId}
                                                            active={ `${(topHashtags[a].hashtag == hashtag) ? true : false}`}
                                                            text={topHashtags[a].hashtag}
                                                            hidden={ `${(topHashtags[a].hidden == true) ? true : false}`}
                                                            disabled={ `${(topHashtags[a].disabled == true) ? true : false}`} />
                                                        </Link>
                                                    </>
                                                ))
                                            :null
                                        }
                                    </div>



                                }
                            </div>
                            <div className='dropdown'>
                                <span><GetText textName='filter' /> <i className="fas fa-sort-down"></i></span>
                                <div className="dropdown-content">
                                    <Link to={`/`} onClick={() => {setSearchFilter(null)}}>
                                        <div><GetText textName='filterPostsAll' /></div>
                                    </Link>
                                    <Link to={`/!newAnswer`} /*onClick={() => {setSearchFilter('newAnswer')}}*/>
                                        <div><GetText textName='filterPostsNewAnswer' /></div>
                                    </Link>
                                    <Link to={`/!noAnswer`} /*onClick={() => {setSearchFilter('noAnswer')}}*/>
                                        <div><GetText textName='filterPostsNoAnswer' /></div>
                                    </Link>
                                    <Link to={`/!random`} /*onClick={() => {setSearchFilter('random')}}*/>
                                        <div><GetText textName='filterPostsRandom' /></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                    :null
                    /* LOGGED IN HEADER START PAGE END */
                }
                {
                /* SEARCH && POST */
                    <>
                    {
                        /* Logged in */
                        (UserFunctions.getSessionHash() && UserFunctions.getScrollPage() > 0 && uniquePosts[0]) ? <Button text={<GetText textName={'postFeedLoadTop'} />} callback={() => { {setScrollUp(true)} {setIsLoadingMore(true)} }} /> :null
                        /* Logged in End */
                    }
                    {
                        /* Logged in */ 
                        (UserFunctions.getSessionHash()) ? (
                            (uniquePosts[0]) ? (
                                /* Search Results */
                                uniquePosts.map(row => (
                                    <PostInfo key={row.id} postData={row} userHash={UserFunctions.getSessionHash()} onClick={() => { UserFunctions.setScrollPage(row.page); }} showHashtag={false} />
                                ))
                            )
                            :
                            (
                                (searchTerm && !loading) ?
                                    //No Results = Create post
                                    <CreatePost value={searchTerm} userHash={UserFunctions.getSessionHash()} />
                                :null
                            )
                        )
                        :null
                        /* Logged in END */
                    }
                    {
                        /* Logged out */
                        ((!UserFunctions.getSessionHash() && searchTerm) || (!UserFunctions.getSessionHash() && hashtag)) ? (
                            (uniquePosts[0]) ? (
                                /* Search Results */
                                uniquePosts.map(row => (
                                    <PostInfo key={row.id} postData={row} userHash={UserFunctions.getSessionHash()} />
                                ))
                            )
                            :
                            (
                                (!loading) ?
                                    //No Results = Create post
                                    <CreatePost value={searchTerm} userHash={UserFunctions.getSessionHash()} />
                                :null
                            )
                        )
                        :
                        (
                            (!UserFunctions.getSessionHash()) ?
                                <LandingPage />
                            :null
                        )
                        /* Logged out END */
                    }
                    </>
                /* SEARCH && POST END */
                }
                {
                    loading ?
                        <Spinner hidden={false} />
                    :
                        <Spinner hidden={true} />
                }
            </HomeWrapper>
            {
                (!isMobile) ? <Footer /> :null
            }
        </>
    )
};
export default Home;