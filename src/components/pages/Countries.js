import { Fragment, useState, useEffect } from "react";
import SearchBox from "../countries/SearchBox";
import CardList from "../countries/CardList";

function Countries(props) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    setFilterData(props.data);
    setData(props.data);
  }, [props.data]);

  const filterByRegion = function (region) {
    if (region === "All") {
      setFilterData(props.data);
      setData(props.data);
    } else {
      const dataByRegion = props.data.filter((el) => el.region === region);
      setFilterData(dataByRegion);
      setData(dataByRegion);
    }
  };

  const filterHandler = function (filterWord) {
    setData(
      filterData.filter((el) =>
        el.name.toLowerCase().includes(filterWord.toLowerCase())
      )
    );
  };

  return (
    <Fragment>
      <SearchBox
        data={data}
        filter={filterHandler}
        filterByRegion={filterByRegion}
      ></SearchBox>
      <CardList data={data} isLoading={props.isLoading} />
    </Fragment>
  );
}

export default Countries;
