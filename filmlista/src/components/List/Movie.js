export default function Movie (props) {
    return (
        <li className="list-group-item">
            {props.item.title}
        </li>

    )
}