import './Portfolio.css'
import RollText from '../../Components/RollText/RollText'
import Project from '../../Components/Project/Project'
import useOnVisible from '../../hooks/useOnVisible'

function Portfolio () {



	const options = {
		rootMargin: '0px 0px -200px 0px'
	   }
	const [setRef, appearClass] = useOnVisible(options)

    return(
        <div className={` portfolio-wrapper h-100 mx-6 mt-24 text-5xl sm:text-7xl text-skin-button`}>
            <RollText text='My Portfolio' className='text-7xl' />
            <p ref={setRef} className={` ${appearClass} --removeNow mt-5 text-base text-left text-skin-muted`}> 
                A small sample of works I've done in the past. 
                This is just but a tip of what I'm
                capable of. 
            </p>
            <div className='projects mt-10 w-100 h-100 flex 
                    justify-center items-center flex-wrap '>
                <Project title='Paradiso Technologies' 
                        description='Web application built for Paradiso Technologies Limited, a
                                     laser and router service company in Nigeria'
                        stacks='React, Node js, Docker, Mysql'
                        pageLink='https://www.paradisotechs.com/'
                        githubLink='https://github.com/Quado2/paradiso'/>


                <Project title='Imdb Search' 
                        description='You can search for movies, Nominate them and have them cached in your system.'
                        stacks='React'
                        pageLink='https://shopify-challenge-eze.netlify.app/'
                        githubLink='https://github.com/Quado2/shopify-imdb-challenge'/>


                <Project title='Github Sign up' 
                        description='Was impressed with github sign up page and decided to try a clone. Work still in progress'
                        stacks='React, Tailwind css'
                        pageLink='https://quado-stage2.netlify.app/'
                        githubLink='https://github.com/Quado2/hng8-team'/>

                <Project title='Face Analysis API' 
                        description='Used free AI API to analyze faces on an image. My very first project when I started out with web development. Inspired by the course project.'
                        stacks='React, Node js Postgresql'
                        pageLink='https://smart-brain-200.herokuapp.com//'
                        githubLink='https://github.com/Quado2/Face-Analyzer'/>
            </div>
        </div>
    )
}

export default Portfolio