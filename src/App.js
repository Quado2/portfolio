import { useEffect, useState } from 'react';
import { useSelector,} from 'react-redux';


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


  const [loaded, setLoaded] = useState(false)

  useEffect( () => {

    // tried
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 3200);
    return () => clearTimeout(timer)
  }, [])
 
console.log(theme)
  return (
  <div className={`App h-100 bg-skin-general ${theme}`}>
        {!loaded?
        <Preloader /> 
        : 
        <Layout>
          <div className='app-wrapper h-100'>
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
