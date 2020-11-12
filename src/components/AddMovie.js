import React,{useState} from 'react';
import '../App.css';
import {Modal,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';


const AddMovie =(props)=> {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[add,setAdd]=useState(
        {title:"",
        description:"",
        posterUrl:"",
        rate:0})
    const handlleChange= (e)=>{setAdd({... add,[e.target.name]:e.target.value })}
    const handleClick=(nextValue, prevValue, name)=>{setAdd({...add,[name]:nextValue})}
    return (
    <>
        <Button variant="primary" onClick={handleShow}>ADD movie</Button>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ADD NEW MOVIE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" name="title"  placeholder="title" onChange={handlleChange}/>
            <input type="text" name="description" placeholder="description" onChange={handlleChange}/>
            <input type="text" name="posterUrl"  placeholder="posterUrl" onChange={handlleChange} />
            <StarRatingComponent name="rate" starCount={5} onStarClick={handleClick} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={()=>props.Updatemovie(add)}>Save Changes</Button>
          </Modal.Footer>
      </Modal>
    </>
    );
  }
export default AddMovie;