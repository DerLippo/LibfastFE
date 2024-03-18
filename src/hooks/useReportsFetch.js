import { useState, useEffect } from 'react';
// API
import API from '../API';

export const useReportsFetch = (userHash) => {
    const [stateReports, setStateReports] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchReports = async() => {
        try {
            setLoading(true);
            setError(false);

            const report = await API.moderation('getReports', null, null, userHash.userHash);

            setStateReports(report);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };
        

    useEffect(() => {
        fetchReports();
    }, ['getReports', null, null, userHash])

    return { stateReports, loading, error };
}