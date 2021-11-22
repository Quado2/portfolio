import "./Project.scss"

import useOnVisible from "../../hooks/useOnVisible"

function Project (props){

    const options = {
        rootMargin: '0px 0px -200px 0px'
       }
    const [setRef, appearClass] = useOnVisible(options)

    const {stacks, title, description, pageLink, githubLink} = props

    return(       
        <div ref={setRef} className= {`${appearClass} --removeNow project rounded h-72 border h-100 p-2 m-5`}>
                <div className=' project-top 
                    w-100  flex items-start 
                    justify-center'
                    >
                    <a href={githubLink}>
                        <svg className='github_svg' xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href={pageLink}>
                        <svg className='visit_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M20 18c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm-16 2c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm8-16c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm3.873 15.655l-2.873-2.404v-3.341c-.326.055-.658.09-1 .09s-.674-.035-1-.09v3.341l-2.873 2.404c.484.46.892 1 1.201 1.598l2.672-2.253 2.672 2.253c.309-.598.717-1.137 1.201-1.598z"/></svg>
                    </a>
                    
                </div>
                <div className='project-mid flex flex-col justify-center h-1/2'>
                    <a href={pageLink}>
                        <h3 className='text-skin-button text-xl'>
                           {title}
                        </h3>
                        <h4 className='text-skin-muted
                            text-sm'>
                           {description}
                        </h4>
                    </a>
                </div>
                <div className='project-bottom h-1/4 flex items-end justify-center'>
                    <h3 className='text-skin-base text-base pb-7'>{stacks} </h3>
                </div>
        </div>
    )
}

export default Project