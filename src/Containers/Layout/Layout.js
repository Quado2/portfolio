import './Layout.css'
import NavItems from '../../Components/NavItems/NavItems'
import Topbar from "../../Components/Topbar/Topbar";
import { useState } from "react";

function Layout(props) {

const [rotate, setRotate] = useState(false)
const [showNavItems, setShowNavItems] = useState(true)

function menuClicked (){

	setRotate(!rotate)
	setShowNavItems(!showNavItems)
}
	return (
		<div className="Layout">
			<div className="flex ">
				<nav className={`sidebar h-screen w-screen fixed z-10 opacity-0  md:w-36 md:opacity-1`}>
                   <NavItems />
                </nav>
                <Topbar rotate={rotate} menuClicked={menuClicked} />
				<main className="ml-40">{props.children}</main>
			</div>

			<footer className="footer"></footer>
		</div>
	);
}

export default Layout;
