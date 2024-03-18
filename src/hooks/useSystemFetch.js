import { useState, useEffect } from 'react';
// API
import API from '../API';

export const useSystemFetch = () => {
    
    const [state, setState] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchSystem = async() => {
        try {
            setLoading(true);
            setError(false);

            const data = await API.fetchSystem();

            setState(data.results[0]);

            setLoading(false);

        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };
        

    useEffect(() => {
        if(loading === false) {
            return;
        }
        else
        {
            fetchSystem(); 
        }

    }, [loading]);

    return { state, loading, error };
}