import React from 'react'

const NoVocals = () => {
    const onKeyDown = (event)=>{
        console.log('Se introdujo una tecla', event.key)
        const vocales = 'aeiou';
        console.log(vocales.search)
        if(vocales.search(event.key) != -1){
            event.preventDefault()
        }
    }
  return (


    <div>
        <div>no se admiten vocales</div>
        <input onKeyDown={onKeyDown} type="text"  className="input w-full max-w-xs"></input>
    </div>
  )
}

export default NoVocals