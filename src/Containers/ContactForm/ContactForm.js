import { useState } from "react";

import RollText from "../../Components/RollText/RollText";
import Input from "../../Components/Input/Input";
import Backdrop from "../../Components/Backdrop/Backdrop";
import BriefNotification from "../../Components/Notification/BriefNotification";

function ContactForm() {
	const [submited, setSubmited] = useState(false);
	const [submiting, setSubmiting] = useState(false);
	const [incorrectName, setIncorrectName] = useState(true);
	const [incorrectEmail, setIncorrectEmail] = useState(true);
	const [incorrectMessage, setIncorrectMessage] = useState(false);
	const [showErrors, setShowErrors] = useState(false);
    const [notificationStatus, setNotificationStatus] = useState('')
    const [notificationMessage, setNotificationMessage] = useState('')
    const [notify, setNotify] = useState('');
    const [clearAllFields,setClearAllFields] = useState(false)

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
    

	function showNotification() {
		setNotify(true)
       const timer = setTimeout(()=>{
           setNotify(false); 
           clearTimeout(timer)
        },2700)
	}

    function clearInputFields(){
        setName(''); setEmail(''); setMessage('');
        setClearAllFields(true)
        setTimeout(()=>{
            setClearAllFields(false)
        },200)
    }

	async function handleSubmited() {
        console.log('clicked')

		setSubmited(false);
		setSubmiting(true);

		const zapierUrl = "https://hooks.zapier.com/hooks/catch/11354032/bmy2foi/";

		if (validateData()) {
			setShowErrors(false);
			try {
				const response = await fetch(zapierUrl, {
					method: "POST",
					body: JSON.stringify({ name, email, message }),
				});
				if (response.status === 200) {
					setSubmiting(false);
                    setNotificationStatus('success')
                    setNotificationMessage('Your message has been received, thank you.')
                    showNotification()
                    clearInputFields()
				} else {
					setSubmiting(false);
                    
				}
			} catch (err) {
                setSubmiting(false)
                setNotificationStatus('error')
                setNotificationMessage('Attempted to send your message but failed, please try again.')
                showNotification()
			}
		} else {
            setSubmiting(false)
            setNotificationStatus('error')
            setNotificationMessage('Enter correct details.')
            showNotification()
			setShowErrors(true);
		}
	}


	function validateData() {
		//check name
		setIncorrectName(name.length < 1);

		//check message
		setIncorrectMessage(message.length < 1);

		// check email
		setIncorrectEmail(!isValidEmail(email));

		return isValidEmail(email) && name.length > 0 && message.length > 0;
	}

	function isValidEmail(emailAddress) {
		var pattern = new RegExp(
			/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
		);
		return pattern.test(emailAddress);
	}

	function handleInputChange(event) {
		const { name, value } = event.target;
		switch (name) {
			case "name":
				setName(value);
				break;

			case "email":setEmail(value);	
			break;

			case "message":setMessage(value);
			break;

            default : console.log('Nothing good to see')
		}
	}

	return (
		<div className="contact-form my-20 flex flex-col items-center  w-full">
			<Backdrop show={submited} />
            {notify && <BriefNotification status={notificationStatus} message={notificationMessage} />}
			

			<div className=" mb-10 ml-5 text-left text-skin-button text-5xl mr-auto sm:text-7xl ">
				<RollText text="Contact Me" />
			</div>
			<div className=" flex items-center justify-center w-full ">
				<div className=" input-wrapper p-5 rounded border w-11/12 max-w-md">
					<Input
						prompt="Enter your name"
						name="name"
						inputType="text"
						handleInputChange={handleInputChange}
						isValidInput={!incorrectName}
						validateData={validateData}
						errorMessage="Name should have atleast two characters"
						showErrors={showErrors}
                        clearAllFields={clearAllFields}
					/>
					<Input
						prompt=" Enter Your email address"
						name="email"
						inputType="email"
						handleInputChange={handleInputChange}
						isValidInput={!incorrectEmail}
						validateData={validateData}
						errorMessage="Invalid email address"
						showErrors={showErrors}
                        clearAllFields={clearAllFields}
					/>
					<Input
						prompt=" Type your message"
						handleInputChange={handleInputChange}
						inputType="textArea"
						name="message"
						isValidInput={!incorrectMessage}
						validateData={validateData}
						errorMessage="Message should be at the least, a word."
						showErrors={showErrors}
                        clearAllFields={clearAllFields}
					/>
					<button
						onClick={handleSubmited}
						className="text-skin-button border border-skin-button text-base px-5 py-1 rounded m-3"
                        disabled={submiting}
					>
						{submiting? "Submitting ...": "Submit"}
					</button>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
