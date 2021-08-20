import './RollText.scss'

function RollText(props){

    return(
        <div className='roll-text' disabled>
            {props.text.split('').map((letter,i) => {
                return letter===' ' ? <h2 className='text-skin-button' key={i} disabled>&nbsp;</h2> : <h2 key={i} disabled>{letter}</h2>
            })}
            
        </div>
    )
}

export default RollText