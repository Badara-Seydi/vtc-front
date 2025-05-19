// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import './MobileMenu.css';

// const MobileMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { label: "Accueil", path: "/" },
//     { label: "Tarifs", path: "/tarifs" },
//     { label: "Réservation", path: "/reservation" },
//     { label: "Contact", path: "/contact" },
//     { label: "Avis", path: "/avis" },
//   ];

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div className="mobile-menu-wrapper">
//       <button className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//         <span />
//         <span />
//         <span />
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.nav
//             className="mobile-nav"
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//           >
//             <ul>
//               {menuItems.map((item, idx) => (
//                 <li key={idx}>
//                   <Link to={item.path} onClick={() => setIsOpen(false)}>
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MobileMenu;
