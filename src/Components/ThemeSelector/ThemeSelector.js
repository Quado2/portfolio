//will come back to make this a reusable component

import { useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../../redux/actions'
import { useState, } from "react";


import change_theme from "../../images/change_theme.svg"
import BackdropLight from '../BackdropLight/BackdropLight'

export default function ThemeSelector({setInvisible}) {

    const dispatch = useDispatch();
    const [selectedTheme, setSelectedTheme] = useState("Green-dim")
    const [showThemes, setShowThemes] = useState(false)

        

    function handleChangeTheme(themeName){
        window.localStorage.setItem('theme',themeName)
        dispatch(changeTheme(themeName))
         setSelectedTheme(themeName)
    }

    function handleBackdropClicked(){
        setShowThemes(!showThemes)
    }

    

    return (setInvisible && 
        <div className=' mx-2'>
            <BackdropLight show={showThemes} backdropClicked={handleBackdropClicked}  />
            <div  className ={`z-10  flex flex-col transition-all duration-500 ${showThemes ? "items-center": "items-end"} `}>
                <div onClick={() => setShowThemes(!showThemes)}
                    className='flex items-center justify-center border border-skin-muted hover:border-skin-button rounded cursor-pointer bg-skin-nav'>
                    <img className='m-1 w-7' src={change_theme} alt='ct' />
                    {showThemes && <h3 className='text-skin-button text-base mx-1 animate-appear-now'>{selectedTheme}</h3>}
                </div>
              <div 
                className={`theme-buttons transition-all duration-300 ${showThemes? 'opacity-1 translate-y-0 z-10': 'opacity-0  -translate-y-2 z-0'} transform relative w-36 bg-skin-nav text-skin-muted text-base py-2`}
                >
                <button className="purple-button hover:text-skin-button p-2 w-full" onClick={()=> handleChangeTheme("Purple-Dim")}>Purple-Dim</button>
                <button className="white-button hover:text-skin-button p-2 w-full" onClick={() => handleChangeTheme("Green-Dim")}>Green-Dim</button>
              </div>
              
            </div>
        </div>
    )


}
