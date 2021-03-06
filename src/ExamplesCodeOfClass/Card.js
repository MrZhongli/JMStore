import React from 'react'
import { ItemCount } from './ItemCount';

export const Card = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="PC Component" /></figure>
  <div className="card-body">
    <h2 className="card-title">Item</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <ItemCount/>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Card;