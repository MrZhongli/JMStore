import React from 'react'
import { useState } from 'react';

const ItemCount = ({onAdd}) => {
  
    const [count, setCount] = useState(0)


    const addHandler = ()=>{
      
        console.log('Se esta sumando');
        setCount( count + 1 )
    }
    
    const resHandler = ()=>{
      if (count > 0){
        console.log('Se esta sumando');
        setCount( count - 1 )
      }
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

        <button class="btn btn-success  border-slate-400 border-2 rounded-sm" onClick={() => onAdd(count)}>
          Add To Car
        </button>
      </div>
    </>

  )
}

export default ItemCount