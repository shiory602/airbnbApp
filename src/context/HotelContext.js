import React, { useState, useEffect, useContext } from 'react';

const HotelContext = React.createContext();

const HotelProvider = ({ children }) => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "725fcffeeamsheb092e027d45b9ep10af3fjsn6de332681721",
                "x-rapidapi-host": "hotels4.p.rapidapi.com"
            }
        })
        .then(response => {
            response.json().then(data => {
                setPhotos(data);
                // console.log(photos);
            })
        })
        .catch(err => {
            console.error(err);
        });
    }, [])

    return (
        <HotelContext.Provider value={{photos}}>
            {children}
        </HotelContext.Provider>
    );
}

const useHotelContext = () => useContext(HotelContext);

export { useHotelContext, HotelProvider as default };