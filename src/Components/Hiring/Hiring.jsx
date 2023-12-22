import React from "react";
import css from "./Hiring.module.css";
import { NavLink, Outlet } from "react-router-dom";

const Hiring = () => {
  return (
    <div className={css.Section4}>
      <p>Join Our Team</p>
      <h1>We're Hiring </h1>

      <div>
        <div className={css.links}>
          <NavLink to="business" className={css.card}>
            <p>Business Development </p>
          </NavLink>
          <NavLink to="digital" className={css.card}>
            <p>Digital Marketer</p>
          </NavLink>
          <NavLink to="trainer" className={css.card}>
            <p>Trainer</p>
          </NavLink>
          <NavLink to="support" className={css.card}>
            <p>Customer Support</p>
          </NavLink>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Hiring;
