import React from 'react'
// import {productData} from '../../Data/productData'
import  getProductsData  from "../firebase/firebaseClient";
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
        getProductsData().then((props)=>{
           setProduct(props)
        })
    }, [])
    

  return (
      <>
          {loading
              ?
              <Spinner />
              :
                <div>
                      <h1>Productos</h1>
                  <div className='flex flex-row flex-wrap m-auto justify-center '>
                      {product.map(p =>
                          <ProductCard  key={p.id} product={p} />
                      )}
                  </div>
                </div>       
          }
      </>
    
  )
}

export default ProductList