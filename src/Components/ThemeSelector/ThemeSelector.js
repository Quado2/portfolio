//will come back to make this a reusable component

import { useDispatch} from 'react-redux';
import {changeTheme} from '../../redux/actions'
import { useState } from "react";


import change_theme from "../../images/change_theme.svg"
import BackdropLight from '../BackdropLight/BackdropLight'

export default function ThemeSelector() {

    const dispatch = useDispatch();
    const [selectedTheme, setSelectedTheme] = useState("Green-dim")
    const [showThemes, setShowThemes] = useState(false)
        

    function handleChangeTheme(themeName){
        dispatch(changeTheme(themeName))
         setSelectedTheme(themeName)
    }

    function handleBackdropClicked(){
        setShowThemes(!showThemes)
    }

    

    return (
        <div className='Topbar mx-2'>
            <BackdropLight show={showThemes} backdropClicked={handleBackdropClicked}  />
            <div  className ="theme z-10">
                <div onClick={() => setShowThemes(!showThemes)}
                    className='selected-theme flex items-center justify-center border border-skin-muted hover:border-skin-button rounded cursor-pointer bg-skin-nav'>
                    <img className='m-1 w-7' src={change_theme} alt='change theme' />
                    <h3 className='text-skin-button text-base mx-1'>{selectedTheme}</h3>
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
