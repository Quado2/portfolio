import facebook from "../../images/facebook";
import twitter from "../../images/twitter";
import linkedin from "../../images/linkedin";
import github from "../../images/github";
import c from '../../images/c'

import './footer.css'


export default function Footer(){
    return(
        <div className='footer text-skin-muted h-full flex items-end justify-center'>

            <div className="footer-inner border-t border-skin-muted flex flex-col md:flex-row items-center justify-center h-1/2 w-11/12">
                <div className=' m-0  w-full md:w-1/2 flex items-center justify-center'> 
                    {c} <h3 className='text-base md:text-lg'>Chikwado Emmanuel - {new Date().getFullYear()}</h3>
                </div>
                <ul className={` m-0 socials w-full md:w-1/2 flex justify-center text-skin-muted`}>
                <a href='https://github.com/Quado2' target="_blank" rel="noopener noreferrer" ><li>{github} </li> </a>
                <a href='https://www.linkedin.com/in/chikwadonuel/' target="_blank" rel="noopener noreferrer"> <li>{linkedin} </li></a>
                <a href='https://www.twitter.com/quado_' target="_blank" rel="noopener noreferrer"> <li>{twitter} </li></a>
                <a href='https://www.facebook.com/israel.eze.71' target="_blank" rel="noopener noreferrer"> <li>{facebook} </li></a>
                </ul>
            </div>
              
        </div>
    )
}