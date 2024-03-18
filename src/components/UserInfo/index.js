import { React, useState } from 'react';
// Config
import { USER_IMG_URL } from '../../config'
//Functions
import UserFunctions from '../UserFunctions';
//Components
import Spinner from '../Spinner';
import PostInfo from '../PostInfo';
import GetText from '../GetText';
import UserImage from '../UserImage';
import UserDefaultImage from '../../images/user/profile-img-default.png'
//Hook
import { useUserFetch } from '../../hooks/useUserFetch';
// Styles
import { Wrapper, ProfileHeader, ProfileLevelbar, ProfileBody, ProfileBodySwitch } from './UserInfo.styles';

import UserVerifiedImage from '../../images/user/verified-badge.png'

const UserInfo = ({userName, userHash}) => {

    const [profileBodySwitch, setProfileBodySwitch] = useState('lastPost');

    const {
        state,
        loading, 
        error,
        notFound
    } = useUserFetch(userName, userHash);

    if(loading) return <Spinner />
    if(error) return <div>Something went wrong...</div>
    if(notFound) return <div>Not found...</div>

    // Levelbar
        var this_level_xp = state.userLevelMinXp;
        var next_level_xp = state.userLevelMaxXp;
        var user_xp = state.userCurrentXp;
        
        var xp_diff = next_level_xp - this_level_xp;//get diff between this two levels
        var current_xp = user_xp - this_level_xp;//calculate how much xp I did this level
        var current_percent = Math.floor((100 * current_xp) / xp_diff);//calculate how much percent I got in this level
    //Levelbar End

   

    return (
        <>
            <Wrapper>
                <div className="profile">
                    <div className="profile-right">
                        <div id="profileHeader" className="profile-header">
                            <UserImage src={(state.userImgUrl) ? ( USER_IMG_URL + state.userImgUrl ) : ( UserDefaultImage )} alt='UserImage' className='profile-img'/>
                            <ProfileHeader>
                                <h1 className="profile-username color-5"><span>{state.userName}{ (state.userVerified == true) ? <img src={UserVerifiedImage} className='userVerifiedIcon' /> :null }</span></h1>
                                <ProfileLevelbar>
                                    <div className="profile-levelbar">
                                        <div id="levelbar-progress" className="profile-levelbar-progress" style={{width: current_percent+'%'}}>
                                        </div>
                                        <div className="profile-levelbar-informations">
                                            <div className="profile-levelbar-level"><GetText textName='user_level' /> <span id="levelAmount">{state.userLevel}</span></div>
                                            <div className="profile-levelbar-text"><span id="profile-levelbar-percent">{100-current_percent+'%'}</span> <GetText textName='user_up_to_level' /> <span id="levelNextAmount">{state.userNextLevel}</span></div>
                                        </div>
                                    </div>
                                </ProfileLevelbar>
                            </ProfileHeader>
                        </div>
                        <ProfileBody>
                            <div id="profileInformations" className="profile-informations-wrapper">
                                <div className="profile-informations-row">
                                    <div className="profile-informations-container">
                                        <div className="profile-informations-amount-wrapper">
                                            <center>
                                                <div className="profile-informations-amount-container">
                                                    <div id="postAmount" className="profile-informations-amount">{state.userPostAmount}</div>
                                                    <div className="profile-informations-amount-title"><GetText textName='user_questions' /></div>
                                                </div>
                                                <div className="profile-informations-amount-container">
                                                    <div id="postAnswerActiveAmount" className="profile-informations-amount">{state.userPostActiveAnswerAmount}</div>
                                                    <div className="profile-informations-amount-title"><GetText textName='user_active_answers' /></div>
                                                </div>
                                                <div className="profile-informations-amount-container">
                                                    <div id="postAnswerAmount" className="profile-informations-amount">{state.userPostAnswerAmount}</div>
                                                    <div className="profile-informations-amount-title"><GetText textName='user_answers' /></div>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                    {
                                        (state.userId == UserFunctions.getUserId()) ?
                                            <ProfileBodySwitch>
                                                <div>
                                                    <span className={(profileBodySwitch == 'lastPost') ? `active` :null} onClick={() => setProfileBodySwitch('lastPost')}><GetText textName='user_last_question' /></span>
                                                </div>
                                                <div>
                                                    <span className={(profileBodySwitch == 'lastAnswer') ? `active` :null} onClick={() => setProfileBodySwitch('lastAnswer')}><GetText textName='user_last_answer' /></span>
                                                </div>
                                            </ProfileBodySwitch>
                                        :null
                                    }
                                    {
                                        (profileBodySwitch == 'lastPost') ?
                                            <div className="profile-informations-container">
                                            {
                                                (state.userId == UserFunctions.getUserId()) ?
                                                    <>
                                                        {
                                                            state.userPostLatest.map(row => (
                                                                <PostInfo key={row.id} postData={row} userHash={UserFunctions.getSessionHash()} showHashtag={false} />
                                                            ))
                                                        }
                                                    </>
                                                :null
                                            }
                                            </div>
                                        :null
                                    }
                                    {
                                        (profileBodySwitch == 'lastAnswer') ?
                                            <div className="profile-informations-container">
                                            {
                                                (state.userId == UserFunctions.getUserId()) ?
                                                    <>
                                                        {
                                                            state.userAnswerLatest.map(row => (
                                                                <PostInfo key={row.id} postData={row} userHash={UserFunctions.getSessionHash()} showHashtag={false} />
                                                            ))
                                                        }
                                                    </>
                                                :null
                                            }
                                            </div>
                                        :null
                                    }
                                </div>
                                <div className="profile-informations-row">
                                </div>
                            </div>
                        </ProfileBody>
                    </div>
                </div>
            </Wrapper>
        </>
    )
};

export default UserInfo;