import React, { useState } from 'react';
//API
import API from '../../API';
//Components
import GetText from '../GetText';
import Spinner from '../Spinner';
import Textarea from '../Textarea';
import Button from '../Button';
import Moderation from '../Moderation';
//Styles
import { Wrapper } from './CreateAnswer.style';

const CreateAnswer = ({ postUrl, userHash }) => {

    const [answerId, setAnswerId] = useState(null);
    const [text, setText] = useState(null);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState();

    const handleInputAnswer = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if(name === 'postTextareaAnswer') setText(value);
        
    };

    const handleSubmitAnswer = async () => {
        if(text) {
            try {
                setLoading(true)
                setError(false);
        
                const data = await API.createAnswer(text, postUrl, userHash);
        
                var answerId = data.results[0].answerId;
                var success = data.results[0].success;
                var errorMessage = data.results[0].error;


                if(errorMessage) {
                    setLoading(false);
                    setErrorMessage(errorMessage)
                }

                if(success) {
                    setLoading(false);
                    setError(false);
                    setAnswerId(answerId);
                    window.location.reload();
                }

            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }
    };

    if(loading) return <Spinner />
    if(error) return <Wrapper>Something went wrong...</Wrapper>
   
    return (
        (userHash) ? (
            <Wrapper>
                <div id="postAnswerWrapper" className="post-answer-wrapper">
                    <div className="post-answer-title"><GetText textName='post_answer' /></div>
                    {
                        (errorMessage) ? <Wrapper><GetText textName={errorMessage} textStyle={'default'} /></Wrapper> :null
                    }
                    <Textarea name="postTextareaAnswer" className='post-create-textarea-title"' placeholder='' value={text} onChange={handleInputAnswer} />

                    <center><Button className='post-answer-button color-button hover' text={<GetText textName='post_send_answer' />} callback={handleSubmitAnswer} /></center>
                    <div className='postModeration'>
                        <Moderation answerId={answerId} userHash={userHash} />
                    </div>
                </div>
            </Wrapper>
        )
        :null
    )
};

export default CreateAnswer;