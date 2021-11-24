import { useState } from "react";


import RollText from "../../Components/RollText/RollText";
import Input from "../../Components/Input/Input";
import Backdrop from "../../Components/Backdrop/Backdrop";
import Notification from "../../Components/Notification/Notification";

function ContactForm() {
	const [submited, setSubmited] = useState(false);

	function handleOk() {
		window.location.reload();
	}

	function handleSubmited() {
		setSubmited(true);
	}

	return (
		<div className="contact-form mt-20 flex flex-col items-center  w-full">
			<Backdrop show={submited} />
			{submited && (
				<Notification
					title="Form Submited"
					handleOkClicked={handleOk}
					message="Thanks, your form has been received."
				/>
			)}

            
			<div className=" mb-10 ml-5 text-left text-skin-button text-5xl mr-auto sm:text-7xl ">
				<RollText text="Contact Me" />
			</div>
			<div className=' flex items-center justify-center w-full ' >
				<div className=" input-wrapper p-5 rounded border w-11/12 max-w-md">
					<Input prompt="Enter your name" />
					<Input prompt=" Enter Your email address" />
					<Input prompt=" Type your message" inputType="textArea" />
					<button
						onClick={handleSubmited}
						className="text-skin-button border border-skin-button text-base px-5 py-1 rounded m-3"
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
