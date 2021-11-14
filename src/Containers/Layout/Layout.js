import './Layout.css'
import NavItems from '../../Components/NavItems/NavItems'
import Topbar from "../../Components/Topbar/Topbar";
import { useState } from "react";

function Layout(props) {

const [showNavItems, setShowNavItems] = useState(false)

function menuClicked (){
	setShowNavItems(!showNavItems)
}
	return (
		<div className="Layout">
			<div className="flex ">
				<nav className={`h-screen w-screen fixed top-0 left-0 opacity-0 
					md:w-36 md:opacity-100 md:z-10 transition-opacity transform md:translate-x-0 ${showNavItems ? "opacity-100 z-10 translate-x-0 ": "opacity-0 -translate-x-full"}`}>
                   <NavItems setShowNavItems={setShowNavItems} showNavItems={showNavItems} />
                </nav>
                <Topbar showNavItems={showNavItems} menuClicked={menuClicked} />
				<main className="md:ml-40 transition-all">{props.children}</main>
			</div>

			<footer className="footer"></footer>
		</div>
	);
}

export default Layout;
