import React from "react";
import styles from "./styles.module.css";

const LoadingComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.spinnerWrapper}>
          <div className={styles.spinnerOuter}></div>
          <div className={styles.spinnerInner}></div>
        </div>
        <div className={styles.textWrapper}>
          <h5 className={styles.title}>Loading</h5>
        </div>
      </div>
    </div>
  );
};

export default LoadingComp;
