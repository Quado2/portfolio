import './Layout.css'
import NavItems from '../../Components/NavItems/NavItems'
import Topbar from "../../Components/Topbar/Topbar";
import { useState } from "react";

function Layout(props) {

const [rotate, setRotate] = useState(false)
const [showNavItems, setShowNavItems] = useState(false)

function menuClicked (){

	setRotate(!rotate)
	setShowNavItems(!showNavItems)
}
	return (
		<div className="Layout">
			<div className="flex ">
				<nav className={`h-screen w-screen fixed top-0 left-0 opacity-0 
					md:w-36 md:opacity-100 md:z-10 transition-all ${showNavItems ? "opacity-100 z-10": "opacity-0 z-0"}`}>
                   <NavItems />
                </nav>
                <Topbar rotate={rotate} menuClicked={menuClicked} />
				<main className="md:ml-40 transition-all">{props.children}</main>
			</div>

			<footer className="footer"></footer>
		</div>
	);
}

export default Layout;
