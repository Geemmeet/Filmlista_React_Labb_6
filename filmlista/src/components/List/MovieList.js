import Movie from '@/components/List/Movie'

export default function MovieList({movies, handleDelete}) {
    return (
        <>
            <ul className='list-group'>
                {movies.map((movie) => <Movie key={movie.id} item={movie} delete={handleDelete}/>)}
            </ul>
        </>
    )

}