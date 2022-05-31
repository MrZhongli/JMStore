import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'


const ProductCard = (props) => {

  const { name, id, price, img } = props.product
  const { cart } = useCartContext()

  return (
    <div className="card w-64  shadow-xl m-5  hover:drop-shadow-lg">
      <figure><img className=" mb-10" src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-sm text-black"> PLANNERS {name}<div className="badge badge-secondary">NEW</div></h2>
        <div className="card-actions justify-end">
          <div className="text-black ">CL$ <strong>{price}</strong> </div>
        </div>
        <Link to={`/producto/${id}`} className='btn bg-pink-500 btn-success'> Ver</Link>
      </div>
    </div>
  )
}

export default ProductCard