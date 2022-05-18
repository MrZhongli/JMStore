import React from 'react'
import {productData} from '../../Data/productData'
import  {getProductsData}  from "../firebase/firebaseClient";
import {useState, useEffect} from 'react'
import ProductCard from './ProductCard';
import Spinner from '../SpinnerObject/Spinner';

const ProductList = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },2000)
        
    }, [])
    
    useEffect(() => {
        getProduct()
    }, [])
    
    const getProduct = () => {
        
        // const getProductPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         res(productData)
        //     }, 2000)
        // })
        // getProductPromise.then(data => {
        //     setProduct(data)
            
        // })
        console.log('Esto viene de fireBase', getProductsData())
    }

  return (
      <>

      {loading 
      ? 
      <Spinner /> 
      
      :
      <div className='flex justify-center align-center'>
              <div className='flex flex-row flex-wrap'>
                  {product.map(p =>
                      <ProductCard key={p.id} product={p} />
                  )}
              </div>
          </div> }
          
      </>
    
  )
}

export default ProductList