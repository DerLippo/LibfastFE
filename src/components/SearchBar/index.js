import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GetText from '../GetText';
//Components
import Input from '../Input';
//Styles
import { Wrapper, Content, Search } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm, value }) => {

    const {
        search
    } = useParams();

    const [searchValue, setSearchValue] = useState();

    const inital = useRef(true);
    const navigate = useNavigate();


    if(!searchValue) {
        if(value != null) {
            if(searchValue != value) {
                setSearchValue(value);
            }
        }
    }


    useEffect(() => {

        if(inital.current === true) {
            inital.current = false;
            return;
        }

        const timer = setTimeout(() => {

            if(searchValue) {
                navigate('/search/'+searchValue);
            }


        }, 1000)

        return () => clearTimeout(timer)
    }, [setSearchTerm, searchValue])


    return (

            <Search>
                <Input
                id='searchbar'
                type='text'
                name='search'
                placeholder={''}
                onChange={event => setSearchValue(event.currentTarget.value)}
                autoComplete='off'
                value={searchValue}
                />
            </Search>
    )
};

export default SearchBar;