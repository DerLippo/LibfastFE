import React, { useState, useEffect } from 'react';
//API
import API from '../../API';
//Styles
import { Wrapper, Content, CoolDown } from './Vote.style';

const Vote = ({ answerId, userHash }) => {


    const [likeAmount, setLikeAmount] = useState();
    const [dislikeAmount, setDislikeAmount] = useState();
    const [userVote, setUserVote] = useState();

    const [coolDown, setCoolDown] = useState(0);

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);


    const Voting = async (GetVote, GetVoteAnswerId, GetUserHash) => {
        
        try {
            setError(false);
            setLoading(true);
    
            const data = await API.vote(GetVote, GetVoteAnswerId, GetUserHash);
    
            setLikeAmount(data.results[0].likeAmount);
            setDislikeAmount(data.results[0].dislikeAmount);
            setUserVote(data.results[0].userVote);

            if(userHash) {
                setCoolDown(data.results[0].coolDown);
            }
            else
            {
                setCoolDown(0);
            }
        } catch (error) {
            setError(true);
        }
        setLoading(false);


    };

    
    // Load More
    useEffect(() => {

        if(coolDown) {
            let myInterval = setInterval(() => {
                if (coolDown > 0) {
                    setCoolDown(coolDown - 1);
                }
                if (coolDown === 0) {
                    clearInterval(myInterval)
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
            };
        }

        if(loading === false) {
            return;
        }
        else
        {
            Voting('', answerId, userHash); //Get voteData
        }



    }, [loading, answerId, userHash, coolDown]);

    



    //if(loading) return <></> //<Spinner />
    if(error) return <div>Something went wrong...</div>
    if(!answerId) return <></>
    return (
        <Wrapper>
            {
 
                (coolDown != 0) ?
                    <Content>
                        <CoolDown>{coolDown} s <i className="fa-solid fa-stopwatch icon"></i></CoolDown>
                    </Content>
                :
                    <Content>
                        <span className={`${userVote === '1' ? (`active`) : `` }`} title="Like" name='like' value={answerId} onClick={async () => {await Voting(1, answerId, userHash);} }>
                            <i className={`fas fa-heart post-answer-vote-like`}></i>
                        </span>
                        <span id="likeAmount" className="post-answer-vote-amount">{likeAmount}</span>
                        
                        <span className={`${userVote === '-1' ? (`active`) : `` }`} title="Dislike" name='dislike' value={answerId} onClick={async () => {await Voting(-1, answerId, userHash);} }>
                            <i className={`fas fa-heart-broken post-answer-vote-dislike`}></i>
                        </span>
                        <span id="dislikeAmount" className="post-answer-vote-amount" style={{display: 'none' }}>{/*dislikeAmount*/}</span>
                    </Content>
            }
        </Wrapper>
    )
};

export default Vote;