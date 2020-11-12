import React from 'react';
import '../App.css';
import MovieCard from './MovieCard';
const ListMovie =(props)=>{
return(
    <div style={{display:"flex",flexDirection:"row",width:950,justifyItems:"center",flexWrap:"wrap"}}>
        {props.list.map(el => { return (<MovieCard card={el}/>);})}
    </div>
    
    );}
export default ListMovie;