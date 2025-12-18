import React from "react";
import styles from "./styles.module.css";
import Stars from "@/svgs/stars";
import Play from "@/svgs/play";

const HeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.decorativeBlur} />
      <div className={styles.decorativeStar}>
        <Stars />
      </div>
      <div className={styles.content}>
        <div className={styles.tag}>
          <p>Online Course</p>
        </div>
        <h1 className={styles.title}>
          Sharpen Your Skills With Professional Online Courses
        </h1>
        <button className={styles.ctaButton}>
          Join Now
          <Play />
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
