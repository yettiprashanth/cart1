import React from 'react'
import {useCart} from 'react-use-cart'
import './Cart.css';
function Cart1() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
         emptyCart,
        cartTotal
      } = useCart();
      if (isEmpty)return<h5 className='text-center py-5'>your cart is empty</h5>
   return (
    <>
    <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 text-center d-flex justify-content-center" id="exampleModalLabel">Cart1 Info</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <h6 className='text-center' style={{color:"red"}}>Your Product Is Succussfull Removed In A Cart</h6>
       <h4 className='text-center' style={{color:"red"}}>Thank You</h4>
       <p className="text-center" style={{color:"red"}}>Visit Again</p>
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>    
  <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 text-center d-flex justify-content-center" id="exampleModalLabel">Cart1 Info</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <h6 className='text-center' style={{color:"red"}}>Your Products Is Succussfull Cleare In A Cart</h6>
       <h4 className='text-center' style={{color:"red"}}>Thank You</h4>
       <p className="text-center" style={{color:"red"}}>Visit Again</p>
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div> 
 
    <div className='container py-3 m-2'>
        <div className="row justify-content-center">
            <h4 className="text-center py-3 text-decoration-underline">My Cart</h4>
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4">
                <div className="d-flex justify-content-between py-3">
                    <h3 className="position-relative fw-bolder text-title fs-5">cart <span className='position-absolute translate-middle rounded-pill badge bg-danger mx-2'>{ totalUniqueItems}</span></h3>
                    <p className='position-relative fw-bolder text-title fs-5 '>Total Items:<span className='position-absolute translate-middle rounded-pill badge bg-success mx-2'>{ totalItems}</span></p>
                </div>
            </div>
            
            <div>
            <table className='table table-light table-hover m-0'>
                <tbody className='1'>
                    {items.map((item,index)=>{
                        return(
                            <tr key={index} className="align-middle cart">
                                <td><img src={item.image} className="img-cart" alt="" /></td>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button onClick={()=>updateItemQuantity(item.id,item.quantity-1)} className='btn btn-outline-dark ms-1 btn-sm'>-</button>
                                    <button onClick={()=>updateItemQuantity(item.id,item.quantity+1)} className='btn btn-outline-dark ms-1 btn-sm'>+</button>
                                    <button onClick={()=>removeItem(item.id)} className='btn btn-outline-danger ms-2 btn-sm' data-bs-toggle="modal" data-bs-target="#exampleModal1">Remove</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
            </div>
            <div className="d-flex justify-content-between py-3">
        <button onClick={()=>emptyCart(items.id)} className="btn btn-outline-danger btn-sm"data-bs-toggle="modal" data-bs-target="#exampleModal3">CLEARE ALL</button>
        <h4 >Total Price:${cartTotal}</h4>
      </div>
        </div>
      
    </div> 
   

    </>
   )
}

export default Cart1
