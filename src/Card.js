import React from 'react'
 import {  useCart } from "react-use-cart";
import './App.css';
function Card(props) {
  const { addItem } = useCart();
 
  return (
   <>
 <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 text-center d-flex justify-content-center" id="exampleModalLabel">Cart1 Info</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <h6 className='text-center' style={{color:"green"}}>Your Product Is Succussfull Place In A Cart To See Cart</h6>
       <h4 className='text-center' style={{color:"green"}}>Thank You For Order </h4>
       <p className="text-center" style={{color:"green"}}>Visit Again</p>
      </div>
     
    </div>
  </div>
</div> 
     <div className="col-md-3 col-sm-6 col-12 mt-2">
    
    <div className="card text-center" >
  <img src={props.image} className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-price">Rs:{props.price}</p>
    
  </div>
  <div className='d-grid justify-content-center mb-2'>
    <button className='btn btn-outline-success justify-content-center btn-sm' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>addItem(props.item)}>Add To Cart</button>
  </div>
</div>

      </div> 
      
   </>
  )
}

export default Card
