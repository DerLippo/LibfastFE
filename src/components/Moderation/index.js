import React, { useState, useEffect } from 'react';
//API
import API from '../../API';
//Package
import disableScroll from 'disable-scroll';
//Components
import Button from '../Button'
import GetText from '../GetText';
import Input from '../Input';
import Textarea from '../Textarea';
import Spinner from '../Spinner';
//Styles
import { Wrapper } from './Moderation.style';
import UserFunctions from '../UserFunctions';

const Moderation = ({ paramPostId, paramAnswerId, paramUserHash }) => {


    const [permissions, setPermissions] = useState();
    const [reportBox, setReportBox] = useState(false);
    const [answerBox, setAnswerBox] = useState(false);

    const [reported, setReported] = useState(false);
    const [reportStep, setReportStep] = useState(0);

    const [postId, setPostId] = useState(0);
    const [postUserId, setPostUserId] = useState(0);
    const [postDeleted, setPostDeleted] = useState(false);

    const [answerId, setAnswerId] = useState(0);
    const [answerUserId, setAnswerUserId] = useState(0);
    const [answerCanDelete, setAnswerCanDelete] = useState(false);
    const [answerDeleted, setAnswerDeleted] = useState(false);

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const constModeration = async (GetAction, paramPostId, paramAnswerId, paramUserHash, GetPostTitle, GetPostAnswer) => {

        try {
            setError(false);
            setLoading(true);
    
            const data = await API.moderation(GetAction, paramPostId, paramAnswerId, paramUserHash, null, GetPostTitle, GetPostAnswer);

            //Check permissions
            if(data.results[0].permissions) {
                setPermissions(data.results[0].permissions);
            }

            //Check reported
            if(data.results[0].reported) {
                setReported(true);
            }

            //Check post
            if(data.results[0].postData) {
                setPostUserId(data.results[0].postData[0].postId);
                setPostId(data.results[0].postData[0].postUserId);
            }

            //Check answer
            if(data.results[0].answerData) {
                setAnswerId(data.results[0].answerData[0].answerId);
                setAnswerUserId(data.results[0].answerData[0].answerUserId);
                setAnswerCanDelete(data.results[0].answerData[0].answerCanDelete);
            }

            if(GetAction == 'deleteAnswer') {
                if(data.results[0].success == true) {
                    setAnswerDeleted(true);
                    setAnswerBox(false);
                    window.location.reload(true);//Refresh is actually necessary
                }
            }

            if(GetAction == 'report') {
                if(data.results[0].success == true) {
                    setReported(true);
                }
            }

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    // Load More
    useEffect(() => {
        if(loading == false) {
            return;
        }
        else
        {
            constModeration(null, paramPostId, paramAnswerId, paramUserHash, null, null); //Check Permissions and Post/Answer Data
        }

    }, [loading, paramPostId, paramAnswerId, paramUserHash]);


    if(reportBox == true) {
        disableScroll.on();
    }
    else
    {
        disableScroll.off();
    }

    if(loading) return <Spinner />
    if(error) return <div>Something went wrong...</div>

    return (
        <>
            {
                //Logged in
                (UserFunctions.getSessionHash()) ? (
                    <>
                        {
                            //Permissions = -1 OR Permissions = 0 OR null
                            ((permissions == -1) || (permissions == 0) || (permissions == null)) ? (
                                <Wrapper>
                                    {
                                        //Dropdown
                                        (answerId || postId) ? 
                                            <div class="dropdownModeration">
                                                <span><i className="fa-solid fa-ellipsis"></i></span>
                                                <div class="dropdownModeration-content">
                                                    {
                                                        (answerId && answerUserId == UserFunctions.getUserId() && answerDeleted == false && answerCanDelete == true) ?
                                                            <div onClick={() => { setAnswerBox(true) }} ><GetText textName={'deleteAnswer'} /></div>
                                                        :null
                                                    }
                                                    {
                                                        (answerId || postId) ? 
                                                            <div onClick={() => { setReportBox(true) }} ><GetText textName={'report'} /></div>
                                                        :null
                                                    }
                                                </div>
                                            </div>
                                        :null
                                    }
                                    {
                                        //report
                                        (reported == false) ?
                                            <>
                                                <div className={ `${(reportBox == true) ? 'moderationBoxWrapper moderationBoxWrapperActive' : 'moderationBoxWrapper'}` }>
                                                    <div className='moderationBox'>
                                                        {
                                                            (reportStep === 0) ?
                                                                <>
                                                                    <h2><GetText textName={'reportBoxTitle'} /></h2>
                                                                    <Button callback={() => {setReportStep(2)} } text={<GetText textName={'yes'} />} />
                                                                    <Button callback={() => { {setReportBox(false)} {setReportStep(0)} }} text={<GetText textName={'no'} />} />
                                                                </>
                                                            :null
                                                        }
                                                        {
                                                            (reportStep === 1) ?
                                                                <>
                                                                    <h2><GetText textName={'moderationBoxReasonTitle'} /></h2>
                                                                    <Button callback={() => {setReportStep(2)} } text={<GetText textName={'send'} />} />
                                                                    <Button callback={() => { {setReportBox(false)} {setReportStep(0)} }} text={<GetText textName={'dismiss'} />} />
                                                                </>
                                                            :null
                                                        }
                                                        {
                                                            (reportStep === 2) ?
                                                                <>
                                                                    <h2><GetText textName={'moderationBoxSuccessTitle'} /></h2>
                                                                    <Button callback={async () => { {await constModeration('createReport', postId, answerId, UserFunctions.getSessionHash());} {setReportBox(false)} }} text={<GetText textName={'dismiss'} />} />
                                                                </>
                                                            :null
                                                        }
                                                    </div>
                                                </div>
                                            </>
                                        :null
                                        //report end
                                    }
                                    {
                                        //answer
                                        (answerDeleted == false) ?
                                            <>
                                                <div className={ `${(answerBox == true) ? 'moderationBoxWrapper moderationBoxWrapperActive' : 'moderationBoxWrapper'}` }>
                                                    <div className='moderationBox'>
                                                        {
                                                            <>
                                                                <h2><GetText textName={'deleteAnswerTitle'} /></h2>
                                                                <Button callback={async () => { {await constModeration('deleteAnswer', null, answerId, UserFunctions.getSessionHash());} }} text={<GetText textName={'yes'} />} />
                                                                <Button callback={() => { {setAnswerBox(false)} }} text={<GetText textName={'no'} />} />
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            </>
                                        :null
                                        //answer end
                                    }
                                </Wrapper>
                            ):null
                        }
                    </>
                ):null
            }
        </>
    )
};

export default Moderation;