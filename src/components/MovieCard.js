import React from 'react';
import '../App.css';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';
const MovieCard=(props)=>{
    return(
        <Card style={{ width: '18rem',margin:10}}>
        <Card.Img style={{height:350}} variant="top"  src={props.card.posterUrl} />
        <Card.Body>
          <Card.Title>{props.card.title} </Card.Title>
          <Card.Text>{props.card.description}</Card.Text>
          <StarRatingComponent name="rate" starCount={5} value={props.card.rate} />
        </Card.Body> 
      </Card>
    );
}

export default MovieCard;
