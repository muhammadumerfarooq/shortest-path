import Jsondata from '../data/data.json';
import Locations from '../service/service';
var locations = new Locations();

Jsondata.forEach(loc =>{
    // console.log("logging ... "+ Object.keys(locations.adjacentMatrix))
    locations.addDistance(loc.start, loc.end, loc.cost)
})
const initialState = {
    locations: locations,
    adjacentMatrix: locations.adjacentMatrix
};
// console.log("locations "+ locations.adjacentMatrix)
export const shortestPathReducer = (state = initialState, action) => {
    // console.log("state "+ Object.keys(locations.adjacentMatrix))
    switch (action.type) {
        case 'GET_SHORTEST_PATH':
            return {
                ...state,
                shortestPath: state.locations.findShortestPath(action.payload.start, action.payload.end)
            }
        default:
            // console.log("before "+Object.keys(locations.adjacentMatrix))
            return state
    }
};