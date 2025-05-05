import './Process.css';

export default function Process4({ iconSrc, heading, style }) {
    return (
        <div className="Process4" style={style}>
            <span class="material-symbols-outlined">
                {iconSrc}
            </span>
            <h4>{heading}</h4>
        </div>
    );
}