import './Portfolio.css'
import RollText from '../../Components/RollText/RollText'
import Project from '../../Components/Project/Project'

function Portfolio () {

    return(
        <div className='portfolio-wrapper h-100 mx-6 mb-4  text-5xl sm:text-7xl text-skin-button'>
            <RollText text='My Portfolio' className='text-7xl' />
            <p className='mt-5 text-base text-left text-skin-muted'> A small sample of works I've done in the past. This is just but a tip of what I'm
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
            </div>
        </div>
    )
}

export default Portfolio