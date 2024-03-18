import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
//Components
import Spinner from '../Spinner';
import Vote from '../Vote';
import Moderation from '../Moderation';
import GetText from '../GetText';
import Hashtag from '../Hashtag';
// Styles
import { Wrapper as PostInfoWrapper, Content } from './PostInfo.styles';

const PostInfo = ({ showHashtag, postData, userHash, onClick }) => {

    const {
        loading,
        error
    } = useParams();
    
    const navigate = useNavigate();

    if(loading) return <Spinner />
    if(error) return <div>Something went wrong...</div>

    if(!postData.id) {
        navigate('/p/');
    }

    return (
        <>
            <PostInfoWrapper onClick={onClick}>
                {
                    (postData.hashtags && showHashtag == true) ?
                        Object.keys(postData.hashtags).map((a) => (
                            <>
                                <Link to={`/!${encodeURIComponent(postData.hashtags[a].hashtag)}`}>
                                    <Hashtag key={postData.hashtags[a].hashtagId}
                                    text={postData.hashtags[a].hashtag}
                                    />
                                </Link>
                            </>
                        ))
                    :null
                }
                <Content>
                    {
                        (postData.id) ? (
                            <article key={postData.id}>
                                <div className="post-wrapper post-id box-shadow-1">

                                    <div id="postHeader">
                                        <h1 id="postTitle" className="post-title">
                                            <Link to={`/p/${postData.url}`}>
                                                {postData.title}
                                            </Link>
                                        </h1>
                                        <div className='postModeration'>
                                            <Moderation paramPostId={postData.id} paramAnswerId={postData.answerId} paramUserHash={userHash} />
                                        </div>
                                    </div>
                                    <Link to={`/p/${postData.url}`}>
                                        <div id="postBody">
                                            <div id="postText" className="post-text">
                                                <Link to={`/p/${postData.url}`}>
                                                    <p>{postData.text}</p>
                                                </Link>
                                            </div>
                                            <div id="postAnswer" className="post-answer">
                                                {
                                                    (postData.answerId && postData.answer) ? (
                                                        <>
                                                            <Link to={`/p/${postData.url}`}>
                                                                <p>{postData.answer}</p>
                                                                <p className='answerDate'>
                                                                    <i className="fa-solid fa-clock icon"></i> {postData.answerDateDMY}
                                                                </p>
                                                            </Link>
                                                        </>
                                                    )
                                                    :
                                                    (
                                                        <i><GetText textName='answerNotFound' /></i>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </Link>
                                    <div id="postFooter">
                                        <div id="postAnswerVote" className="post-answer-vote">
                                            <Vote answerId={postData.answerId} userHash={userHash} />
                                        </div>
                                    </div>

                                </div>
                            </article>
                        )
                        :
                        (
                            <></>
                        )
                    }
                </Content>
            </PostInfoWrapper>
        </>
    )
};

export default PostInfo;