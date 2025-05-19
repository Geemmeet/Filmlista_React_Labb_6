export default function Datalist ({id, options, labelText}) {
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
            <label htmlFor={id}>{labelText} </label>
            {listedOptions}
        </>
        
    )
}