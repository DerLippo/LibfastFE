import { useState, useEffect } from 'react';
// API
import API from '../API';
//Functions
import UserFunctions from '../components/UserFunctions';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const usePostsFetch = (startPage) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchFilter, setSearchFilter] = useState('');
    const [searchHashtagObject, setSearchHashtagObject] = useState('');
    const [topHashtags, setTopHashtags] = useState('');
    const [topUsers, setTopUsers] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [canLoadMore, setCanLoadMore] = useState(true);
    const [scrollUp, setScrollUp] = useState(false);

    const fetchPosts = async (page, searchTerm = '', searchFilter) => {
        try {
            setError(false);
            setLoading(true);

            const posts = await API.fetchPosts(searchTerm, page, searchFilter);
            //console.log('page:' + page);

            /* Stats */
            const getStats = await API.fetchStats(UserFunctions.getSessionHash());
            setTopUsers(getStats.results[0].topUsers);
            setTopHashtags(getStats.results[0].topHashtags);
            /* Stats End */

            /* Search Hashtag Object */
            const getHashtagObject = await API.fetchHashtags(searchTerm);
            setSearchHashtagObject(getHashtagObject);
            /* Search Hashtag Object End */
            
            if(posts.results) {

                if(scrollUp == true) {

                    setState(prev => ({
                        ...posts,
                        results: page >= 0 ? [...posts.results, ...prev.results] : [...posts.results]
                    }))
                }
                else
                {

                    setState(prev => ({
                        ...posts,
                        results: page >= 0 ? [...prev.results, ...posts.results] : [...posts.results]
                    }))

                }
            }
            else
            {
                setCanLoadMore(false);
            }

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    // Search and initial
    useEffect(() => {
        setState(initialState);
        fetchPosts(startPage, searchTerm, searchFilter);
    }, [searchTerm, searchFilter]);

    // Load More
    useEffect(() => {

        if(!isLoadingMore) return;

        if(scrollUp == true) {
            
            //var newPage = parseInt(state.page) - 1;
            var newPage = parseInt(0);
        }
        else
        {
            var newPage = parseInt(state.page) + 1;
        }
      
        if(newPage < 0) {
            var newPage = parseInt(0);
        }

        if(!newPage) {
            var newPage = 0;
        }
    
        if(newPage == 0) {
            UserFunctions.deleteScrollPosts();
        }

        UserFunctions.setScrollPage(newPage);

        fetchPosts(newPage, searchTerm, searchFilter); //Get Post with actually searchTerm and new Page Number
        setIsLoadingMore(false);

    }, [scrollUp, isLoadingMore, searchTerm, searchFilter, state.page]);

    return { state, topHashtags, topUsers, searchHashtagObject, loading, error, searchTerm, searchFilter, canLoadMore, scrollUp, setSearchTerm, setIsLoadingMore, setCanLoadMore, setSearchFilter, setScrollUp };
};