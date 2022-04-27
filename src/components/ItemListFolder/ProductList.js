import React from 'react'
import {productData} from '../../Data/productData'
import {useState, useEffect} from 'react'

const ProductList = () => {
    
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct()
    
    }, [])
    
    const getProduct = ()=>{
        const getProductPromise = new Promise( (res, rej)=>{
            setTimeout( ()=>{
                 res( productData )
            },2000)
        })

        getProductPromise.then( data => {
            setProduct( data )
        }) 
    }

  return (
    <div className='flex justify-center align-center'>
            <div className='flex flex-row flex-wrap'>
                {product.map( p =>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                    <h2 class="card-title">
                        {p.nombre}
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Marca: {p.marca}</p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">{p.precio}$</div> 
                        <div class="badge badge-outline">ID:{p.id}</div>
                    </div>
                    </div>
                </div>
                )}
            </div>
    </div>
  )
}

export default ProductList