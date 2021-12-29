import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import BackArrow from "../icons/BackArrow";
import styles from "./Country.module.css";
import CountryBody from "./CountryBody";
function Country() {
  const params = useParams();
  const [country, setCountry] = useState({});
  const [neighBors, setNeighbors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNeighborCountry = async function (name) {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${name}`
    );
    const data = await response.json();
    return data[0];
  };

  const fetchCountryHandler = useCallback(
    async function () {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${params.country}`
        );
        const data = await response.json();
        const obj = data[0];
        // .name.common, .tld, .population, .currencies.name, .region, .languages(obj), subregion, capital, .flags.svg
        const currencies = [];
        if (obj.currencies) {
          for (const value of Object.values(obj.currencies)) {
            currencies.push(value.name);
          }
        }

        const languages = [];
        if (obj.languages) {
          for (const value of Object.values(obj.languages)) {
            languages.push(value);
          }
        }

        const borders = obj.borders ? obj.borders : [];
        const neighbors = await Promise.all(
          borders.map(async (el) => {
            return fetchNeighborCountry(el);
          })
        );

        const neighborsTransform = neighbors.map((el) => {
          return {
            id: Math.random(),
            key: el.cca2,
            name: el.name.common,
          };
        });

        const { common } =
          obj.name.nativeName[Object.keys(obj.name.nativeName)[0]];

        const transformData = {
          name: obj.name.common,
          tld: obj.tld,
          nativeName: common,
          population: new Intl.NumberFormat().format(obj.population),
          currencies: currencies.join(", "),
          region: obj.region,
          languages: languages.join(", "),
          subregion: obj.subregion,
          borders: obj.borders,
          img: obj.flags.svg,
          capital: obj.capital,
        };
        setNeighbors(neighborsTransform);
        setCountry(transformData);
        setIsLoading(false);
      } catch (e) {
        setError(e.message);
        setIsLoading(false);
      }
    },
    [params.country]
  );

  useEffect(() => {
    fetchCountryHandler();
  }, [fetchCountryHandler]);

  return (
    <div className={styles.country}>
      <Link to={"/countries"} className={styles["country-btn"]}>
        <BackArrow />
        Back
      </Link>
      {isLoading && (
        <p style={{ fontSize: "3rem", textAlign: "center" }}>
          Data is Loading ...
        </p>
      )}
      {!isLoading && !error && (
        <CountryBody country={country} neighBors={neighBors} />
      )}
      {!isLoading && error && (
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "5rem",
            }}
          >
            404. Page Not Found
          </h1>
          <p
            style={{
              fontSize: "2rem",
            }}
          >
            Please head back to home
          </p>
        </div>
      )}
    </div>
  );
}

export default Country;
