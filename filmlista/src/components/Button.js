"use client";

export default function Button ({onClick, styleClass, text}) {
    return (
        <button onClick={onClick} className={styleClass}>
            {text}
        </button>
    );
}