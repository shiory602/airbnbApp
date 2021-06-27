import Explore from './Explore';
import TopFooter from './TopFooter';
// import { useHotelContext } from '../../context/HotelContext';

import topImage from "./top-image.jpg";
import experience from "./experience.jpg";
import nearby from "./nearby.jpg";
import hosting from "./hosting.jpg";

function Top() {
    // const { photos } = useHotelContext();
    // console.log(photos.hotelImages);
    return (
        // <>
        // { photos.length !== 0 && (
        <>
            <img src={topImage} width="100%" alt="top" />
            {/* <img src={photos.hotelImage[0].baseUrl} alt='top image' /> */}
            <Explore />

            <h2 className="m-3">Nearby</h2>
            <div class="card-group">
                <div class="card">
                    <img src={nearby} class="card-img-top" alt="nearby" />
                    <div class="card-body">
                    <h5 class="card-title">Outdoor getaways</h5>
                    </div>
                </div>
                <div class="card">
                    <img src={nearby} class="card-img-top" alt="nearby" />
                    <div class="card-body">
                    <h5 class="card-title">Outdoor getaways</h5>
                    </div>
                </div>
                <div class="card">
                    <img src={nearby} class="card-img-top" alt="nearby" />
                    <div class="card-body">
                    <h5 class="card-title">Outdoor getaways</h5>
                    </div>
                </div>
            </div>


            <h2 className="m-3">Hosting</h2>
            <div class="card bg-dark text-white">
            <img src={hosting} className="card-img" width="90%" alt="host" />
                <div class="card-img-overlay">
                    <h5 class="card-title">Try hosting</h5>
                    <p class="card-text">Earn extra income and unlock new opportunities by sharing your space.</p>
                    <a href="#" class="btn btn-secondary">Learn more</a>
                </div>
            </div>


            <h2 className="m-3">Experience</h2>
            <div class="card-group">
                <div class="card">
                    <img src={experience} class="card-img-top" alt="experience" />
                    <div class="card-body">
                    <h5 class="card-title">Outdoor getaways</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div class="card">
                    <img src={experience} class="card-img-top" alt="experience" />
                    <div class="card-body">
                    <h5 class="card-title">Outdoor getaways</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div class="card">
                    <img src={experience} class="card-img-top" alt="experience" />
                    <div class="card-body">
                    <h5 class="card-title">Outdoor getaways</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>

            
            <TopFooter />
        </>
        // )}
        // </>
    )
}

export default Top;
