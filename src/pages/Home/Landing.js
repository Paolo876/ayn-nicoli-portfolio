import React, {useEffect} from 'react'
import "./Landing.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Landing() {
  useEffect(() => {
    Aos.init();
}, []);
  return (
    <div className='landing' >
        <p className='landing-logo'  
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
          >AYNSL</p>
    </div>
  )
}
