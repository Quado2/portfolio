import "./Layout.scss";
import NavItems from '../../Components/NavItems/NavItems'

function Layout(props) {
	return (
		<div className="Layout">
			<div className="flex ">
				<nav className="w-36 h-screen fixed  border">
                   <NavItems />
                </nav>
				<main className="ml-40">{props.children}</main>
			</div>

			<footer className="footer"></footer>
		</div>
	);
}

export default Layout;
