import React from "react";
import { useSelector } from "react-redux";

function PossiblePath() {

  const path = useSelector((state) => state.shortestPath);


  return (
    <div className="container mt-5 text-center">
      <b>{path?.path.map((p, i)=>{
        return <React.Fragment key={i}>
          {p} 
          {i < path?.path.length - 1 ? ' --> ' : ''}  
        </React.Fragment>
      })}</b>
      {
        path?.path != undefined ? 
      <p>Total Cost from {path?.start} to {path?.end}  <b>{path?.cost}</b></p> : ""

      }
      <br></br>
    </div>
  );
}

export default PossiblePath;
