export default function Select ({id, options, labelText}) {
    let listedOptions = (
        <select id={id} className="form-control">
        {
        options.map((option, index) => (
            <option value={option} key={index}>{option}</option>
        ))
        }
        </select>
    );

    return (
        <>
            <label htmlFor={id} className="h3 mt-4">{labelText} </label>
            {listedOptions}
        </>
        
    )
}