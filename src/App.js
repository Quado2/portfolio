import { useEffect, useState } from 'react';
import './App.css';

import Preloader from './Components/Preloader/Preloader'
import Home from './Containers/Home/Home'

function App() {

  const [loaded, setLoaded] = useState(false)

  useEffect( () => {

    const timer = setTimeout(() => {
      console.log("Time out done")
      setLoaded(true)
    }, 3200);
    return () => clearTimeout(timer)
  }, [])

 

  return (
    <div className="App">
         {/* {!loaded?
        <Preloader /> 
        :  */}
        <Home />
      {/* } 
         */}
    </div>
  );
}

export default App;
