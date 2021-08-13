import { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {changeTheme, changewhite} from './redux/actions' //no need to  include index. it will pick it by default


import './App.css';
import Preloader from './Components/Preloader/Preloader'
import Home from './Containers/Home/Home'

function App() {

  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch();


  const [loaded, setLoaded] = useState(false)

  useEffect( () => {

    const timer = setTimeout(() => {
      console.log("Time out done")
      setLoaded(true)
    }, 3200);
    return () => clearTimeout(timer)
  }, [])

 

  return (
  <div className={`App ${theme}`}>
         {!loaded?
        <Preloader /> 
        : 
        <div>
          <Home />
          <div style={{color: 'white'}}> 
            <button className="border" onClick={()=> dispatch(changeTheme("theme-purple"))}>Make Purple</button>
            <button className="border" onClick={() => dispatch(changeTheme("theme-white"))}> Make White</button>
            Theme Chosen = {theme}
          </div>
        </div>
        
        
        } 
         
    </div>
  );
}

export default App;
