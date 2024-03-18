import React from 'react';
import { useParams } from 'react-router-dom';
//Mobile Check
import {isMobile} from 'react-device-detect';
//Functions
import UserFunctions from './UserFunctions';
// Components
import PostInfo from './PostInfo';
import PostAnswers from './PostAnswers';
import CreateAnswer from './CreateAnswer';
import Header from './Header';
import Wrapper from './Wrapper'
import Footer from './Footer';
//Styles
import { Wrapper as PostWrapper } from './Post/Post.styles';
//Hook
import { usePostFetch } from '../hooks/usePostFetch';

const Post = () => {

    const {
        postUrl
    } = useParams();
    const {
        state
    } = usePostFetch(postUrl, UserFunctions.getSessionHash());

    return (
        <>
            <Header userName={UserFunctions.getUserName()} />
            <Wrapper>
                <PostWrapper>
                        {
                            state.results.map(row => (
                                <>
                                    <PostInfo key={row.id} postData={row} userHash={UserFunctions.getSessionHash()} showHashtag={true}/>
                                    <CreateAnswer postUrl={postUrl} userHash={UserFunctions.getSessionHash()} />
                                    <PostAnswers postUrl={postUrl} userHash={UserFunctions.getSessionHash()}/>
                                </>
                            ))
                        }


                </PostWrapper>
            </Wrapper>
            {
                (!isMobile) ? <Footer /> :null
            }
        </>
    )
};

export default Post;