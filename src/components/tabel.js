import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function Tabel(props) {
  const state = useSelector((state) => state);
  const locationNames = Object.keys(state.adjacentMatrix)
  const [locations, setLocations] = useState([]);
  const [minimumCost, setMinimumCost] = useState(Number.MAX_SAFE_INTEGER);
  const [maximunCost, setMaximumCost] = useState(Number.MIN_SAFE_INTEGER);

  useEffect(() => {
    var locs = []
    var min = minimumCost
    var max = maximunCost
    locationNames.forEach(name => {
      state.adjacentMatrix[name].forEach(loc => {
        locs.push({ 'start': loc.source, 'end': loc.destination, 'cost': loc.weight })
        if (min > loc.weight) {
          min = loc.weight
        }
        if (max < loc.weight) {
          max = loc.weight
        }
      })
    });
    setLocations(locs)
    setMinimumCost(min)
    setMaximumCost(max)
  }, [])
  

  const getClass = (cost) => {
    if (cost == minimumCost) {
      return "table-success"
    } else if (cost == maximunCost) {
      return "table-danger"
    } else {
      return "table-primary"
    }
  }

  const getLocations = () => {
    return locations.map((loc, index) => {
      return <React.Fragment key={index}>
        <tr className={getClass(loc.cost)}>
        
          <>
            <th scope="row">#{index}</th>
            <td>{loc.start}</td>
            <td>{loc.end}</td>
            <td>{loc.cost}</td>
          </>
        </tr>
      </React.Fragment>
    })
  }
  return (
    <table className="table border">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Start</th>
          <th scope="col">End</th>
          <th scope="col">Cost</th>
        </tr>
      </thead>
      <tbody>
        {
          getLocations()
        }
      </tbody>
    </table>
  );
}

export default Tabel;
