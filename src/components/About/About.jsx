import './About.css';
import { ABOUT_CONTENT } from "./About.js";

export default function About(props) {
    return (
        <div className="about-content">
            {ABOUT_CONTENT.map((content) => (
                <div key={content.index} className='section'>
                    <h3 className='title'>{content.title}</h3>
                    <p className='description'>{content.description}</p>
                </div>
            ))}
        </div>
    )   
}