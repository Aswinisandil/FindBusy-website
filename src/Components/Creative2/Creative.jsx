import React from "react";
import css from "./Creative.module.css";
import website from "../../Resources/www.avif";
import marketing from "../../Resources/speaker.avif";
import branding from "../../Resources/brand.avif";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Creative = () => {
  return (
    <div className={css.Section3}>
      <h1>Creative Agency</h1>
      <p className={css.agencypara}>
        Join Us On This Journey To Unlock Your Brand's
        <br /> Full Potential In The Digital Realm
      </p>

      <div className={css.CreateFlex}>
        <div className={css.Create}>
          <div className={css.CreateImage}>
            <img src={marketing} alt="Marketing" />
          </div>

          <div className={css.CardContent}>
            <h2>MARKETING</h2>
            <p className={css.content}>Drive success through <br/>Marketing</p>
            <div className={css.LearnMore}>
              <p>Learn More</p>
              <MdOutlineArrowRightAlt />
            </div>
          </div>
        </div>

        <div className={css.Create}>
          <div className={css.CreateImage}>
            <img src={branding} alt="branding" />
          </div>

          <div className={css.CardContent}>
            <h2>BRANDING</h2>
            <p className={css.content}>Elevate Your Brand's <br/>Identity</p>
            <div className={css.LearnMore}>
              <p>Learn More</p>
              <MdOutlineArrowRightAlt />
            </div>
          </div>
        </div>

        <div className={css.Create}>
          <div className={css.CreateImage}>
            <img src={website} alt="website" />
          </div>

          <div className={css.CardContent}>
            <h2>WEBSITE</h2>
            <p className={css.content}>Building Digital  Door-<br/>ways</p>
            <div className={css.LearnMore}>
              <p>Learn More</p>
              <MdOutlineArrowRightAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creative;
