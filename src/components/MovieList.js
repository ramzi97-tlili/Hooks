
import Card from '..//components/MovieCard'
import React from 'react'


export default function MovieList (props)  {
    
    return (
<div>
       <div className="row"> {props.movies.map((movie, index) => <Card title={movie.Title}  src = {movie.Url} key={index}
       description={movie.description}
       rating={movie.rating} youtube={movie.youtube}/>
       )}
       </div>
</div>

)
}