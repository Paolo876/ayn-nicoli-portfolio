// import React, {useState} from 'react'
// import { motion } from 'framer-motion';
// export const ProjectHeader = React.memo(({ projectData, setFilterImages, filter }) => {
//   return ( 
//     <div className='header-container'>
//       <motion.button
//         onClick={() => setFilterImages("all")}  
//         className={`header ${filter === "all" ? 'project-selected' : ''}`}
//       >
//         <h3 
          
//         >
//           {projectData.title}
//         </h3>
//       </motion.button>
//       {projectData.projectType.map(item => (
//         <motion.button
//           key={item}
//           className={`sub-header ${filter === item.split(' ')[0] ? 'project-selected' : ''}`}
//           onClick={() => setFilterImages(item.split(' ')[0])}  
//         >
//           <p>{item}</p>
//         </motion.button>
//       ))}

//       <ul className="tech-list">
//         {projectData.icons.map(item => (
//             <li className='tech-list-item' key={item.name}>
//                 <img src={item.src} alt={item.name} className="tech-icon"/>
//             </li>
//         ))}
//       </ul>
//     </div>
//   )
// });

// export default ProjectHeader;
