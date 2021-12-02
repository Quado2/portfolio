import "./Dots.css"

export default function Dots({right}){

    return(
        <div className={`dotted absolute w-40 h-28 md:w-56 md:h-36  ${right? '-bottom-16 right-0' : 'top-0 left-0'} `}></div>
    )
}