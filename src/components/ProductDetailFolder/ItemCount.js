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
      <div className='flex flex-wrap justify-content align-items-center'>
        <div className='flex justify-between w-100 justify-content align-items-center sm:mx-auto'>
          <div >
            <p className='text-black'>Cantidad</p>
            <button onClick={resHandler} className='btn btn-outline btn-info mx-7 sm:mx-6'>-</button>
            <strong className='text-black'>{count}</strong>
            <button onClick={addHandler} className=' btn btn-outline btn-info mx-7 sm:mx-6'>+</button>
          </div>
        </div>
        <div>
        </div>
          <button className="btn btn-success  border-slate-400 border-2 rounded-sm lg:mx-24 sm:mx-auto sm:my-5" onClick={handleClick}>
            Agregar al carrito
          </button>
      </div>
    </>

  )
}

export default ItemCount