import React from 'react'
import DATA from './Data'
import Card from './Card'
function Home() {
  return (
    <div>
       <div className='container-fluid mt-2'>
      <h3 className="text-center mt-5 p-2 text-uppercase">
        Items page
      </h3>

      
      <hr />
      <h5 className="text-center" style={{color:"blue"}}>Click On Add To Cart Button Item Added In Cart Page</h5>
    <div className="container py-4">
     <div className="row">
      {DATA.map((item,index)=>{
        return(
          <Card image={item.image} title={item.title} price={item.price} description={item.description} item={item} key={index}/>
        )

        
      })}
     </div>
    </div>
    </div>
    </div>
  )
}

export default Home
