import logo from "../../images/logo2.png";
import './NavItems.css'
import './NavItems.scss'

import facebook from "../../images/facebook";
import twitter from "../../images/twitter";
import linkedin from "../../images/linkedin";
import github from "../../images/github";




function NavItems({showNavItems}) {
	const styles = {
		top: `py-6 m-0 w-100 flex flex-col items-center justify-center
            bg-skin-logo mb-4`,
        
	};

	return (
		<div className="NavItems bg-skin-nav h-screen">
			<div className={`${styles.top} ${showNavItems ? "smooth-in-logo":""}`}>
				<img src={logo} alt="logo" className="w-20" />
				<h4 className="mt-2 text-skin-muted text-l">Chikwado</h4>
				<h4 className="mt-1 text-skin-muted text-base">Software Engineer</h4>
			</div>
			<ul className={`navs text-skin-muted text-lg font-normal flex flex-col items-start ${showNavItems ? "erase animate-in":"" }`}>
                <li>About</li>
                <li>Skills</li>
                <li>Works</li>
                <li>Education</li>
                <li>Contact</li>
            </ul>
            <ul className={`socials mt-4 flex w-100 justify-center ${showNavItems ? " erase animate-in-socials":"" } `}>
                <li>{github} </li>
                <li>{linkedin} </li>
                <li>{twitter} </li>
                <li>{facebook} </li>
            </ul>
		</div>
	);
}

export default NavItems;
