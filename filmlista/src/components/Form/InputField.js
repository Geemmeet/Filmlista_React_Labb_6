import React from'react';

export default function InputField ({id, name, labelText, placeholderText}) {
    return (
        <>
            <label htmlFor={id} className="h3">{labelText}</label>
            <input
                type='text'
                id = {id}
                name = {name}
                placeholder={placeholderText}
                className="form-control mt-3"
            />
        </>

    );
}
