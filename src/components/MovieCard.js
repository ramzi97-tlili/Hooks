import React from "react";
import StarRating from "../components/StarRating";
import Page from "./Page";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
function Card(props) {

  
    return (
    <div className="column">
      <h2 className="title">{props.title}</h2>
      <StarRating rate={props.rating}/>
      <img src= {props.src} width ="370px" height="370px" alt = {props.title}  />
      <p>{props.description}</p>
      <Router>
       <div> <Link to="/Page">Bande d'annonce </Link></div>
        <Switch>
        <Route path="/page" component={Page}><Page src ={props.youtube}/>
                </Route>
        </Switch>
      </Router>
      
    
    </div>
    );
}

export default Card;