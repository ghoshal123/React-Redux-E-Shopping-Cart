import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardData from './CardData';
import './style.css';
import { useDispatch } from 'react-redux';
import { ADD } from './redux/actions/action';



const Cards = () => {
  const [data,setData]=useState(CardData);
  
  const dispatch=useDispatch();
  const send=(e)=>{
  //console.log(e);
  dispatch(ADD(e));
  }
  return (
    <div>
      <div className='container mt-3'>
        <h1 className='text-center'>Add to Cart</h1>
        <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map((elem)=>{
            return (
              <div>
              <Card style={{ width: '22rem',border:"2px solid",margin:"auto" }} className='mx-2 mt-4 card_style'>
              <Card.Img variant="top" src={elem.images}  style={{height:"16rem"}} />
              <Card.Body>
                <Card.Title>{elem.title}</Card.Title><hr style={{border:" 1px solid"}}/>
                <Card.Text style={{color:"red"}}>{elem.description}</Card.Text><hr style={{border:" 1px solid"}}/>
                <Card.Text><b>₹ {elem.price}</b></Card.Text>
                <div  className='button_div d-flex justify-content-center'>
                <Button variant="primary" onClick={()=>send(elem)}>Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
              </div>
            )
          })
        }
         
        </div>
      </div>
    </div>
  )
}

export default Cards