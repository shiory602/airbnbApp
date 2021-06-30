import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Search } from './Search';

export default function Banner() {
    const history = useHistory();
    const [ showSearch, setShowSearch ] = useState(false);

    return (
        <Body>
            <Banner_Search>
            {showSearch && <Search />}
            <Button onClick={() => setShowSearch(!showSearch)} className="benner_search_button" variant="outlined">{showSearch ? "Hide" : "Search Dates"}</Button>
            </Banner_Search>
            <Banner_info>
                <h1>write information here</h1>
                <h5>
                    detail
                </h5>
                <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
            </Banner_info>
        </Body>
    );
}

const Body = styled.div`
    background: url()
    positon: relative;
`

const Banner_Search = styled.div`
    display: flex;
    flex-direction: column;
`
const Banner_info = styled.div`
    background-color: black;
    color: white;
    padding-top: 25vh;
    padding-left: 50px;
    padding-bottom: 40px;
    width: 300px;
`
