import React , {useState} from "react";
import  MovieList from "../src/components/MovieList";
import './App.css';
import Search from "./components/Search";
import NewMovie  from "../src/components/NewMovie";

const App = () => {


  const [movies, setMovies]=useState
  ([
  {Title:'Harry Potter',
  rating : '5' ,
  id:Math.random(),
  description:'Harry Potter est une série de films basée sur les romans éponymes de JK Rowling . La série est distribuée par Warner Bros.et se compose de huit films fantastiques ',
  Url: 'https://specials-images.forbesimg.com/imageserve/5efa33eed4034b0007bf4b5c/960x0.jpg?fit=scale',

},
  {Title:'Prison Break',
  rating:'4',
  id:Math.random(),
  description:' Prison Break is an American television serial drama created by Paul Scheuring for Fox. The series revolves around two brothers, Lincoln Burrows (Dominic Purcell) and Michael Scofield (Wentworth Miller',
  Url:'data:image/jpeg;base64,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',
},
{Title  :'Tenet',
rating:'2',
id:Math.random(),
description:'Tenet is a 2020 science fiction action-thriller film written and directed by Christopher Nolan, who produced it with Emma Thomas. A co-production between the United Kingdom and United States,',
  Url:'https://www.journaldugeek.com/content/uploads/2020/08/tenet-palindrome.jpg',
  }
])





const handleRating = (newRate) => setSearchRating(newRate);
const handleSearch = (e) => setSearchValue(e.target.value);
const [searchRating, setSearchRating] = useState(2);
const [searchValue, setSearchValue] = useState("");
const handleAdd = (newMovie) => setMovies([...movies, newMovie])
  return (
 <div>
      
      
      <Search
        searchRating={searchRating}
        searchValue={searchValue}
        handleRating={handleRating}
        handleSearch={handleSearch}
      />
      <MovieList  movies = {movies.filter(
          (movie) =>
            movie.Title.toLowerCase().includes(searchValue.toLocaleLowerCase().trim()) &&
            movie.rating >= searchRating
        )}/>
     <NewMovie  handleAdd={handleAdd} />
      
    
      </div>
    );
}
export default App;