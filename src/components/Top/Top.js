import TopFooter from './TopFooter';
import { useHotelContext } from '../../context/HotelContext';

function Top() {
    const { photos } = useHotelContext();
    console.log(photos.hotelImages);
    return (
        <>
        { photos.length !== 0 && (
        <>
        Top
        {/* <img src={photos.hotelImage[0].baseUrl} alt='top image' /> */}
        <TopFooter />
        </>
        )}
        </>
    )
}

export default Top;
