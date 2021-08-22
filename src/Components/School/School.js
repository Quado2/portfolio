import './School.scss'
import {useState, useEffect} from 'react'

function useOnVisible(options) {
    const [ref, setRef] = useState(false)
    const [appearClass, setAppearClass] = useState('')
    useEffect(()=>{

        const observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                setAppearClass('appear')
            }
        }, options)

        if(ref){
            observer.observe(ref)
        }

        return() => {
            if(ref){
                observer.unobserve(ref)
            }
        }

    },[ref,options])

    return [setRef, appearClass]
}


function School (props){


    const options = {
                     rootMargin: '0px 0px -200px 0px'
                    }
    const [setRef, appearClass] = useOnVisible(options)

    const {grade, awards, dept, school, courses, period, role} = props

    return(
        <div ref={setRef} className={`${appearClass} school w-100`}>
           <div className=' w-100 flex '>
               <div className= ' outer-ball bg-skin-base w-7 h-7 rounded-3xl flex justify-center items-center'>
                    <div className='inner-ball w-5 h-5 bg-skin-button rounded-3xl'></div>
                </div> 
                <h3 className=' pl-1 text-skin-base w-100 text-left '>
                    {dept}
                    <span className='text-skin-muted'> {'at '+school} </span>
                </h3>
           </div>
           
            <div className='details mb-10 text-base text-skin-muted text-left
                     mx-4  px-7'>
                <h4 className='pt-7'>{period}</h4>
                <h4 className='pt-3'>{grade}</h4>
                {awards?  <h4 className='pt-3'>{awards}</h4>:null}
                {role? <h4 className='pt-3'>{role}</h4>: null }
                {courses? <p className =' mt-2 pb-5 '>{courses}</p>: null}
            </div>
        </div>
    )
}


export default School