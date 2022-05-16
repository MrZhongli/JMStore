import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import  ItemCount  from './ItemCount'



const ItemDetail = ( {item} ) => {

  const [Terminar, setTerminar] = useState(false)
  const { addToCart} = useCartContext()

  // const { name,  price, stock, img, description, id } =
  // item


  const onAdd = (count) => {
		setTerminar(true)
    addToCart(item);
		console.log(count)

	}

  return (

    <div class="hero min-h-screen bg-pink-100 ">
    <div class="hero-content flex-col lg:flex-row">
      <img src={item.img} class="max-w-sm rounded-lg " />
      <div>
        <h1 class="text-5xl font-bold">{item.name}</h1>
        <div>
          <h2 className='m-20'>Descripción</h2>
        </div>
        <div className='m-20'>
        <p class="py-6">{item.description}</p>
        </div>
        <span>cantidad disponible:{item.stock} </span>
          <h2 className='m-20'>Precio {item.price} </h2>
        
          
        {/* <button class="btn btn-primary">Solicitar producto</button> */}
        
        {Terminar ? 
        (
        <Link to='/carrito'> <button class="btn btn-success  border-slate-400 border-2 rounded-sm">
        Terminar Compra
        </button>
        </Link>
        )
        :(
          <ItemCount  stock={item.stock} onAdd={onAdd} id={item.id}/>
        )
        }
       
      </div>
    </div>
  </div>
  
  )
}

export default ItemDetail