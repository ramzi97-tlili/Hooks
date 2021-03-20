
import Card from '..//components/MovieCard'
import React,{useState} from 'react'

export default function MovieList (props)  {
  
    return (

       <div className="row"> {props.movies.map((movie, index) => <Card title={movie.Title}  src = {movie.Url} key={index}
        description={movie.description}
       rating={movie.rating}
       />)}
</div>
)

    }