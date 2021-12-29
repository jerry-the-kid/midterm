import React from "react";
import Card from "./Card";
import styles from "./CardList.module.css";

function CardList(props) {
  const listCountries = props.data.map((el) => (
    <Card
      key={el.id}
      name={el.name}
      img={el.img}
      population={el.population}
      region={el.region}
      capital={el.capital}
      link={el.id}
    />
  ));

  const isLoading = props.isLoading;

  return (
    <div className={styles["card-list"]}>
      {!isLoading && listCountries}
      {isLoading && <p style={{ fontSize: "2.5rem" }}>Loading data...</p>}
    </div>
  );
}

export default CardList;
