import './List.css';

export default function Movie (props) {
    const movie = props.item;
    const handleDelete = props.delete;

    //get array of stars
    const stars = createStars(movie.rating)

    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <h4 className='align-middle ms-3'>{movie.title}</h4>

            <div className='me-3'>
                {stars}

                
                <img 
                src = "/Images/delete.png"
                className="ms-2"
                id="delete"
                alt = "delete button"
                onClick ={() => {handleDelete(movie.id)}}
                />

            </div>
            
        </li>

    )
}

function deleteItem () {



}

function createStars (rating) {
    // For loop för att lägga till en stjärna för betyg  
    let stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(
            <img 
                src = "/Images/star.png"
                className="ms-2"
                id="star"
                alt = "star"
                key={i}/>
            )
    } 

    return stars;
}