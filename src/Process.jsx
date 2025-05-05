import './Process.css';

export default function Process({ iconSrc, heading, para, style }) {
    return (
        <div className="Process" style={style}>
            <span class="material-symbols-outlined">
                {iconSrc}
            </span>
            <h4>{heading}</h4>
            <p>{para}</p>
        </div>
    );
}
