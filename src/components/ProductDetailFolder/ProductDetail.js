import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productData } from '../../Data/productData'
import ItemCount from './ItemCount'
import { ToastContainer, toast } from 'react-toastify';



const ProductDetail = () => {

    const { productId } = useParams()
    const [Product, setProduct] = useState( {} )
    const [Terminar, setTerminar] = useState(false)
   
    
    useEffect(() => {
      setProduct (productData.find(p => p.id == productId))
    }, [productId])

    const onAdd = () =>{
      setTerminar(true)
      // Colocar alert de toastify (a futuro)
    }

    const notify = () => toast("Wow so easy !");
    

  return (
   <>

<div class="hero min-h-screen bg-pink-100 ">
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
      <ToastContainer />
      
        
      {/* <button class="btn btn-primary">Solicitar producto</button> */}
      
      {Terminar ? 
      (
      <Link to='/cart'> <button class="btn btn-success  border-slate-400 border-2 rounded-sm">
      Terminar Compra
      </button>
      </Link>
      )
      :(
        <ItemCount onAdd={onAdd} />
      )
      }
     
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