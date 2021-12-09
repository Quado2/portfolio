
import './Education.scss'
import RollText from '../../Components/RollText/RollText'
import School from '../../Components/School/School'
import {useEffect} from 'react'


function Education() {

    useEffect(()=>{window.scrollTo(0, 0)},[])

    return(
        <div className='education  mx-5 mt-20'>
            <div className='mb-10 text-left  text-skin-button text-5xl sm:text-7xl '>
                <RollText text='Education' /> 
            </div>
            <div className='pb-4'>
                <School dept='B.Eng Electronic and Computer Engineering'
                      school='Nnamdi Azikiwe University,Awka'
                      period='September 2012 - August 2017'
                      grade='First Class'
                      awards='Best Graduating Student, 2016/2017'
                      role='Association President'
                      courses='Took courses in Software Engineering, Assembly Language Programming, System Programming etc '
                      
                      />
                <School  dept='M.Eng Computer and Control Systems Engineering'
                      school='Nnamdi Azikiwe University,Awka'
                      period='November 2019 - present'
                      grade="Distinction in Jesus name."/>
                
            </div>
        </div>
    )
}

export default Education