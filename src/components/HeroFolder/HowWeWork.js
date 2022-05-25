import React from 'react'
import { Link } from 'react-router-dom'

const HowWeWork = () => {
  return (
    <div  className="hero min-h-screen">
  <div  className="hero-content text-center flex-col lg:flex-row-reverse">
  <img src="https://impulsapopular.com/wp-content/uploads/2018/12/4300-Cinco-elementos-esenciales-para-una-agenda-productiva.jpg"  className="max-w-sm rounded-lg shadow-2xl mx-10" />
    <div  className="max-w-md">
      <h1  className="text-5xl font-bold justify-center flex">Como trabajamos...</h1>
      <p  className="p-5 ">paso 1: Ingresar a productos </p>
      <p   className="p-5"> paso 2: Seleccionar la cantidad y producto deseado</p>
      <p  className="p-5"> paso 3: Ingresar datos en el cual se le enviara el producto</p>
      <Link to="/producto" className='btn btn-primary'>Ir a productos</Link>
      

    </div>
  </div>
</div>
  )
}

export default HowWeWork