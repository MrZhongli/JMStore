import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import getProductsData from "../firebase/firebaseClient";
import ItemDetail from './ItemDetail';

const ProductDetail = () => {

  const { productId } = useParams()
  const [Product, setProduct] = useState([])

  useEffect(() => {
    if (productId === undefined) {
      getProductsData().then((resp) => setProduct(resp))
    } else {
      getProductsData().then((resp) => setProduct(resp[productId - 1]))
    }
  }, [productId])

  return (
    <div>
      <ItemDetail className="container mx-auto my-8 max-w-4xl " item={Product} />
    </div>
  )
}

export default ProductDetail