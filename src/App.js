import { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {changeTheme} from './redux/actions' //no need to  include index. it will pick it by default


import './App.css';
import Preloader from './Components/Preloader/Preloader'
import Home from './Containers/Home/Home'
import Portfolio from './Containers/Portfolio/Portfolio'
import About from './Containers/About/About'
import Experience from './Containers/Experience/Experience';
import ContactForm from './Containers/ContactForm/ContactForm';
import zuriImage from './images/zuri_logo.png'

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
  <div className={`App h-100 ${theme}`}>
         {!loaded?
        <Preloader /> 
        :
        <div className='app-wrapper h-100'>
          <div className='theme flex items-start' style={{color: 'white'}}> 
            <img className='border w-14 mt-4 ml-3 mr-auto' src ={zuriImage} alt='zuri logo' />
            <button className="purple-button" onClick={()=> dispatch(changeTheme("theme-purple"))}>Purple theme</button>
            <button className="white-button" onClick={() => dispatch(changeTheme("theme-white"))}>White theme</button>
          </div>
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <ContactForm />
        </div>
        }  
          
    </div>
  );
}

export default App;
