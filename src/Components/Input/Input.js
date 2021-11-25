import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faListUl, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

import './Input.scss'
import {useState, useRef, useEffect } from 'react'

function Input(props){

    const {list, prompt, name, inputType, validateData, clearAllFields,
        handleInputChange, handleContinueClicked, errorMessage, showErrors,
        focus, buttonDisabled, isValidInput} = props

    const stacks = []
    const [blured, setBlured] = useState(false)
    const [focused, setFocused] = useState(false)

    const inputRef = useRef()

    function handleCheckBoxChange(e){
        const {id, checked} = e.target
        const index = stacks.indexOf(id)

        if(checked){
            if(index === -1){
                stacks.push(id)
            }
        }
        else{
            if(index > -1){
                stacks.splice(index,1)
            }
        }

    }

    //I will handle the blur issue later

    function handleInputFocus(){
        setFocused(true); setBlured(false)
    }

    function handleBlur(){
        validateData()
        setBlured(true); setFocused(false)
    }

    let inputIcon;
    
     if(focused || (!focused && !blured)){
            inputIcon = <span className='write'><FontAwesomeIcon icon={faLongArrowAltRight} /></span>
        }
    
    if(blured){
        if(isValidInput){
            inputIcon = <span className='good'>✓</span>
        }else{
            inputIcon = <span className='bad'>✕</span>
        }
    }

   if(clearAllFields){
       if(inputRef.current){
           inputRef.current.value = ''
       }
       
   }


    return(
        <div className='our-input'>
            <label className='text-skin-muted'>{prompt}</label>
            <div className='inner-our-input'>
                <div className='inner-level-2'>
                    {inputIcon}

                    { inputType === 'selectInput' ?
                        <select onChange={handleInputChange} name={name}>
                            {list.split(',').map((item,i) => {
                                return <option key={i} value ={item}>{item}</option>
                            })}
                        </select>
                        :
                        inputType ==='checkBox'?
                        <div  ref={inputRef} className='checkbox-wrapper'>
                            {list.split(',').map((item,i)=>{
                                return (
                                    <div key={i} className ='checkbox-item'>
                                        <input  id={item} onChange={handleCheckBoxChange} type='checkbox' name = {name}/> <label>{item}</label>
                                    </div> 
                                )
                            })}
                            {(showErrors && !isValidInput) && <h6 className='text-base text-red-500 font-thin'>{errorMessage}</h6>} 
                        </div>
                        :
                        inputType ==='textArea'?
                        <div className = "w-full">
                            <textarea ref={inputRef} className='text-skin-base'
                                onInput={handleInputChange}
                                onFocus={handleInputFocus}
                                onBlur={handleBlur}
                                name={name}
                            >

                            </textarea>
                            {(showErrors && !isValidInput) && <h6 className='text-base text-red-500 font-thin'>{errorMessage}</h6>} 
                        </div> 
                        
                        :
                        <div className='w-full'>
                            <input  ref={inputRef} className='text-skin-base'
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                onBlur={handleBlur}
                                name={name} 
                                autoFocus={focus} 
                                type={inputType} />
                           {(showErrors && !isValidInput) && <h6 className='text-base text-red-500 font-thin'>{errorMessage}</h6>} 
                        </div>
                        

                    }
                    
                </div>
                {false?
                <button disabled ={buttonDisabled}
                    onClick={(e) => handleContinueClicked(e,name,stacks)}
                    >
                    Continue
                </button>
                :
                null
                }
            
            </div>
        </div>
    )
}

export default Input