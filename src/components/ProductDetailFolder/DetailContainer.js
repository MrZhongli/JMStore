import { React, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { productData } from '../../Data/productData'


const ItemDetailContainer = () => {

    const [Item, setItem] = useState([])
    useEffect(() => {
        getItem()

    }, [])


    const getItem = () => {

        const getProductPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res(productData)
            }, 2000)
        })
        getProductPromise.then(data => {
            setItem(data)

        })
    }

    return (
        <div className='flex flex-row flex-wrap justify-center m-24' >
            {Item.map(p => <ItemDetail key={p.id} Item={p} />)}
        </div>
    )
}

export default ItemDetailContainer