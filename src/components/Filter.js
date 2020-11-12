import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';
import {Navbar} from 'react-bootstrap';

const Filter = (props) => {
const [search,setSearch]= useState('');
    return (
        <div>
    <Navbar bg="light">
    <Navbar.Brand href="#">MOVIE APP</Navbar.Brand>
  </Navbar>
  <input type="text" placeholder="search movie" onChange={e=>props.UpdateTitle(e.target.value)} />
   <div>
 <StarRatingComponent emptyStarColor="gray" starCount={5} onStarClick={(nextValue, prevValue, name)=> props.UpdateRate(nextValue)} /> 
    </div>        
        </div>
    )
}

export default Filter;
