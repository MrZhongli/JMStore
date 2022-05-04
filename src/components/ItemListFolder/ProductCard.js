import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ( props ) => {

    const  {name, id, description, price, img} = props.product

  return (
    <div class="card w-96 bg-base-100 shadow-xl m-10">
                    <figure><img className="h-60 w-80 m-10" src={img} alt="Shoes" /></figure>
                    <div class="card-body">
                    <h2 class="card-title"> 
                        {name}
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">{price}$</div> 
                        <div class="badge badge-outline">ID:{id}</div>
                    </div>
                    <Link to={`/producto/${id}`} className='btn btn-primary'> Ver</Link>
                    </div>
                </div>
  )
}

export default ProductCard