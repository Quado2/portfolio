import logo from "../../images/logo2.png";

function NavItems() {

    const styles = {
        top: `py-6 m-0 w-100 flex
            flex-col items-center justify-center
            
            `
    }

	return (
		<div className="  p-0">
			<div className={styles.top+"bg"}>
                <img  src={logo} alt="logo"
                  className="w-24"
                />
                <h4 className='mt-4 text-skin-base text-base'>Software Engineer</h4>
            </div>
            
			<ul></ul>
		</div>
	);
}

export default NavItems;
