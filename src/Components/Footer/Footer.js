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
                    <li>{github} </li>
                    <li>{linkedin} </li>
                    <li>{twitter} </li>
                    <li>{facebook} </li>
                </ul>
            </div>
              
        </div>
    )
}