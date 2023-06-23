import React, { useState, useEffect } from "react";
import "./Showcase.css";
import importFolder from "../../helpers/importFolder";
import generateRandomNumbers from "../../helpers/generateRandomNumbers";
import { motion } from "framer-motion";
const Showcase = React.memo(({ content }) => {
    let list;
    if(content === "architecture") list = importFolder(require.context(`../../assets/arch-thumbs/`, false, /\.(png|jpeg)$/));
    if(content === "graphic") list = importFolder(require.context(`../../assets/graphic-thumbs/`, false, /\.(png|jpeg)$/));   
    const generateImages = () => generateRandomNumbers(list.length, 8).map(item => { return { src: list[item] } });

    useEffect(()=> {
      setImagesList(generateImages);
      const interval = setInterval(() => setImagesList(generateImages()), 5000);
      return () => {clearInterval(interval);}
    },[content]);

    const [ imagesList, setImagesList ] = useState([]);
  return (
    <div className="showcase">   
      {imagesList && imagesList.map( item => (
            <motion.div className={`thumb-container`} key={item.src}       
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
                <img src={item.src} className="showcase-thumb"  alt={item.src}
                />
            </motion.div>
          ))}
      {!imagesList && <p>Failed to load data.</p>}
    </div>
  )
})

export default Showcase;



// react-spring unmounting, separate imageslist on a new component. leaner.