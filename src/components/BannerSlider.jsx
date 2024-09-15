import React, {useState, useEffect} from "react";
import Banner from './Banner.jsx';
import { IconButton} from '@mui/material';
import './BannerSlider.css'
import { ArrowForward } from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const BannerSlider = () => {

    

    const banners = [
        'src/assets/banner1.png',
        'src/assets/banner2.png',
        'src/assets/banner3.png',
    ];

    const [currentBanner, setCurrentBanner] = useState(0);

    const nextBanner = () => {
        setCurrentBanner((currentBanner + 1) % banners.length);
    };

    const prevBanner = () => {
        setCurrentBanner((currentBanner - 1 + banners.length) % banners.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextBanner();
        }, 3000); // Change interval duration (in milliseconds) as needed

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [currentBanner]);

    return (
        
       



        
        <div className="banner-slider">
           {/* <button onClick={prevBanner}>Previous</button>
           */}

            <Banner banner={banners[currentBanner]} />
            

               {/*
                <button  onClick={nextBanner}>Next</button>
    */}
                
                
            
           
           
            
        </div>
       
    );   
};

export default BannerSlider;