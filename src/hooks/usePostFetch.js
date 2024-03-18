import { useState, useEffect } from 'react';
// API
import API from '../API';

const initialState = {
    results: []
};

export const usePostFetch = (postUrl, userHash) => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPost = async() => {
            try {
                setLoading(true);
                setError(false);

                const post = await API.fetchPost(postUrl, userHash);
                
                setState({
                    ...post,
                    results: [...post.results]
                })

                setLoading(false);

            } catch (error) {
                setError(true);
            }
        };

        fetchPost();
    }, [postUrl, userHash])

    return { state, loading, error };
}