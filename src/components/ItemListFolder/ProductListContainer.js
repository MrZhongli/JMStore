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
                    <div className='grid '>
                        <h1 className='text-black'>Productos</h1>
                    <div className='grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                        {product.map(p =>
                            <ProductCard  key={p.id} product={p} />
                        )}
                    </div>
                    </div>
                </div>       
          }

      </>
    
  )
}

export default ProductList