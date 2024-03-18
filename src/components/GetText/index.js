import React from 'react';
//Style
import { Wrapper, ResultMessage } from './GetText.style';
//Hooks
import { useGetTextFetch } from '../../hooks/useGetTextFetch';
//Functions
import UserFunctions from '../UserFunctions';

const GetText = ({ textName, textLang, textStyle, valueAfter }) => {

    if(!textLang) {
        textLang = UserFunctions.getUserLanguage();
    }

    const {
        state,
        loading, 
        error,
    } = useGetTextFetch(textName, textLang,);
    

    if(loading) return 'Loading ...'
    if(error) return <div>Something went wrong...</div>

    return (
        
        (textStyle == 'default') ? 
            <ResultMessage>

                {
                    (state.text) ?
                        state.text
                    :null
                }
                {
                (valueAfter) ?
                    ' '+valueAfter
                :null
                }

            </ResultMessage>
        :
        (state.text) ?
            state.text
        :null


            (valueAfter) ?
            valueAfter
            :null

    )
};

export default GetText;