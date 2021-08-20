import './Work.scss'


function Work (props){

    const {jd,company, period, role} = props

    return(
        <div className='work w-100'>
           <div className=' w-100 flex '>
               <div className= ' outer-ball bg-skin-button w-7 h-7 rounded-3xl flex justify-center items-center'>
                    <div className='inner-ball w-5 h-5 bg-skin-base rounded-3xl'></div>
                </div> 
                <h3 className=' pl-1 text-skin-base w-100 text-left '>
                    {role}
                    <span className='text-skin-muted'> {'at '+company} </span>
                </h3>
           </div>
           
            <div className='details mb-10 text-base text-skin-muted text-left
                     mx-4  px-7'>
                <h4 className='pt-7'>{period}</h4>
                <p className =' mt-2 pb-5 '>{jd}</p>
            </div>
        </div>
    )
}


export default Work