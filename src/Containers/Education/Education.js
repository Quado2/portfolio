
import './Education.scss'
import RollText from '../../Components/RollText/RollText'
import School from '../../Components/School/School'



function Education() {

    return(
        <div className='education w-100 mx-5 mt-24'>
            <div className=' mb-10 text-left  text-skin-button text-5xl sm:text-7xl '>
                <RollText text='Education' /> 
            </div>
            <div className='p-0'>
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