import './Experience.css'
import { EXP_CONTENT } from "./Experience.js"

export default function Experience() {
    return (
        <div className="exp-content">
            {EXP_CONTENT.map((content) => (
                <div key={content.index}>
                    <div className="exp-header">
                        <div className="exp-title">
                            <div className='exp-role'>
                                <h3>
                                    {content.company}
                                </h3>
                                <p> - ({content.title})</p>
                            </div>
                            <p className='exp-period'>
                                {content.start} - {content.end}
                            </p>
                        </div>
                    </div>
                    <div className="exp-description">
                        {content.description}
                    </div>
                </div>
            ))}
            
        </div>
    )
}