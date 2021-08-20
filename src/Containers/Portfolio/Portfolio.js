import './Portfolio.css'
import RollText from '../../Components/RollText/RollText'

function Portfolio () {

    return(
        <div className='mx-6 mb-4 portfolio-wrapper text-5xl sm:text-7xl text-skin-button'>
            <RollText text='My Portfolio' className='text-7xl' />
            <p className='mt-7 text-xl text-left text-skin-muted'> A small sample of works I've done in the past. This is just but a tip of what I'm
                capable of. 
            </p>
        </div>
    )
}

export default Portfolio