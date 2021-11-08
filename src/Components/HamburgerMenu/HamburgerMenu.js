import React from 'react';

import './HamburgerMenu.css';



const hamburgerMenu = (props) => {

    const styleTop = props.rotate? 'RotateTop': null;
    const styleBottom = props.rotate? 'RotateBottom': null;
    const styleMiddle = props.rotate? 'RotateMiddle': null
    const styleOuter = props.move? ['HamburgerOuter', ]: ['HamburgerOuter'];

    return(
        <div className={styleOuter.join(' ')} onClick={props.menuClicked}>
            <div className ={'HamburgerMenu'}>
                <div className={styleTop}></div>
                <div className={styleMiddle+' middle'}></div>
                <div className={styleBottom}></div>
            </div>
        </div>
        
    )

}

export default hamburgerMenu;