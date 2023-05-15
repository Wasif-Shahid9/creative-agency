import { getDoc, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../../template/assets/img/project/project-1.jpg";
import img2 from "../../template/assets/img/project/project-2.jpg";
import img3 from "../../template/assets/img/project/project-3.jpg";
import img4 from "../../template/assets/img/project/project-4.jpg";
import img5 from "../../template/assets/img/project/project-5.jpg";
import img6 from "../../template/assets/img/project/project-6.jpg";
import { db } from "../../firebase";
import { getHomeSection } from "../../utils/FirebaseService";
// const projects = [
//   {
//     image: img1,
//     category: ".ui .graphic",
//     title: "Desktop Mockup",
//     description: "Software",
//     link: "project-details.html",
//   },
//   {
//     image: img2,
//     category: ".web .developing",
//     title: "Creative Agency",
//     description: "Template",
//     link: "project-details.html",
//   },
//   {
//     image: img3,
//     category: ".developing",
//     title: "Mobile Crypto Wallet",
//     description: "App",
//     link: "project-details.html",
//   },
//   {
//     image: img4,
//     category: ".ui",
//     title: "E-Shop Ecommerce",
//     description: "UI Kit",
//     link: "project-details.html",
//   },
//   {
//     image: img5,
//     category: ".graphic",
//     title: "Art Deco Cocktails",
//     description: "Graphic",
//     link: "project-details.html",
//   },
//   {
//     image: img6,
//     category: ".web",
//     title: "Low poly Base mesh",
//     description: "3D Design",
//     link: "project-details.html",
//   },
// ];

// function Projects() {
//   const [filter, setFilter] = useState("*");
//   const [projectHeading, setProjectHeading] = useState({});

//   useEffect(() => {
//     const getUser = async () => {
//       const project = await getHomeSection("projects");
//       setProjectHeading(project);
//     };
//     getUser();
//   }, []);

//   const handleFilterClick = (category) => {
//     setFilter(category);
//   };

//   return (
//     <section className="project-area sec-mar">
//       <div className="container">
//         <div className="title-wrap">
//           <div className="sec-title">
//             <span>Case Study</span>
//             <h2>Project</h2>
//             <p>{projectHeading.title}</p>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             <ul className="isotope-menu">
//               <li
//                 className={filter === "*" ? "active" : ""}
//                 onClick={() => handleFilterClick("*")}
//               >
//                 All
//               </li>
//               <li
//                 className={filter === ".ui" ? "active" : ""}
//                 onClick={() => handleFilterClick(".ui")}
//               >
//                 UI/UX
//               </li>
//               <li
//                 className={filter === ".web" ? "active" : ""}
//                 onClick={() => handleFilterClick(".web")}
//               >
//                 Web Design
//               </li>
//               <li
//                 className={filter === ".developing" ? "active" : ""}
//                 onClick={() => handleFilterClick(".developing")}
//               >
//                 Developing
//               </li>
//               <li
//                 className={filter === ".graphic" ? "active" : ""}
//                 onClick={() => handleFilterClick(".graphic")}
//               >
//                 Graphic Design
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="row g-4 project-items">
//           {projects
//             .filter(
//               (project) => filter === "*" || project.category.includes(filter)
//             )
//             .map((project) => (
//               <div
//                 className={`col-md-6 col-lg-4 single-item ${project.category}`}
//                 key={project.title}
//               >
//                 <div className="item-img">
//                   <a href="">
//                     <img src={project.image} alt="" />
//                   </a>
//                 </div>
//                 <div className="item-inner-cnt">
//                   <span>{project.description}</span>
//                   <h4>{project.title}</h4>
//                   <div className="view-btn">
//                     <Link href={project.link}>view details</Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// }

const Projects = () => {
  return <>
    
  </>;
};
export default Projects;
