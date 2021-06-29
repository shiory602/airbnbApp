import { Link } from "react-router-dom";

import { ImStarFull } from "react-icons/im";
import { FiShare, FiHeart } from "react-icons/fi";

import topImage from "../Top/top-image.jpg";
import experience from "../Top/experience.jpg";
import nearby from "../Top/nearby.jpg";
import hosting from "../Top/hosting.jpg";

const Detail = () => {
    return (
        <div className="container">
            <div className="row">
                <h2>Private Guest Suite- 10mins to YVR</h2>
            </div>
            <div className="row">
                <p>
                    <span>{ImStarFull}</span>4.50
                    ({<Link to="/">64 reviews</Link>})
                    ·
                    {<Link to="/">Richmond, British Columbia, Canada</Link>}
                    {FiShare} Share
                    {FiHeart} Save
                </p>
                <img src={nearby} alt="house" />
            </div>
        </div>
    )
}

export default Detail;