
import RollText from '../../Components/RollText/RollText'
import Work from '../../Components/Work/Work'
function Experience() {

    return(
        <div className='experience mx-5 mt-16'>
            <div className=' mb-10 text-left  text-skin-button text-5xl sm:text-7xl '>
                <RollText text='Experience' /> 
            </div>
            <div className='pb-4 h-full'>
                <Work role='Frontend Developer Intern'
                      company='HNGi8/Zuri Internship'
                      period='August 2021 - present'
                      jd="Exposed to various professional front end tool. Collaborated with fellow interns under leadership of industrial experts. Solved Nigeria's Economic problems. "
                      />
                <Work  role='Full Stack Developer'
                      company='Paradiso Technologies Limited'
                      period='July 2019 - present'
                      jd="Built the company's web app where clients and potential clients can view and request the various products. Built the dashboard for managing contents on the webapp."/>
                <Work  role='Technical Assitant and Developer'
                      company='ICT unit, FUTO'
                      period='May 2018 - March 2019'
                      jd="Asiisted the lead programmer with software maintenance and upgrade. Trained colleagues on soft development stacks"/>
            </div>
        </div>
    )
}

export default Experience