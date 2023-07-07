// import React from "react";
// import { FaBars, FaUserAlt, FaShoppingBag, FaCommentAlt, FaThList, FaRegChartBar } from "react-icons/fa"
// import { NavLink } from "react-router-dom";
// import "./Formsidebar.css"


// function Formsidebar({ children }) {

//     const menuItem = [
//         {
//             path: "/",
//             name: "User Profile",
//             icon: <FaUserAlt />
//         },
//         {
//             path: "/residentialaddress",
//             name: " Residential Address",
//             icon: <FaRegChartBar />
//         },
//         {
//             path: "/courseschosen",
//             name: "Courses Chosen",
//             icon: <FaCommentAlt />
//         },
//         {
//             path: "/payment",
//             name: "Payment",
//             icon: <FaShoppingBag />
//         }
//     ]


//     return (
//         <div id="/dashboard-form">
//             <div className="reg-form">
//                 <div className="container-five">
//                     <div className="main-container">
//                         <div className="sidebar">
//                             <div className="welcome">
//                                 <h1>Registration Form</h1>
//                                 <p>kindly, fill the form below</p>
//                                 <hr></hr>
//                             </div>
//                             <div className="top_section">
//                                 <h1 className="logo">Logo</h1>
//                                 <div className="bars">
//                                     <FaBars />
//                                 </div>
//                             </div>
//                             {
//                                 menuItem.map((item, index) => (
//                                     <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                                         <div className="icon">{item.icon}</div>
//                                         <div className="link_text">{item.name}</div>
//                                     </NavLink>
//                                 ))
//                             }
//                         </div>
//                         <main>{children}</main>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Formsidebar