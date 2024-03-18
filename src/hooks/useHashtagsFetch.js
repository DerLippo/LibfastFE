import { useState, useEffect } from 'react';
// API
import API from '../API';

export const useHashtagsFetch = () => {
    const [state, setHashtags] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [hashtagSearchTerm, setHashtagSearchTerm] = useState('');

    const fetchHashtags = async(getHashtagSearchTerm) => {
        try {
            setLoading(true);
            setError(false);


            const data = await API.fetchHashtags(getHashtagSearchTerm);

            setHashtags({
                ...data,
            });

            setLoading(false);

        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };
        

    useEffect(() => {
        fetchHashtags(hashtagSearchTerm);
    }, [hashtagSearchTerm])

    return { state, loading, error,
            hashtagSearchTerm, setHashtagSearchTerm };
}