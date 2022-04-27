import React from 'react'
import { useEffect , useState} from 'react'

const ItemListContainer = () => {

    const countriesList = ['mexico','argentina','Estados Unidos', 'Venezuela', 'Churuguara']

    const [countries, setCountries] = useState([])

    useEffect(() => {
      console.log('[ItemListContainer] mounting')
      console.log('listas de paises', countriesList)
    
     const promesa = new Promise( ( res , rej )=>{
        const Random = Math.random()
        console.log('random number', Random)

        setTimeout( ()=> {
          if(Random >= 0.5){
            res(countriesList)
          }else{
            rej('Promesa Rechazada!!!')
          }
        },5000 )

     });

     promesa.then( result => {
      console.log('La promesa fue satisfecha',result)
      setCountries(result)
     })
     .catch( err => {
      console.log('La promesa fue rechazada',err)
     })

     console.log('Se termino de ejecutar lo del UseEffect')

    }, [])
    

  return (
    <div>{countries.map( (c,i) => <div key={i} class="badge badge-ghost flex flex-column "> {c} </div>)}</div>
  )
}

export default ItemListContainer