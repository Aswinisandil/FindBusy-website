import React from "react";
import css from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../Resources/findbusy_snailcar_ logo.avif";

const Navbar = () => {
  return (
    <>
      <div className={css.navbar}>
        <div className={css.obj1}>
          <NavLink to={"/"}>
            <img src={logo} alt="FindBusy Logo" />
          </NavLink>
        </div>

        <div className={css.obj2}>
          <ul className={css.meet}>
            <li>Home</li>
            <li>Services</li>
            <li>Clients</li>
            <li>
              <NavLink to={"/hiring"}>Hiring</NavLink>
            </li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={css.obj3}>
          <div className={css.signUp}>
            <p>Sign Up</p>
          </div>

          <GiHamburgerMenu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
