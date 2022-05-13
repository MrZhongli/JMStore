import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import  ItemCount  from './ItemCount'



const ItemDetail = ( {item} ) => {

  const [Terminar, setTerminar] = useState(false)

  const { name,  price, stock, img, description, id } =
  producto


  const onAdd = (count) => {
		setTerminar(true)
    
		console.log(count)
	}

  return (

    <div class="hero min-h-screen bg-pink-100 ">
    <div class="hero-content flex-col lg:flex-row">
      <img src={img} class="max-w-sm rounded-lg " />
      <div>
        <h1 class="text-5xl font-bold">{name}</h1>
        <div>
          <h2 className='m-20'>Descripción</h2>
          <h2 className='m-20'>Precio {price} </h2>
        </div>
        <div className='m-20'>
        <p class="py-6">{description}</p>
        </div>
        <span>cantidad disponible:{stock} </span>
        
          
        {/* <button class="btn btn-primary">Solicitar producto</button> */}
        
        {Terminar ? 
        (
        <Link to='/carrito'> <button class="btn btn-success  border-slate-400 border-2 rounded-sm">
        Terminar Compra
        </button>
        </Link>
        )
        :(
          <ItemCount  stock={stock} onAdd={onAdd} id={id}/>
        )
        }
       
      </div>
    </div>
  </div>
  
  )
}

export default ItemDetail