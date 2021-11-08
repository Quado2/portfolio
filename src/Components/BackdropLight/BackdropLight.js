import './BackdropLight.css';

 const BackdropLight = (props) => (
    props.show? <div className='backdrop' onClick={props.backdropClicked}></div>: null
)

export default BackdropLight;