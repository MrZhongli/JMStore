import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getItemData, productData } from '../../Data/productData'

import { ToastContainer, toast } from 'react-toastify';
import ItemDetail from './ItemDetail';



const ProductDetail = () => {

  
    const { productId } = useParams()
    const [Product, setProduct] = useState( {} )
   
   
    
    useEffect(() => {
      if (productId === undefined) {
        getItemData().then((resp) => setProduct(resp))
      } else {
        getItemData().then((resp) => setProduct(resp[productId]))
      }
    }, [productId])

  

    // const notify = () => toast("Wow so easy !");
    

  return (
    <div>            
        <ItemDetail  className="container mx-auto my-8 max-w-4xl " item={Product} />
    </div>
)
}

export default ProductDetail