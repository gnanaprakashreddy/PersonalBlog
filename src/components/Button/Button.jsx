import './Button.css';

export default function Button(props) {
    return (
        <div className={props.isActive ? "active" : ''}>
        <button type="button" className="button" onClick={props.onClick}>
            {props.name}
        </button>
        </div>
    )
}