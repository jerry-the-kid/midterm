import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles["text-box"]}>
        <h1>Where in the world ?</h1>
        <p>
          The Countries Wiki is a work in progress on establishing a
          geographical and political gazetteer over the Countries of the World.
          The aim is to include various geopolitical entities varying in size
          and importance from empires to sovereign states and dependencies,
          including their subdivisions. It will be concerned with both formerly
          existing, as well as extant, political entities effectively
          establishing a time line of geopolitical change.
        </p>
        <Link to="/countries">Learn more</Link>
        <Link to="/about">About us</Link>
      </div>
    </section>
  );
}
export default Home;
