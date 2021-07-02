import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';

export default function Banner() {
    const history = useHistory();
    const [ showSearch, setShowSearch ] = useState(false);

    return (
        <Body>
            <Banner_Search>
            {showSearch && <Search />}
            <Button onClick={() => setShowSearch(!showSearch)} className="benner_search_button" variant="outlined">
                {showSearch ? "Hide" : "Search Dates"}
            </Button>
            </Banner_Search>
            <Banner_info>

                <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
            </Banner_info>
        </Body>
    );
}

const Body = styled.div`
    positon: relative;
    padding: 15px;
    display: flex;
    justify-content: center;
`

const Banner_Search = styled.div`
    flex-direction: column;
    margin: 10px;
`
const Banner_info = styled.div`
    flex-direction: column;
    margin: 10px;
`
