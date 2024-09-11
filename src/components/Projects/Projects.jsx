import './Projects.css'
import { PROJ_CONTENT } from "./Projects"

export default function Projects() {
    return( 
        <div className="proj-content">
            {PROJ_CONTENT.map((content) => (
                <div key={content.index}>
                    <div className="proj-header">
                        <div className='proj-role'>
                            <h3>
                                {content.name}
                            </h3>
                            <div className='proj-technologies'> - ({content.technologies.map((tech) => (
                                <p key={Math.random()}>{tech}</p>
                            ))})</div>
                        </div>
                    </div>
                    <div className="proj-description">
                        {content.description}
                    </div>
                </div>
            ))}
    </div>
    )
}