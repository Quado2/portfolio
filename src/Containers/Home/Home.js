import React from 'react'
import './Home.scss'

function Home (){

    return (
        <div className='home-top  w-full '>
            <div className=' top-home-container flex flex-col justify-center items-start p-7 sm:p-16  w-full h-3/4'>
                <div className= 'first-h2 text-skin-base top-h2 sm:text-7xl lg:text-8xl'>
                    <h2 className=''>H</h2>
                    <h2>i</h2>
                    <h2> &#128526;,</h2>
                    <h2>,</h2>
                </div>
                <div className = 'text-skin-base first-h2b sm:text-7xl lg:text-8xl top-h2 h-24 sm:h-28 lg:h-32 items-end'>
                    <h2 className=''> I</h2>
                    <h2>'</h2>
                    <h2>m</h2>
                    <div className='text-skin-base glitch text-4xl sm:text-8xl lg:text-9xl flex items-end md:-pb-2  ml-4 mt-20 w-11 h-16'>
                        <span >Chikwado,</span>
                        <span aria-hidden='true'>Chikwado,</span>
                        <span aria-hidden='true'>Chikwado,</span>
                    </div>
                    
                    
                </div>
                <div className='text-skin-base third-h2 text-2xl sm:text-5xl flex font-semibold font-sans text-left mt-4'>
                    <h2>S</h2>
                    <h2>o</h2>
                    <h2>f</h2>
                    <h2>t</h2>
                    <h2>w</h2>
                    <h2>a</h2>
                    <h2>r</h2>
                    <h2>e</h2>
                    <h2>&nbsp;</h2>
                    <h2>E</h2>
                    <h2>n</h2>
                    <h2>g</h2>
                    <h2>i</h2>
                    <h2>n</h2>
                    <h2>e</h2>
                    <h2>e</h2>
                    <h2>r</h2>
                </div>
                    
                <p className='opacity-0 appear-in text-left text-base sm:text-1xl my-8 text-skin-muted ' >Full stack web developer / A very sound mind</p>
                <a href='#12' className='opacity-0 border cursor-pointer border-skin-button text-skin-button hover:text-skin-hover hover:bg-skin-button py-1.5 px-10  mt-12 mx-0 text-sm'>Contact me</a>
            </div>
        </div>
         
    )
}

export default Home;