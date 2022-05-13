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
      if (count > 0){
        console.log('Se esta sumando');
        setCount( count - 1 )
      }
        
    }
    return (
        <>
        
    <div >Cantidad</div>
      <div className='flex justify-between ... border-2 '>
      <button onClick={resHandler} className= 'btn btn-outline btn-info'>-</button>
      <strong >{count}</strong>
      <button onClick={addHandler} className=' btn btn-outline btn-info'>+</button>
      
    </div>
    <button class="btn btn-success m-5 border-slate-400 border-2 rounded-sm">Add To Car</button>
     
      </>
    
  )
}
