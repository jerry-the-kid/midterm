import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link className={styles.card} to={`/countries/${props.link}`}>
      <div
        className={styles["card-flags"]}
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <div className={styles["card-body"]}>
        <h3 className={styles["card-heading"]}>{props.name}</h3>
        <p>
          <b>Population:</b> {props.population}
        </p>
        <p>
          <b>Region:</b> {props.region}
        </p>
        <p>
          <b>Capital:</b> {props.capital}
        </p>
      </div>
    </Link>
  );
}

export default Card;
