import { useEffect, useState } from 'react';
import { useSelector,} from 'react-redux';
import {Route, Switch,BrowserRouter as Router} from "react-router-dom"


import './App.css';
import Preloader from './Components/Preloader/Preloader'
import Portfolio from './Containers/Portfolio/Portfolio'
import About from './Containers/About/About'
import Experience from './Containers/Experience/Experience';
import ContactForm from './Containers/ContactForm/ContactForm';
import Education from './Containers/Education/Education'
import Layout from './Containers/Layout/Layout';
import Homepage from './Containers/Homepage/Homepage';

function App() {

  const theme = useSelector((state) => state.theme)
  const [loaded, setLoaded] = useState(false)

  useEffect( () => {

    // tried
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 3200);
    return () => clearTimeout(timer)
  }, [])
 
  return (
  <div className={`App h-100 bg-skin-general ${theme}`}>
        {!loaded?
        <Preloader /> 
        : 
        <Router>
          <Layout>
            <Switch>
            <div className='app-wrapper h-100'>
              <Route path="/" exact component={Homepage} />
              <Route path="/about-me" exact component={About} />
              <Route path="/portfolio" exact component={Portfolio} />
              <Route path="/experience" exact component={Experience} />
              <Route path="/education" exact component={Education} />
              <Route path="/contact-me" exact component={ContactForm} />
              </div>
            </Switch>  
          </Layout>
        </Router>
        
        
         } 
          
    </div>
  );
}

export default App;
