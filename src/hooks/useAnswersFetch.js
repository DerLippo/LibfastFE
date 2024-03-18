import { useState, useEffect } from 'react';
// API
import API from '../API';

export const useAnswersFetch = (postUrl, userHash) => {
    const [state, setAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchAnswers = async() => {
        try {
            setLoading(true);
            setError(false);

            const answers = await API.fetchAnswers(postUrl, userHash);

            setAnswers({
                ...answers,
            });

            setLoading(false);

        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };
        

    useEffect(() => {
        fetchAnswers();
    }, [postUrl, userHash])

    return { state, loading, error };
}