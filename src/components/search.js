import { useState } from "react";
import { useDispatch } from "react-redux";
import { getShortestPath } from "../actions/action";

function Search() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="container mt-5 bg-light p-5">
      <div className="row">
    <div className="col mt-1">
    <input className="form-control form-control-sm" type="text" placeholder="Start" aria-label=".form-control-sm example" value={start} onChange={(e)=> setStart(e.target.value)}/>
    </div>
    <div className="col mt-1">
    <input className="form-control form-control-sm" type="text" placeholder="End" aria-label=".form-control-sm example" value={end} onChange={(e) => setEnd(e.target.value)} />
    </div>
    <div className="col">
      <button type="button" className="btn btn-secondary w-25" onClick={()=> {dispatch(getShortestPath({'start': start, 'end': end}))}}>Find </button>
    </div>
  </div>
    </div>
  );
}

export default Search;
