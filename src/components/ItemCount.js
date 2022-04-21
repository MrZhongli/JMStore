import React from 'react'
import { useState } from 'react';

export const ItemCount = () => {
    console.log('Este es un render del contador');

    const [count, setCount] = useState(0)
     
     
    const addHandler = ()=>{
        console.log('Se esta sumando');
        setCount( count + 1 )
    }

    
    const resHandler = ()=>{
        console.log('Se esta sumando');
        setCount( count - 1 )
    }
    return (
        <>
        
    <div >Cantidad</div>
      <div className='flex justify-between ... border-2 '>
      <button onClick={resHandler} className= 'flex-none w-14 h-14 btn btn-outline btn-info'>-</button>
      <strong className='grow h-14 '>{count}</strong>
      <button onClick={addHandler} className='flex-none w-14 h-14 btn btn-outline btn-info'>+</button>
      
    </div>
    <button class="btn btn-success m-5 border-slate-400 border-2 rounded-sm">Add To Car</button>
     
      </>
    
  )
}
