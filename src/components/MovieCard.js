import React from "react";
import StarRating from "../components/StarRating";
function Card(props) {

    return (
    <div className="column">
      <h2 className="title">{props.title}</h2>
      <StarRating rate={props.rating}/>
      <img src= {props.src} width ="370px" height="370px" alt = {props.title}  />
      <p>{props.description}</p>
     </div>
    );
}

export default Card;
