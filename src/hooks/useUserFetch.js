import { useState, useEffect } from 'react';
// API
import API from '../API';

const initialState = {
    userId: 0,
    userName: null,
    userEmail: null,
    userImgUrl: null,
    userLevel: 0,
    userLevelMinXp: 0,
    userLevelMaxXp: 0,
    userCurrentXp: 0,
    userNextLevel: 0,
    userPostAmount: 0,
    userPostAnswerAmount: 0,
    userPostActiveAnswerAmount: 0,
    userDarkMode: null,
    userPostLatest: '',
    userAnswerLatest: '',
    results: []
};

export const useUserFetch = (getUserName, userHash) => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const fetchUser = async () => {
        try {
            setLoading(true);
            setNotFound(false);
            
            const fetchUserData = await API.fetchUser(getUserName, userHash);
            const postData = await API.fetchPost(fetchUserData.results[0].userLatestPostUrl);
            const postAnswerData = await API.fetchPost(fetchUserData.results[0].userLatestPostAnswerUrl);
            
                setState(({
                    ...state,
                    results: fetchUserData.results,
                    userId: fetchUserData.results[0].userId,
                    userName: fetchUserData.results[0].userName,
                    userEmail: fetchUserData.results[0].userEmail,
                    userImgUrl: fetchUserData.results[0].userImgUrl,
                    userLevel: fetchUserData.results[0].userLevel,
                    userLevelMinXp: fetchUserData.results[0].userLevelMinXp,
                    userLevelMaxXp: fetchUserData.results[0].userLevelMaxXp,
                    userCurrentXp: fetchUserData.results[0].userCurrentXp,
                    userNextLevel: fetchUserData.results[0].userNextLevel,
                    userPostAmount: fetchUserData.results[0].userPostAmount,
                    userPostAnswerAmount: fetchUserData.results[0].userPostAnswerAmount,
                    userPostActiveAnswerAmount: fetchUserData.results[0].userPostActiveAnswerAmount,
                    userDarkMode: fetchUserData.results[0].userDarkMode,
                    userVerified: fetchUserData.results[0].userVerified,
                    userBanned: fetchUserData.results[0].userBanned,
                    userPostLatest: postData.results,
                    userAnswerLatest: postAnswerData.results
                }))

                if((fetchUserData.results[0].userId == null) || (fetchUserData.results[0].userBanned == true)) {
                    setNotFound(true);
                }

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };
    
    // Load More
    useEffect(() => {
        if((!state.userName) || (getUserName.toLowerCase() != state.userName.toLowerCase())) {
            if(!error) {
                fetchUser(getUserName, userHash); //Get userData with Username by parameter
            }
        }
    }, [loading, getUserName, userHash, notFound]);

    return { state, loading, error, notFound };
};