import React, { useEffect, useState } from 'react';

const TempApp=()=> {

     const[city,setCity]= useState(null);
     const[search,setSearch]=useState("kolkata");
     useEffect(()=>{
          const fetchApi =async ()=>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=45922f430c77811e8410cdb3d7070aa8`
               const response = await fetch(url);
               const resjson = await response.json();
               setCity(resjson.main);
     }
fetchApi();
     },[search]);

  return (
   <>
<div className="box">
     <div className="inputData">
          <input 
          type="search"
          className="inputField"
          value={search}
          onChange={(event)=>{
           setSearch(event.target.value);
          }}
          />
     </div>
{
   !city ? <p className='errorMsg'>No Data Found</p> : 
   <div>
   <div className="info">
          <h2 className="location">
   <i class="fa fa-street-view"></i>
       {search}
          </h2>
          <h1 className="temp">
       {city.temp} °Cel
          </h1>
          <h3 className="tempmin_max">
    Min: {city.temp_min} °Cel | Max: {city.temp_max} °Cel
          </h3>
     </div>
     <div className="wave -one"></div>
     <div className="wave -two"></div>
     <div className="wave -three"></div>
     </div>
}

</div>
   </>
  )
}

export default TempApp;