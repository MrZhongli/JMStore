import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../../Data/productData'


const ProductDetail = () => {

    const { productId } = useParams()
    const [Product, setProduct] = useState( {} )
    
    useEffect(() => {
      setProduct (productData.find(p => p.id == productId))
    }, [productId])
    

  return (
   <>

<div class="hero min-h-screen bg-pink-100">
  <div class="hero-content flex-col lg:flex-row">
    <img src={Product.img} class="max-w-sm rounded-lg " />
    <div>
      <h1 class="text-5xl font-bold">{Product.name}</h1>
      <div>
        <h2 className='m-20'>Descripción</h2>
      </div>
      <div className='m-20'>
      <p class="py-6">{Product.description}</p>
      </div>
      <button class="btn btn-primary">Solicitar producto</button>
    </div>
  </div>
</div>


    <li><img  className="h-60"></img> </li>
    <li> ID : {Product.id} </li>
    <li>{Product.name} </li>
    <p>{Product.description} </p>
   </>
  )
}

export default ProductDetail