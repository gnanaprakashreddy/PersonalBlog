import './Skills.css'
import { SKILLS_CONTENT } from "./Skills";

export default function Skills() {
    return (
        <div className="skill-content">
            {SKILLS_CONTENT.map((content) => (
                <div key={content.index} className="skill-item">
                    <h3>{content.title} : </h3>
                    <ul>
                        {content.technologies.map(tech => (
                            <li key={Math.random()}>{tech}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div> 
    )
}