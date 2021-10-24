import logo from "../../images/logo2.png";

function NavItems() {
	const styles = {
		top: `py-6 m-0 w-100 flex
            flex-col items-center justify-center
            bg-skin-logo
            `,
	};

	return (
		<div className="bg-skin-nav h-screen">
			<div className={styles.top + "bg"}>
				<img src={logo} alt="logo" className="w-20" />
				<h4 className="mt-4 text-skin-muted text-base">Software Engineer</h4>
			</div>
			<ul className="text-skin-muted text-lg font-normal flex flex-col items-start ml-4">
                <li>About</li>
                <li>Skills</li>
                <li>Works</li>
                <li>Education</li>
                <li>Contact</li>
            </ul>
		</div>
	);
}

export default NavItems;
