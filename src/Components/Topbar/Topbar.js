import ThemeSelector from '../ThemeSelector/ThemeSelector'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import  { useState, useEffect } from 'react';
import { debounce } from '../../utils/helpers'


export default function Topbar({showNavItems,menuClicked}){

    const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  

    return(
        <div className = {`fixed flex transition-all duration-300 ${visible ? 'top-4':'-top-10'}  right-4 z-20`}>
            <ThemeSelector setInvisible={!showNavItems} />
            <HamburgerMenu rotate={showNavItems} menuClicked={menuClicked} />
        </div>
    )
}





