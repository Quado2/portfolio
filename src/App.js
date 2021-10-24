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
import Education from './Containers/Education/Education'
import Layout from './Containers/Layout/Layout';

function App() {

  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch();


  const [loaded, setLoaded] = useState(false)

  useEffect( () => {

    // tried
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 3200);
    return () => clearTimeout(timer)
  }, [])
 

  return (
  <div className={`App h-100 ${theme}`}>
        {!loaded?
        <Preloader /> 
        : 
        <Layout>
          <div className='app-wrapper h-100'>
            <div className='theme flex items-start' style={{color: 'white'}}> 
              <button className="purple-button" onClick={()=> dispatch(changeTheme("theme-purple"))}>Purple theme</button>
              <button className="white-button" onClick={() => dispatch(changeTheme("theme-white"))}>White theme</button>
            </div>
            <Home />
            <About />
            <Portfolio />
            <Experience />
            <Education />
            <ContactForm />
          </div>
        </Layout>
        
        }  
          
    </div>
  );
}

export default App;
