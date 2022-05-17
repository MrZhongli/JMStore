import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'


const ProductCard = ( props ) => {

    const  {name, id, price, img} = props.product
    const {cart} = useCartContext()

    console.log(cart)

  return (
    <div class="card w-80 bg-base-100 shadow-xl m-10">
                    <figure><img className="h-60 w-80 m-10" src={img} alt="Shoes" /></figure>
                    <div class="card-body">
                    <h2 class="card-title"> 
                        {name}
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">CL${price}</div> 
                        
                    </div>
                    <Link to={`/producto/${id}`} className='btn btn-primary'> Ver</Link>
                    </div>
                </div>
  )
}

export default ProductCard