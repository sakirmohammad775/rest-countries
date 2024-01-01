import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {
    const[countries,setCountries]=useState([])
    const [visitedCountries,setVisitedCountries]=useState([])
    const [visitedFlag,seVisitedFlag]=useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    }, []) 
    const handleVisitedCountry=country=>{
        const newVisitedCountries=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFlag= flag=>{
        const newVisitedFlag=[...visitedFlag,flag]
        seVisitedFlag(newVisitedFlag)
        
    }

    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div>
                <h5>Visited countries:{visitedCountries.length}</h5>
                <ul>
                    {visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)}
                </ul>
            </div>
            <div>
                <h4>visited flag:</h4>
                <ul>
                    {visitedFlag.map((flag,idx)=><img key={idx} src={flag}></img>)}
                </ul>
            </div>
            <div className="country-container">
            {
                countries.map(country=><Country key={country.cca3}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlag={handleVisitedFlag}
                 country={country} ></Country>)
            }
            </div>
        </div>
    ); 
};

export default Countries;