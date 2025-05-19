import React from'react';

export default function InputField ({id, labelText, placeholderText, onChange}) {
    return (
        <>
            <label htmlFor={id} className="h3">{labelText}</label>
            <input
                type='text'
                id = {id}
                name = {id}
                placeholder={placeholderText}
                className="form-control mt-3"
            />
        </>

    );
}
