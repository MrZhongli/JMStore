import React from 'react'
import  DetailContainer from './DetailContainer'

const ItemDetail = ( {Item} ) => {
  return (

        <div class="card w-96 bg-base-100 shadow-xl m-8">
            <figure><img src={Item.img} className="h-80 w-80 m-10" alt="planners"/></figure>
            <div class="card-body">
                <h2 class="card-title text-center"><strong>{Item.name}</strong></h2>
                <p>Info: {Item.description}</p>
                <p>precio: {Item.price}</p>
            </div>
        </div>
  )
}

export default ItemDetail