import { useState } from 'react';
import './country.css'

const Country = ({country,handleVisitedCountry,handleVisitedFlag}) => {
    const{name,flags,population,area,cca3}=country
    
    const [visited,setVisited]=useState(false)

    const handleVisited=()=>{
        setVisited(!visited)
    }
    
    
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color:visited? 'white':'black'}}>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>population:{population}</p>
            <p>area:{area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)} >Mark visited</button>
            <br />
            <button onClick={()=>handleVisitedFlag(country.flags.png)}>Add flag</button>
            <br />
            <button onClick={handleVisited}>{visited? 'Visited':'Going'}</button>
             {visited? 'i have visited this country':'I want to visit'}
             <hr />
             
        </div>
    );
};

export default Country;