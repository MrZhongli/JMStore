import React from 'react'
import { useState } from 'react';
import { useCartContext } from "../Context/CartContext"

const ItemCount = ({ item, onAdd }) => {

  const { addToCart } = useCartContext()
  const [count, setCount] = useState(0);

  const addHandler = () => {

    if (count < item.stock) {
      setCount(count + 1)
    }
  }

  const resHandler = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }


  const handleClick = () => {
    if (item.stock > 0 && count > 0) {
      addToCart(item, count);
      onAdd(count)
    }
  };

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
          <button class="btn btn-success  border-slate-400 border-2 rounded-sm" onClick={handleClick}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </>

  )
}

export default ItemCount