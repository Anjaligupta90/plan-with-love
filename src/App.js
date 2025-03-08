import React, { useState } from "react";
import Tours from "./componants/Tours";
import data from './data';

const App = () => {

  const [tour,setTours]=useState(data) 

  function removeHandler(id)
  {
    const newTours=tour.filter(tour=>tour.id !==id);
    setTours(newTours);
  }

  if(tour.length===0)
  {
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button onClick={()=> setTours(data)} className="btn-white">
        Refresh</button>
      </div>
    );
  }

  return (
    <div className="app">
      <Tours tour={tour} removeHandler={removeHandler}></Tours>
    </div>
  )
};

export default App;
