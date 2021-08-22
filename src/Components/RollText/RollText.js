import { useEffect, useState } from 'react'
import './RollText.scss'
 
function useOnVisible(options) {
    const [ref, setRef] = useState(false)
    const [visible, setVisible] = useState(false)
    useEffect(()=>{

        const observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                setVisible(true)
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

    return [setRef, visible]
}

function RollText(props){
    const options = {threshold:1,
                     rootMargin: '0px 0px -100px 0px'}
    const [setRef, visible] = useOnVisible(options)


    return(
        <div ref={setRef} className='roll-text' disabled>
            {
            visible?
            props.text.split('').map((letter,i) => {
                return letter===' ' ? <h2 className='text-skin-button' key={i} disabled>&nbsp;</h2> : <h2 key={i} disabled>{letter}</h2>
            })
            :
            null
        }
            
        </div>
    )
}

export default RollText