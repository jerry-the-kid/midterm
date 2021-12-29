import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./List.module.css";

function List(props) {
  return (
    <ul className={styles["navbar__list"]}>
      <li className={styles["navbar__item"]}>
        <NavLink
          onClick={props.onClose}
          className={styles["navbar__link"]}
          activeClassName={styles.active}
          to="/home"
        >
          Home
        </NavLink>
      </li>
      <li className={styles["navbar__item"]}>
        <NavLink
          onClick={props.onClose}
          className={styles["navbar__link"]}
          activeClassName={styles.active}
          to="/countries"
        >
          Countries
        </NavLink>
      </li>
      <li className={styles["navbar__item"]}>
        <NavLink
          onClick={props.onClose}
          className={styles["navbar__link"]}
          activeClassName={styles.active}
          to="/about"
        >
          About us
        </NavLink>
      </li>
    </ul>
  );
}

export default List;
