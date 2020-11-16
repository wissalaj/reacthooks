import React from 'react';
import '../App.css';
import MovieCard from './MovieCard';
//import Trailer from './Trailer';<Trailer Iframe={el} />

//import {BrowserRouter as Router} from 'react-router-dom';
const ListMovie =(props)=>{
return(


    <div style={{display:"flex",flexDirection:"row",width:950,justifyItems:"center",flexWrap:"wrap"}}>
        {props.list.map(el => { return (
            <>
        <MovieCard card={el}/>
        </>
        );})}
    </div>
    );}
export default ListMovie;