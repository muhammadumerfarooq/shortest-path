const getShortestPath = (payload) => {
    return {
      type: 'GET_SHORTEST_PATH',
      payload: payload
    };
  };
  
  
  export { getShortestPath };