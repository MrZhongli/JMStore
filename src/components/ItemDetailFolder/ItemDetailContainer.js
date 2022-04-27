import {React, useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {


    const [startShips, setstartShips] = useState([])

    useEffect(() => {
      getStartShips()
    
    }, [])
    
    const getStartShips = ()=>{
        const URL= 'https://swapi.dev/api/starships'
        fetch(URL)
        .then( res =>res.json())
        .then( data => {
            console.log(data.results);
            setstartShips(data.results)
            // data.results.forEach(e=>{
            //     console.log(e.name)
            // })
        })
    }
    

  return (
    <div className='flex flex-row flex-wrap justify-center m-24' >
    {startShips.map(s => <ItemDetail startships={s} />)}        
            </div>
  )
}

export default ItemDetailContainer