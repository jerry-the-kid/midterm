import React from "react";
import styles from "./Navbar.module.css";
import Hamburger from "../icons/Hamburger";
import List from "./List";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={styles.navbar}>
      <Link to="/home" className={styles["navbar__heading"]}>
        Countries Wiki
      </Link>
      <Hamburger onClick={props.onOpen} />
      <List />
    </nav>
  );
}

export default Navbar;
