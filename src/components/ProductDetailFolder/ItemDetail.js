import React from 'react'
import { Link } from 'react-router-dom'
import  DetailContainer from './DetailContainer'


const ItemDetail = ( {Item} ) => {
  return (

        <div class="card w-96 bg-base-100 shadow-xl m-8">
            <figure><img src={Item.img} className="h-60 w-80 m-10" alt="planners"/></figure>
            <div class="card-body">
                <h2 class="card-title text-center"><strong>{Item.name}</strong></h2>
                <p>id :{Item.id} </p>
                <p>precio: {Item.price}</p>
            </div>
            <button className='btn btn-primary'>Ver</button>
        </div>
  )
}

export default ItemDetail