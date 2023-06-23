import { Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import Showcase from './Showcase';
import Navbar from "../../components/UI/Navbar";

import Aos from "aos";
import "aos/dist/aos.css";

export default function ShowcaseCategories() {
    const [ category, setCategory ] = useState("architecture");
    const handleClick = (category) => {
      setCategory(category);
    }
    // aos animation
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);
    
  return (
    <div className='showcase-categories' id='showcase-page'>
        <Navbar content="home"/>
        <div className='showcase-categories-list'>
            <ul className='main-category-list'>
                <li className={`${category === "architecture" ? 'active' : ''}`}  onClick={() => handleClick("architecture")}>
                    <div >
                        <h3 data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-offset="100" data-aos-duration="900">ARCHITECTURAL <span className='header-span'>DESIGN</span></h3>
                        <ul className='sub-category-list' data-aos="fade" data-aos-delay="300" >
                            <li>Interior Visualization</li>
                            <li>Exterior Visualization</li>
                        </ul>
                    </div>
                </li>
                <li className={`${category === "graphic" ? 'active' : ''}`} onClick={() => handleClick("graphic")}>
                    <div  data-aos="fade"  data-aos-delay="1000">
                        <h3>GRAPHIC  <span className='header-span'>DESIGN</span></h3>
                        <ul  className='sub-category-list'>
                            <li>Digital Illustration</li>
                            <li>Logo Design</li>
                            <li>Print Design</li>
                        </ul>
                    </div>
                </li>
            </ul>
            <Link to={`/projects/${category}`} className="showcase-container" data-aos="fade-left" data-aos-delay={800}> 
                <Showcase content={category} />
            </Link>
        </div>
    </div>

  )
}
