// import React, { useEffect, useState } from 'react';
// import Navbar from '../../components/UI/Navbar';
// import generateRandomNumbers from '../../helpers/generateRandomNumbers';
// import Modal from '../../components/UI/Modal';
// import { useParams } from "react-router-dom";
// import { useStorage2 } from '../../hooks/useStorage2';
// import Aos from "aos";
// import "aos/dist/aos.css";

// import "./Project.css";
// import ProjectHeader from './ProjectHeader';
// import ProjectImages from './ProjectImages';
// const projectCategory = [
//     {   
//         name: "architecture",
//         title: "ARCHITECTURAL DESIGNS", 
//         projectType: ["Interior Visualization", "Exterior Visualization"], 
//         icons: [    
//             { name: "SketchUp", src: require("../../assets/proj-icons/sketchup-icon.svg").default },
//             { name: "V-ray", src: require("../../assets/proj-icons/vray-icon.svg").default },
//             { name: "Adobe Photoshop", src: require("../../assets/proj-icons/photoshop-icon.svg").default },
//         ]
//     },
//     {   
//         name: "graphic",
//         title: "GRAPHIC DESIGNS", 
//         projectType: ["Illustration", "Logo Design", "Print Design"], 
//         icons: [    
//             { name: "Adobe Photoshop", src: require("../../assets/proj-icons/photoshop-icon.svg").default },
//             { name: "Adobe Illustrator", src: require("../../assets/proj-icons/illustrator-icon.svg").default },
//             { name: "Apple Procreate", src: require("../../assets/proj-icons/procreate-icon.png") },
//         ]
//     },

// ]
// const Projects = () => {
//   const params = useParams();
//   const [ imagesList, setImagesList ] = useState([]);
//   const [ showModal, setShowModal ] = useState(false);
//   const [ currentImage, setCurrentImage ] = useState(null);
//   const [filterImages, setFilterImages ] = useState("all");
//   const [ isLoading, setIsLoading ] = useState(false);
//   const { downloadFiles } = useStorage2();

//   useEffect(() => {
//     const fetchImages = async () => {
//       setImagesList([]);
//       setFilterImages("all");
//       setIsLoading(true);
//       const data = await downloadFiles(params.id);
//       const images = generateRandomNumbers(data.length, data.length).map(files => { return { url: data[files], isLoading: true, isActive: false }});
//       setImagesList(images);
//       setIsLoading(false);
//     }
//     fetchImages();
//   }, [params.id ]);

//   const handleImageOnLoad = index => {
//     setImagesList(prevState => {
//       const updatedList = [...prevState]
//       updatedList[index].isLoading = false;
//       return updatedList;
//     })
//   }
//   const showModalHandler = (image, index) => {
//     setCurrentImage({src: image, index})
//     setShowModal(true)
//   }

//   const hideModalHandler = () => {
//     setCurrentImage(null)
//     setShowModal(false)
//   }
  
//   const projectData = projectCategory.find(item => item.name === params.id);
//   return (
//     <div className='project'>
//       <Navbar content={params.id} isLoading={isLoading} />
//       <div className='project-container'>
//         <ProjectHeader projectData={projectData} setFilterImages={setFilterImages} filter={filterImages}/>

//         <ul className='img-list'>
//           {isLoading && <div className="loader img-list-loader">Loading...</div>}
//           {imagesList && 
//             <ProjectImages 
//               imagesList={imagesList}
//               handleImageOnLoad={handleImageOnLoad}
//               showModalHandler={showModalHandler}
//               filterImages={filterImages}
//             /> 
//           }       
//         </ul>
//       </div>
//       {
//         showModal && 
//         <Modal 
//           handleHideModal={hideModalHandler} 
//         >
//           <div>
//             <img 
//               src={currentImage.src} 
//               className="modal-image" 
//             />
//           </div>
//         </Modal>
//       }
//     </div>
//   )
// };

// export default Projects;



// // store images for filtering --prevent refetching