import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import  ItemCount  from './ItemCount'



const ItemDetail = ( {item} ) => {

  // const [Terminar, setTerminar] = useState(false)
  const [count, setCount] = useState(0);
  const { addToCart} = useCartContext()
  
  
  
  const onAdd = (quantiyToAdd) =>{ 
  // setTerminar(true)
  setCount(quantiyToAdd)
  
  }
  
  return (

    <div className="hero min-h-screen bg-pink-100 ">
    <div className="hero-content flex-col lg:flex-row">
      <img src={item.img} className="lg:max-w-sm md:max-w-sm sm:w-screen rounded-lg " />
      <div>
        <h1 className="text-5xl font-bold text-black">PLANNERS {item.name}</h1>
        
        <div>
          <h2 className='my-14 text-black'>Incluye</h2>
        </div>
        <div >
        <p className="py-6 text-black">{item.description}</p>
        </div>
        <span className="py-6 text-black">cantidad disponible: {item.stock} </span>
          <h2 className='m-20 text-black'>Precio {item.price} </h2>
        
          
        {/* <button class="btn btn-primary">Solicitar producto</button> */}
        
        {count !== 0 ? 
        (
        <Link to='/carrito'> <button className="btn btn-success  border-slate-400 border-2 rounded-sm">
        Terminar Compra
        </button>
        </Link>
        )
        :(
          <ItemCount  item={item}  onAdd={onAdd} />
        )
        }
       
      </div>
    </div>
  </div>
  
  )
}

export default ItemDetail