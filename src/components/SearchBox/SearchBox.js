import { useState } from "react";
import { getData } from "../../services/fetchData";
import './SearchBox.css'
export const SearchBox = ({ weatherHandler }) => {
  const [destination, setDestination] = useState("Sofia");

  const query = (e) => {
    e.preventDefault();
    setDestination(e.target.value);
    console.log(e.target.value);
  };

  const search = (e) => {
    e.preventDefault();
    getData(destination).then((result) => weatherHandler(result));
    console.log("nasko");
  };
  return (
    <section className="SearchBox">
      <label className="SearchBox__label" htmlFor="search">
        Search location
      </label>
      <input
        className="SearchBox__input"
        placeholder="Search"
        id="search"
        onChange={query}
      />
      <button className="SearchBox__button" onClick={search}>
        Submit
      </button>
    </section>
  );
};
