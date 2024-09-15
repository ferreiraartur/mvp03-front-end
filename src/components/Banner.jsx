import React from "react";


import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';


const Banner = ({banner}) => {
    return (
        <div className="banner">
            <img src={banner} alt="banner" />
        </div>
    );
};

const bannerImages ={
    'banner1.png': banner1,
    'banner2.png': banner2,
    'banner3.png': banner3,
};

export default Banner;