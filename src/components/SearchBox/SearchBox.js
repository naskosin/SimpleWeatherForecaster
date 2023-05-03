import { useState } from "react";
import {getData, getFiveDaysData } from "../../services/fetchData";
import './SearchBox.css'
export const SearchBox = ({ weatherHandler, weatherFiveDataHandler }) => {
  const [destination, setDestination] = useState("Sofia");

  const query = (e) => {
    e.preventDefault();
    setDestination(e.target.value);
   
  };

  class Animal{
    constructor(){
      this.name = "Nasko";
    }
    getname(){
      console.log('hi')
    }
  };

 const beast = new Animal();
beast.getname();
class Beast extends Animal{
  constructor(){
    super()
    this.family = "Vasko";
  }
    getname(){
      super.getname()    }
}



const search = (e) => {
e.preventDefault();
 getData(destination).then((result) =>{ weatherHandler(result)});
 getFiveDaysData(destination).then((result) => {weatherFiveDataHandler(Object.values(result.list))}); 
    console.log(!!["search"]);
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
