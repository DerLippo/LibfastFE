import { useState, useEffect } from 'react';
// API
import API from '../API';

const initialState = {
    text: '',
    results: []
};

export const useGetTextFetch = (textName, textLang) => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    const fetchText = async () => {

        //Get Data by sessionStorage
        const sessionStorage = window.sessionStorage.getItem('[Language: '+textLang+']'+textName);
        
        if(sessionStorage) {
            //Set sessionStorage Data into -> const [state, setState]
            setState(({
                ...state,
                text: sessionStorage,
            }))
        }
        else
        {
            //Get Data by Network
            try {
                setError(false);
                setLoading(true);
                
                const fetchTextData = await API.fetchText(textName, textLang);

                    //Set Web Data into -> const [state, setState]
                    setState(({
                        ...state,
                        results: fetchTextData.results,
                        text: fetchTextData.results[0].text,
                    }))
                    
                    //Save Data in localStorage
                    window.sessionStorage.setItem('[Language: '+textLang+']'+textName, fetchTextData.results[0].text);

            } catch (error) {
                setError(true);
            }
        }
        setLoading(false);
    };


    // Load More
    useEffect(() => {
        if(loading === false) {
            return;
        }
        else
        {
            fetchText(textName, textLang); //Get userData with Username by parameter
        }

    }, [loading, textName, textLang]);

    return { state, loading, error };
};