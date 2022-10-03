/* https://getbootstrap.com/docs/5.2/customize/overview/ */

import { useEffect, useState } from 'react';
import Tabel from './components/tabel';
import Jsondata from './data/data.json';
import Search from './components/search';
import PossiblePath from './components/possiblepath';
import Image from './components/Image';
import { Provider } from "react-redux";
import store from "./store";

function App() {

  const [Data, setData] = useState([]);

  /* Load init Data */
  // useEffect(() => {
  //   setData(Jsondata)
  // }, [])

  return (
    <Provider store={store}>
      <div className="container mt-5">
        <Image />
        <Tabel data={Data} />
        <Search />
        <PossiblePath />
      </div>
    </Provider>
  );
}

export default App;
