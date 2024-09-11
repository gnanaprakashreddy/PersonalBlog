import '../Experience/Experience.css';
import { EDU_CONTENT } from "./Education.js";

export default function Education() {
    return (
        <div className="exp-content">
            {EDU_CONTENT.map((content) => (
                <div key={content.index}>
                    <div className="exp-header">
                        <div className="exp-title">
                            <div className='exp-role'>
                                <h3>
                                    {content.title}
                                </h3>
                                <p>- ({content.grade}/10)</p>
                            </div>
                            <p className='exp-period'>
                                {content.start} - {content.end}
                            </p>
                        </div>
                    </div>
                    <div className="exp-description">
                        {content.name}
                    </div>
                </div>
            ))}
            
        </div>
    )
}