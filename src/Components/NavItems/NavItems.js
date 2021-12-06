import {NavLink} from 'react-router-dom'

import logo from "../../images/logo2.png";
import './NavItems.css'
import './NavItems.scss'
import facebook from "../../images/facebook";
import twitter from "../../images/twitter";
import linkedin from "../../images/linkedin";
import github from "../../images/github";




function NavItems({showNavItems, setShowNavItems}) {
	const styles = {
		top: `py-6 m-0 w-100 flex flex-col items-center justify-center
            bg-skin-logo mb-4`,
        
	};

	return (
		<div className="NavItems bg-skin-nav h-screen">
			<NavLink to='/' onClick={() => setShowNavItems(false)}>
                <div className={`cursor-pointer ${styles.top} ${showNavItems ? "smooth-in-logo":""}`}>
                    <img src={logo} alt="logo" className="w-20" />
                    <h4 className="mt-2 text-skin-muted text-l">Chikwado</h4>
                    <h4 className="mt-1 text-skin-muted text-base">Software Engineer</h4>
                </div>
            </NavLink>
            
			<ul className={`navs text-skin-muted text-lg font-normal flex flex-col items-start ${showNavItems ? "erase animate-in":"" }`}>
                <NavLink onClick={() => setShowNavItems(false)} to="/about-me" className="nav-item" activeClassName="text-skin-button">
                   <li>About</li>
                </NavLink>
                <NavLink onClick={() => setShowNavItems(false)} to="/experience" className="nav-item" activeClassName="text-skin-button">
                    <li>Experience</li>
                </NavLink>
                <NavLink onClick={() => setShowNavItems(false)} to="portfolio" className="nav-item" activeClassName="text-skin-button">
                    <li>Works</li>
                </NavLink>
                <NavLink onClick={() => setShowNavItems(false)} to="education" className="nav-item" activeClassName="text-skin-button">
                    <li>Education</li>
                </NavLink>
                <NavLink onClick={() => setShowNavItems(false)} to="contact-me" className="nav-item" activeClassName="text-skin-button">
                    <li>Contact</li> 
                </NavLink>
                
            </ul>
            <ul className={`socials mt-4 flex w-100 justify-center ${showNavItems ? " erase animate-in-socials":"" } `}>
                <a href='https://github.com/Quado2' target="_blank" rel="noopener noreferrer" ><li>{github} </li> </a>
                <a href='https://www.linkedin.com/in/chikwadonuel/' target="_blank" rel="noopener noreferrer"> <li>{linkedin} </li></a>
                <a href='https://www.twitter.com/quado_' target="_blank" rel="noopener noreferrer"> <li>{twitter} </li></a>
                <a href='https://www.facebook.com/israel.eze.71' target="_blank" rel="noopener noreferrer"> <li>{facebook} </li></a>
            </ul>
		</div>
	);
}

export default NavItems;
