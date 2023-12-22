import React from "react";
import css from "./CreativeAgency.module.css";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import creative from "../../Resources/creatve.avif";


const CreativeAgency = () => {
  return (
    <div className={css.Section2}>
      <div className={css.CreativeFlex}>
        <div className={css.CreativeLeft}>
          <p className={css.Heading}>About Us</p>
          <h1>Creative Agency</h1>

          <p className={css.About}>
            we’re not just a digital marketing agency; we’re architects of
            innovation, pioneers of creativity, and your steadfast partners in
            the ever-evolving digital landscape. With a passion for crafting
            compelling stories and a commitment to achieving excellence, we’re
            here to transform your business growth
          </p>

          <div className={css.CreativeButton}>
          <IoArrowForwardCircleSharp />
          <p>Read More</p>
          </div>
        </div>

        <div className={css.CreativeRight}>
            <img src={creative} alt='Creative People'/>
        </div>
      </div>

     

     
        <div className={css.numbersBox}>

          <div className={css.numbers1}>
            <div className={css.flex}>
              <h1 className={css.down}>10Cr</h1>
              <h6 className={css.up}> 2YEARS</h6>
            </div>
            <div className={css.flex}>
              <h1 className={css.down}>17000+</h1>
              <h6 className={css.up}>COMMUNITY</h6>
            </div>

            <div className={css.flex}>
              <div className={css.flex2}>
                <h1>5</h1>
                <div className={css.flex3}>
                  <p className={css.p1}>Figure</p>
                  <p className={css.p2}>Income</p>
                </div>
              </div>

              <h6>100+</h6>
            </div>
            <div className={css.flex}>
              <div className={css.flex2}>
                <h1>6</h1>
                <div className={css.flex3}>
                  <p className={css.p1}>Figure</p>
                  <p className={css.p2}>Income</p>
                </div>
              </div>

              <h6>70+</h6>
            </div>

            <div className={css.flex1}>
              <div className={css.flex2}>
                <h1>7</h1>
                <div>
                  <p className={css.p1}>Figure</p>
                  <p className={css.p2}>Income</p>
                </div>
              </div>

              <h6>10+</h6>
            </div>
          </div>
        </div>
      </div>
            
     

  );
};

export default CreativeAgency;
