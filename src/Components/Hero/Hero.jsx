import React from "react";
import css from "./Hero.module.css";
import rocket from "../../Resources/rocket.avif";
import { GoPlay } from "react-icons/go";
import logo1 from "../../Resources/logo-4.png";
import logo2 from "../../Resources/logo-5.png";
import logo3 from "../../Resources/logo-6.png";
import logo4 from "../../Resources/logo-7.png";
import logo5 from "../../Resources/logo-9.png";

const Hero = () => {
  return (
    <div className={css.Section1}>
      <div className={css.HeroFlex}>
        <div className={css.HeroLeft}>
          <img src={rocket} alt="Rocket" />
        </div>

        <div className={css.HeroRight}>
          <p>Landing Page Design &</p>
          <h1>
            Performance <span>Marketing</span> Company Based in India{" "}
          </h1>

          <div className={css.buttons}>
            <button>Talk to us</button>
            <div className={css.learn}>
              <GoPlay />
              <p>Learn More</p>
            </div>
          </div>
        </div>
      </div>

      <div className={css.Featured}>
        <div className={css.FeaturedLogo}>
          <img src={logo1} alt="Times of India" />
        </div>

        <div className={css.FeaturedLogo}>
          <img src={logo2} alt="Deccan Chronicle" />
        </div>

        <div className={css.FeaturedLogo}>
          <img src={logo3} alt="Forbes" />
        </div>

        <div className={css.FeaturedLogo}>
          <img src={logo4} alt="India Today" />
        </div>

        <div className={css.FeaturedLogo}>
          <img src={logo5} alt="The Week" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
