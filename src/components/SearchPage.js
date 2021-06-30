import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

export default function SearchPage() {
    return (
        <div className="searchPage">
            <InfoBox>
                <Info>62 stays. 26 August to 30 August .2 guests</Info>
                <Info2>Stays nearby</Info2>
                <Filters><Button variant="outlined">Cancellation Flexibility</Button></Filters>
                <Filters><Button variant="outlined">Type of place</Button></Filters>
                <Filters><Button variant="outlined">Price</Button></Filters>
                <Filters><Button variant="outlined">Rooms and beds</Button></Filters>
                <Filters><Button variant="outlined">More filters</Button></Filters>
            </InfoBox>

        </div>
    );

}

const InfoBox = styled.div`
    padding: 20px;
`

const Info = styled.p`
    margin-bottom: 10px;
    font-size: 14px;
`

const Info2 = styled.h1`
    margin-bottom: 30px;
`

const Filters = styled.button`
    border-radius: 30px;
    text-transform: inherit;
    margin: 5px;
`