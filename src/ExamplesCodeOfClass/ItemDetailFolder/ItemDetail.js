import React from 'react'

const ItemDetail = ( {startships} ) => {
  return (

        <div class="card w-96 bg-base-100 shadow-xl m-8">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title text-center"><strong>{startships.name}</strong></h2>
                <p>Modelo: {startships.model}</p>
                <p>Crew: {startships.crew}</p>
            </div>
        </div>
  )
}

export default ItemDetail