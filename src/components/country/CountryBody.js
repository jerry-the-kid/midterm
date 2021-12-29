import React from "react";
import styles from "./Country.module.css";
import { Link } from "react-router-dom";

function Country_body(props) {
  const { country } = props;
  return (
    <div className={styles["country-body"]}>
      <div
        className={styles["country-body__image"]}
        style={{ backgroundImage: `url(${country.img})` }}
      ></div>
      <div className={styles["country-body__info"]}>
        <h2>{country.name}</h2>
        <div className={styles["country-body__sub-info"]}>
          <p>
            <b>Native Name: </b> {country.nativeName}
          </p>
          <p>
            <b>Top Level Domain: </b>
            {country.tld}
          </p>
          <p>
            <b>Population: </b>
            {country.population}
          </p>
          <p>
            <b>Currencies: </b>
            {country.currencies}
          </p>
          <p>
            <b>Region: </b>
            {country.region}
          </p>
          <p>
            <b>Languages:</b> {country.languages}
          </p>
          <p className={styles.oneFr}>
            <b>Subregion:</b> {country.subregion}
          </p>
          <p className={styles.oneFr}>
            <b>Capital: </b>
            {country.capital}
          </p>
          <div className={styles["country-body__borders"]}>
            {props.neighBors.length > 0 && <b>Border Countries: </b>}
            {props.neighBors.map((el) => {
              return (
                <Link
                  className={styles["neighbor-link"]}
                  key={el.id}
                  to={`/countries/${el.key}`}
                >
                  {el.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country_body;
