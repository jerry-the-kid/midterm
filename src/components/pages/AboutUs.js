import React from "react";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles["about-us"]}>
      <div className={styles["about-us__box"]}>
        <h1>Website is a demo for SPA</h1>
        <p>Design thanks to Frontend Mentor</p>
        <p className={styles.copyright}>
          Copyright © 2021 51900737-51900754-51900740 team. All Rights Reserved.
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default AboutUs;
