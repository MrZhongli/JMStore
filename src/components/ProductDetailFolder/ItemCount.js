import React from 'react'
import { useState } from 'react';
import { productData } from '../../Data/productData';
import { useAppContext } from "../Context/AppContext"
import { useCartContext } from "../Context/CartContext"

const ItemCount = ({onAdd, id, stock}) => {
  
  const [count, setCount] = useState(0)
  const { addToCart } = useCartContext()
	const { products } = useAppContext()


    const addHandler = ()=>{
      
      if (count < 6) {
        setCount(count + 1)
      }
    }
    
    const resHandler = ()=>{
      if (count > 0) {
        setCount(count - 1)
      }
    }
    const handleClick = (id, cantidad) => {
      const findProduct = products.filter((producto) => producto.id === id)
  
      if (!findProduct) {
        alert("Error en la base de datos")
        return
      }
  
      addToCart(findProduct, cantidad)
      onAdd(count)
    }

  return (
    <>
      <div className='flex justify-around ...   '>
        <div className='flex justify-between w-100 ... border-4 '>
          <div>Cantidad
            <button onClick={resHandler} className='btn btn-outline btn-info mx-7'>-</button>
            <strong >{count}</strong>
            <button onClick={addHandler} className=' btn btn-outline btn-info mx-7'>+</button>
          </div>
        </div>
        <div>
          <button class="btn btn-success  border-slate-400 border-2 rounded-sm" onClick={() => handleClick(id, count)}>
            Add To Car
          </button>
        </div>
       
      </div>
    </>

  )
}

export default ItemCount