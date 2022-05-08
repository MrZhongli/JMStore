import React, { useState } from 'react'

const ItemCount = ({onAdd}) => {
    // const [Count, setCount] = useState(second)
    return (
      
    <div>
        <button>+</button>
        {/* {Count} */}
        <button>-</button>

        <button className='btn btn-primary' onClick={onAdd}>Agregar a Carrito</button>
    </div>
  )
}

export default ItemCount