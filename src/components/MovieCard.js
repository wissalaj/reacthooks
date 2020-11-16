import React from 'react';
import '../App.css';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom';
const MovieCard=(props)=>{

    return(
      <Link to ={`${props.card.title}`}>
        <Card style={{ width: '18rem',margin:10,borderRadius:8}}>
        <Card.Img style={{height:350}} variant="top"  src={props.card.posterUrl} />
        <Card.Body>
          <Card.Title>{props.card.title} </Card.Title>
          <Card.Text>{props.card.description}</Card.Text>
          <StarRatingComponent name="rate" starCount={5} value={props.card.rate} />
        </Card.Body> 
      </Card>
    </Link>
    );
}

export default MovieCard;
