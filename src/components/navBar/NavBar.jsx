import React from "react";
import Logo from "../../assets/Logo";

import { CgMenuGridO } from "react-icons/cg";
import "./navbar.scss";

const NavBar = () => {
   return (
      <nav>
         <div className="container_logo">
            <Logo />
         </div>
         <div className="container_menu">
            <CgMenuGridO />
         </div>
      </nav>
   );
};

export default NavBar;
