import { useState, Fragment, useCallback, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import AboutUs from "./components/pages/AboutUs";
import Home from "./components/pages/Home";
import Countries from "./components/pages/Countries";
import ListModal from "./components/nav/ListModal";
import Country from "./components/country/Country";
import NotFound from "./components/pages/NotFound";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchCountriesHandler = useCallback(async function () {
    setIsLoading(true);
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    const transformCountryData = data.map((obj) => {
      return {
        id: obj.cca2,
        capital: obj.capital,
        img: obj.flags.svg,
        population: new Intl.NumberFormat().format(obj.population),
        region: obj.region,
        name: obj.name.common,
      };
    });
    setIsLoading(false);
    setCountries(transformCountryData);
  }, []);

  useEffect(() => {
    fetchCountriesHandler();
  }, [fetchCountriesHandler]);

  const closeModalHandler = function () {
    setIsModalOpen(false);
  };

  const openModalHandler = function () {
    setIsModalOpen(true);
  };

  return (
    <Fragment>
      {isModalOpen && <ListModal onClose={closeModalHandler} />}
      <header>
        <Navbar onOpen={openModalHandler} />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/countries" exact>
            <Countries data={countries} isLoading={isLoading} />
          </Route>
          <Route path="/countries/:country">
            <Country />
          </Route>
          <Route path="/about" exact>
            <AboutUs />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
