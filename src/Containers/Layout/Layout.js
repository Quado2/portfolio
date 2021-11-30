import './Layout.css'
import NavItems from '../../Components/NavItems/NavItems'
import Topbar from "../../Components/Topbar/Topbar";
import Footer from '../../Components/Footer/Footer';

import { useState } from "react";


function Layout(props) {

const [showNavItems, setShowNavItems] = useState(false)

function menuClicked (){
	setShowNavItems(!showNavItems)
}
	return (
		<div className="Layout w-full">
			<div className="flex ">
				<nav className={`h-screen w-screen fixed top-0 left-0 opacity-0 
					md:w-36 md:opacity-100 md:z-10 transition-opacity transform md:translate-x-0 ${showNavItems ? "opacity-100 z-10 translate-x-0 ": "opacity-0 -translate-x-full"}`}>
                   <NavItems setShowNavItems={setShowNavItems} showNavItems={showNavItems} />
                </nav>
				<div className='md:ml-36 flex flex-col'>
					<Topbar showNavItems={showNavItems} menuClicked={menuClicked} />
					<main className="transition-all w-full ">{props.children}</main>
					<footer className="border  h-44"><Footer /> </footer>
				</div>
                
			</div>

			
		</div>
	);
}

export default Layout;
