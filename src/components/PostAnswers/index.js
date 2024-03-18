import React from 'react';
//Components
import Spinner from '../Spinner';
import GetText from '../GetText';
import Vote from '../Vote';
import Moderation from '../Moderation';
// Styles
import { Wrapper, Content } from './PostAnswers.styles';
import { Wrapper as PostInfoWrapper, Content as PostInfoContent } from '../PostInfo/PostInfo.styles';
//Hook
import { useAnswersFetch } from '../../hooks/useAnswersFetch';

const PostAnswers = ({postUrl, userHash}) => {


    const {
        state: dataAnswers,
        loading,
        error
    } = useAnswersFetch(postUrl, userHash);

    if(loading) return <Spinner />
    if(error) return <div>Something went wrong...</div>
    return (
        (userHash) ?
            <PostInfoWrapper>
                <PostInfoContent>
                    <Wrapper>
                        <Content>
                            {
                                (dataAnswers[0]) ? (
                                <h2><GetText textName='post_answer_other_title' /></h2>
                                )
                                :
                                (
                                    <></>
                                )
                            }
                            {
                                Object.keys(dataAnswers).map((a) => (
                                    <article key={dataAnswers[a].answerId}>
                                        <div className="post-wrapper color-bg-2 box-shadow-1">
                                            <div className='postModeration'>
                                                <Moderation paramAnswerId={dataAnswers[a].answerId} paramUserHash={userHash}/>
                                            </div>
                                            <div id="postAnswer" className="post-answer color-5">
                                                <p>{dataAnswers[a].answer}</p>
                                                <div id="postAnswerVote" className="post-answer-vote">
                                                    <Vote answerId={dataAnswers[a].answerId} userHash={userHash} />
                                                </div>
                                            </div>
                                            <span className='answerDate'>{(dataAnswers[a].answer) ? dataAnswers[a].answerDateDMY :null}</span>
                                        </div>
                                    </article>
                                ))
                            } 
                        </Content>
                    </Wrapper>
                </PostInfoContent>
            </PostInfoWrapper>
        :null
    )
};
export default PostAnswers;