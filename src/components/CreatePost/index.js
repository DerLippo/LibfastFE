import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
//Package
import disableScroll from 'disable-scroll';
import {isMobile} from 'react-device-detect';
import TextareaAutosize from 'react-textarea-autosize';
//API
import API from '../../API';
//Components
import GetText from '../GetText';
import Spinner from '../Spinner';
import Textarea from '../Textarea';
import Button from '../Button';
import Hashtag from '../Hashtag';
//Styles
import { Wrapper, QaWrapper, QaContent, QaButton, QaButtonWrapper } from './CreatePost.style';
//Hook
import { useHashtagsFetch } from '../../hooks/useHashtagsFetch';
import UserFunctions from '../UserFunctions';

const CreatePost = ({ value, userHash }) => {

    /* Hashtag Stuff */
    const [hashtagObject, setHashtagObject] = useState('');
    const [hashtagObjectCounter, setHashtagObjectCounter] = useState();
    const [hashtagActive, setHashtagActive] = useState();

    const [hashtagMinAmount, setHashtagMinAmount] = useState();
    const [hashtagMaxAmount, setHashtagMaxAmount] = useState();


    const handleCategoryClick = e => {
        const objectCounter = e.currentTarget.name; //objectCounter

        if(objectCounter) {

            if(hashtagObject[objectCounter]) {

                if(hashtagObject[objectCounter].active) {

                    setHashtagObjectCounter(objectCounter);
                    setHashtagActive(false);
                }
                else
                {
                    setHashtagObjectCounter(objectCounter);
                    setHashtagActive(true);
                }
            }

        }
        setHashtagObject(null);
        setHashtagObject(hashtagObject);

    };

    const {
        state: dataHashtags,
        loading: hashtagLoading,
        error: hashtagError
    } = useHashtagsFetch();

    if(dataHashtags[0] && !hashtagObject[0]) {
        setHashtagObject(dataHashtags);
    }
    
    if(hashtagObject) {

        if(hashtagObjectCounter) {
            hashtagObject[hashtagObjectCounter].active = hashtagActive;
        }

    }
    /* Hashtag Stuff End */

    /* Post Stuff */
    const [title, setTitle] = useState(' ');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState('start');

    const navigate = useNavigate();

    const handleInputPost = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if(name === 'postTextareaTitle') setTitle(value);
        
    };

    /* Handle Step Click */

    function handleStep(nextStep) {

        //Step 1
        if(nextStep == 'start') {
            //clear error message
            setErrorMessage(null);
            //Goto Next step
            setStep('start');
        }

        //Step 2
        if(nextStep == 'chooseHashtag') {
            /* title check */
            if(!title) {
                //error message
                setErrorMessage('postTitleEmpty');
            }
            else
            {
                //clear error message
                setErrorMessage(null);
                //Goto Next step
                setStep('chooseHashtag');
            }
            /* title check END */
        }

        //Step 3
        if(nextStep == 'lastPreview') {
            
            //Count selected hashtags
            function countHashtag(obj)
            {
                var count = 0;
                var countSelected = 0;
                for(var prop in obj)
                {
                    if(obj[count].active == true) {
                        countSelected++;
                    }
                    count++;
                }
                return countSelected;
            }

            var countHashtagCheck = countHashtag(hashtagObject);

            /* hashtag check */
            if(!countHashtagCheck) {
                //error message
                setErrorMessage('hashtagChoose');
            }
            else
            {
                //clear error message
                setErrorMessage(null);
                //Goto Next step
                setStep('lastPreview');
            }
            /* hashtag check END */
        }


        //Scroll up
        window.scrollTo(0, 0);
    }

    /* Handle Step Click END */


    /* mobile version */
    if((isMobile && UserFunctions.getUserId() == 1) || (isMobile && UserFunctions.getUserId() == 2)) {
        if(step == 'chooseHashtag') {
            //disableScroll.off();
        }
        else
        {
            window.scrollTo(0, 0);
            //disableScroll.on();
        }

        if(step == null) {
            //disableScroll.off();
        }
    }
    /* Mobile version end */

    const handleSubmitPost = async () => {
        if(title) {
            try {
                setLoading(true)
                setError(false);
                setHashtagMinAmount(null)
                setHashtagMaxAmount(null)
                setErrorMessage(null)
        
                /* check some things */
                    var newTitle = title;
                    /* check if title ends with space */

                        if(/\s$/.test(newTitle)) {
                            var newTitle = (newTitle.substring(0, newTitle.length - 1))
                        }
                    /* check if title ends with space End */

                    /* check if question mark is there */
                        var check = newTitle.endsWith('?');

                        if(!check) {
                            var newTitle = newTitle+'?';
                        }
                    /* check if question mark is there End */
                    
                    /* setTitle after checks if something changed */
                    if(newTitle != title) {
                        setTitle(newTitle);
                    }
                    /* setTitle after checks if something changed End */
                /* check some things end */
                    const data = await API.createPost(newTitle, userHash, hashtagObject);
            
                    var postUrl = data.results[0].postUrl;
                    var errorMessage = data.results[0].error;

                    if(postUrl) { 
                        setLoading(false);
                        setStep(null);
                        navigate('/p/' + postUrl);
                    }

                    if(errorMessage) {
                        setLoading(false);
                        setErrorMessage(errorMessage)
                    }
                    if(data.results[0].hashtagMinAmount) {
                        setLoading(false);
                        setHashtagMinAmount(data.results[0].hashtagMinAmount)
                    }
                    if(data.results[0].hashtagMaxAmount) {
                        setLoading(false);
                        setHashtagMaxAmount(data.results[0].hashtagMaxAmount)
                    }


            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }
    };

    useEffect(() => {
        if(!loading) {
            if(title) {
                return;
            }
        }

    }, [title, value, loading]);

        /* Fill Title Field with Search Value */
        if(title == ' ') {
            setTitle(value);
        }
        /* Fill Title Field with Search Value End */
    /* Post Stuff End */

    if(loading) return <Spinner />
    if(error) return <Wrapper>Something went wrong...</Wrapper>

    return (
        
        ((isMobile && UserFunctions.getUserId() == 1) || (isMobile && UserFunctions.getUserId() == 2)) ?
            <QaWrapper>
                <QaContent>
                    {
                        (errorMessage) ?
                            <div className="QaText">
                                <GetText textName={errorMessage} textStyle={'default'} />
                                {
                                    (hashtagMinAmount) ?
                                        <> <GetText textName={'minAmount'} textStyle={'default'} valueAfter={hashtagMinAmount} /> </>
                                    :null
                                }
                                {
                                    (hashtagMaxAmount) ?
                                        <> <GetText textName={'maxAmount'} textStyle={'default'} valueAfter={hashtagMaxAmount} /> </>
                                    :null
                                }
                            </div>
                        :null
                    }
                    {
                        (step == 'start') ?
                            <>
                                <div className="QaTitle"><GetText textName='post_title' /></div>
                                <TextareaAutosize name="postTextareaTitle" className='QaTextarea' placeholder='Lorem ipsum dolor sit amet?' value={title} onChange={handleInputPost} />
                                <QaButtonWrapper>
                                    <QaButton onClick={() => {handleStep('chooseHashtag')} }>{<i className="fa-solid fa-circle-right"></i>}</QaButton>
                                </QaButtonWrapper>
                            </>
                        :null
                    }
                    {
                        (step == 'chooseHashtag') ?
                            <>
                                <div className="QaTitle"><GetText textName={'hashtagChoose'} /></div>
                                <div className="QaText">{title}</div>
                                <div className='QaHashtagWrapper'>
                                    {
                                        (hashtagObject) ?
                                            Object.keys(hashtagObject).map((a) => (
                                                <Hashtag key={hashtagObject[a].hashtagId}
                                                active={ `${(hashtagObject[a].active == true) ? true : false}`}
                                                name={a} onClick={handleCategoryClick}
                                                text={hashtagObject[a].hashtag}
                                                hidden={ `${(hashtagObject[a].hidden == true) ? true : false}`}
                                                disabled={ `${(hashtagObject[a].disabled == true) ? true : false}`} />
                                            ))
                                        :null
                                    }
                                </div>
                                <QaButtonWrapper>
                                    <QaButton onClick={() => {handleStep('start')} }>{<i className="fa-solid fa-circle-left"></i>}</QaButton>
                                    <QaButton onClick={() => {handleStep('lastPreview')} }>{<i className="fa-solid fa-circle-right"></i>}</QaButton>
                                </QaButtonWrapper>
                            </>
                        :null
                    }
                    {
                        (step == 'lastPreview') ?
                            <>
                                <div className="QaTitle">Möchtest du diese Frage stellen?</div>
                                <div className="QaText">{title}</div>
                                <div className='QaHashtagWrapper'>
                                    {
                                        /* Show Selected Hashtags */
                                            (hashtagObject) ?
                                                Object.keys(hashtagObject).map((a) => (
                                                    (hashtagObject[a].active == true) ?
                                                        <Hashtag key={hashtagObject[a].hashtagId}
                                                        active={ `${(hashtagObject[a].active == true) ? true : false}`}
                                                        name={a} onClick={handleCategoryClick}
                                                        text={hashtagObject[a].hashtag}
                                                        hidden={ `${(hashtagObject[a].hidden == true) ? true : false}`}
                                                        disabled={ `${(hashtagObject[a].disabled == true) ? true : false}`} />
                                                    :null
                                                ))
                                            :null
                                        /* Show Selected Hashtags END */
                                    }
                                </div>
                                <QaButtonWrapper>
                                    <QaButton onClick={() => {handleStep('chooseHashtag')} }>{<i className="fa-solid fa-circle-left"></i>}</QaButton>
                                    <QaButton onClick={handleSubmitPost}>{<i className="fa-solid fa-circle-right"></i>}</QaButton>
                                </QaButtonWrapper>
                            </>
                        :null
                    }
                </QaContent>
            </QaWrapper>
        :
            <Wrapper>
                {
                    (errorMessage) ?
                        <Wrapper>
                            <GetText textName={errorMessage} textStyle={'default'} />
                            {
                                (hashtagMinAmount) ?
                                    <> <GetText textName={'minAmount'} textStyle={'default'} valueAfter={hashtagMinAmount} /> </>
                                :null
                            }
                            {
                                (hashtagMaxAmount) ?
                                    <> <GetText textName={'maxAmount'} textStyle={'default'} valueAfter={hashtagMaxAmount} /> </>
                                :null
                            }
                        </Wrapper>
                    :null
                }
                <div className="post-create-wrapper">
                    {
                        (userHash) ? (
                            <>
                                <div className="post-create-title"><GetText textName='post_title' /></div>
                                <Textarea name="postTextareaTitle" className='post-create-textarea-title"' placeholder='' value={title} onChange={handleInputPost} />
                
                                <span id="postTextareaTitleCount" className="post-create-textarea-title-count"></span>
                                <textarea name="postTextareaText" className="post-create-textarea-text" placeholder=''></textarea>
                                <center><Button className='post-create-button color-button hover' text={<GetText textName='post_button' />} callback={handleSubmitPost} /></center>
                                {
                                    (hashtagObject) ? (
                                    <h2><GetText textName='hashtags' /></h2>
                                    )
                                    :
                                    (
                                        <></>
                                    )
                                }
                                {
                                    (hashtagObject) ?
                                        Object.keys(hashtagObject).map((a) => (
                                            <Hashtag key={hashtagObject[a].hashtagId}
                                            active={ `${(hashtagObject[a].active == true) ? true : false}`}
                                            name={a} onClick={handleCategoryClick}
                                            text={hashtagObject[a].hashtag}
                                            hidden={ `${(hashtagObject[a].hidden == true) ? true : false}`}
                                            disabled={ `${(hashtagObject[a].disabled == true) ? true : false}`} />
                                        ))
                                    :null
                                } 
                            </>
                        )
                        :
                        (
                            <>
                                <div className="post-create-title"><GetText textName='post_title' /></div>
                                <Textarea name="postTextareaTitle" className='post-create-textarea-title"' placeholder='' value={title} onChange={handleInputPost} disabled />
                
                                <span id="postTextareaTitleCount" className="post-create-textarea-title-count"></span>
                                <textarea name="postTextareaText" className="post-create-textarea-text" placeholder=''></textarea>
                                <center><Button className='post-create-button color-button hover disabled' text={<GetText textName='post_button' />} callback={handleSubmitPost} disabled /></center>
                                <center><GetText textName='postLoginText' /> <Link to='/login'><GetText textName='postLogin' /></Link></center>
                            </>
                        )
                    }
                </div>
            </Wrapper>
    )
};

export default CreatePost;