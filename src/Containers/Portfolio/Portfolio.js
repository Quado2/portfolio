import './Portfolio.css'
import RollText from '../../Components/RollText/RollText'
import Project from '../../Components/Project/Project'
import useOnVisible from '../../hooks/useOnVisible'


import paradiso from '../../images/paradiso.png'
import brain from '../../images/brain.png'
import shopify from '../../images/shopify.png'
import github from '../../images/github clone.png'

function Portfolio () {



	const options = {
		rootMargin: '0px 0px -200px 0px'
	   }
	const [setRef, appearClass] = useOnVisible(options)

    return(
        <div className={` portfolio-wrapper mx-6 mt-24 text-5xl sm:text-7xl text-skin-button`}>
            <RollText text='My Portfolio' className='text-7xl' />
            <p ref={setRef} className={` ${appearClass} --removeNow mt-5 text-base text-left text-skin-muted`}> 
                A small sample of works I've done in the past. 
                This is just but a tip of what I'm
                capable of. 
            </p>
            <div className='projects mt-10  flex  w-full
                    justify-center items-center flex-wrap '>
                <Project title='Paradiso Technologies' 
                        description='Web application built for Paradiso Technologies Limited, a
                                     laser and router service company in Nigeria'
                        stacks='React, Node js, Docker, Mysql'
                        pageLink='https://www.paradisotechs.com/'
                        githubLink='https://github.com/Quado2/paradiso'
                        imageLink={paradiso}
                        />
                        


                <Project title='Imdb Search' 
                        description='You can search for movies, Nominate them and have them cached in your system.'
                        stacks='React'
                        pageLink='https://shopify-challenge-eze.netlify.app/'
                        githubLink='https://github.com/Quado2/shopify-imdb-challenge'
                        imageLink={shopify}
                        right
                        />


                <Project title='Github Sign up' 
                        description='Was impressed with github sign up page and decided to try a clone. Work still in progress'
                        stacks='React, Tailwind css'
                        pageLink='https://quado-stage2.netlify.app/'
                        githubLink='https://github.com/Quado2/hng8-team'
                        imageLink={github}
                        />

                <Project title='Face Analysis API' 
                        description='Used free AI API to analyze faces on an image. My very first project when I started out with web development. Inspired by the course project.'
                        stacks='React, Node js Postgresql'
                        pageLink='https://smart-brain-200.herokuapp.com//'
                        githubLink='https://github.com/Quado2/Face-Analyzer'
                        imageLink={brain}
                        right
                        />
            </div>
        </div>
    )
}

export default Portfolio