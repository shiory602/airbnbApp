import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

export default function SearchPage() {
    return (
        <div className="searchPage">
            <InfoBox>
                <Info>62 stays. 26 August to 30 August .2 guests</Info>
                <Info2>Explore nearby</Info2>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
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

