import React from 'react'
import webPresentation from '../../webPresentation.svg'

const HeroContainer = () => {
  return (
    <div className="hero min-h-screen bg-transparent">
      <img  src={webPresentation} />
  <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="https://www.orem.com.mx/wp-content/uploads/2021/09/imagenes-cuadradas-sin-fondo-para-web.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Rosse Papeleria </h1>
      <p className="py-6">Has tu vida mas fácil y ordenada, Planners personalizados hecho a tu gusto!</p>
  
      <a href='https://drive.google.com/file/d/1HmpQcayuXzeo9x7StX-dH67h-fdGk_mw/view' className="btn btn-primary">Ver Catalogo</a> 
    
    <div className='m-8 my-40'> 
      <div className="indicator">
      <span className="indicator-item badge badge-secondary"></span> 
      <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
      <div className="indicator">
      <span className="indicator-item badge badge-secondary"></span> 
      <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
      <div className="indicator">
      <span className="indicator-item badge badge-secondary"></span> 
      <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
    
    </div>
    </div>
    
  </div>
  
</div>
  )
}

export default HeroContainer