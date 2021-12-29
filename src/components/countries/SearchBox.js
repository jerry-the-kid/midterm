import React, { useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import ChevronDown from "../icons/ChevronDown";
import styles from "./SearchBox.module.css";
import Listdrop from "./Listdrop";

function SearchBox(props) {
  const [open, setOpen] = useState(false);
  const [defaultName, setDefaultName] = useState("Filter by Region");

  const closeList = function () {
    setOpen((prevState) => {
      return !prevState;
    });
  };

  const inputHandler = function (e) {
    props.filter(e.target.value);
  };

  return (
    <div className={styles["search-box"]}>
      <div className={styles["search-box__input"]}>
        <label htmlFor="#search">
          <SearchIcon />
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search for a country"
          onChange={inputHandler}
        />
      </div>
      <div style={{ display: "flex", position: "relative" }}>
        <button className={styles["search-box__button"]} onClick={closeList}>
          {defaultName} <ChevronDown />
        </button>
        {open && (
          <Listdrop
            closeList={setOpen}
            setName={setDefaultName}
            filterByRegion={props.filterByRegion}
          />
        )}
      </div>
    </div>
  );
}

export default SearchBox;
