import {useState} from  'react';
import { getData } from '../../services/fetchData';


export const SearchBox = ({weatherHandler}) =>{
    const [destination, setDestination] =useState('Sofia');

    const query = (e) =>{
        e.preventDefault();
        setDestination(e.target.value);
        console.log(e.target.value)
    }

   
    const search = (e) =>{
        e.preventDefault();
        getData(destination).then(result=>weatherHandler(result))
        console.log('nasko')
    }
    return(
        <>
        <label htmlFor='search'>This is searchbox</label>
        <input
        placeholder= 'Search'
        id='search'
        onChange={query}
        />
        <button  onClick={search}>Submit</button>
        </>
        
    
    )
}