import { useState } from 'react'

import './ContactForm.scss'
import RollText from '../../Components/RollText/RollText'
import Input from '../../Components/Input/Input'
import Backdrop from '../../Components/Backdrop/Backdrop'
import Notification from '../../Components/Notification/Notification'

function ContactForm() {

    const [submited, setSubmited] = useState(false)

    function handleOk(){
        window.location.reload();
    }

    function handleSubmited(){
        setSubmited(true)
    }


    return(
        <div className='contact-form w-100 m-5'>
            <Backdrop show={submited} />
            {submited?
                <Notification 
                title='Form Submited'
                handleOkClicked = {handleOk}
                    message='Thanks, your form has been received.'/> 
             :
             null}
            <div className=' mb-10 text-left  text-skin-button text-5xl sm:text-7xl '>
                <RollText text='Contact Me' /> 
            </div>
            <div className=' ml-1  input-wrapper pl-7 rounded border'>
                <Input prompt ='Enter your name'

                />
                <Input prompt =' Enter Your email address'
                
                />
                <Input prompt =' Type your message'
                        inputType='textArea'
                />
                <button onClick={handleSubmited} className='text-skin-button border border-skin-button text-base px-5 py-1 rounded m-3'>Submit</button>
            </div>
        </div>
    )
}

export default ContactForm