import React from 'react'

const HeroContainer = () => {
  return (
    <div className="hero min-h-screen bg-transparent">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Rosse Papeleria </h1>
      <p className="py-6">Has tu vida mas fácil y ordenada, Planners personalizados hecho a tu gusto!</p>
      <button className="btn btn-primary">Get Started</button>
    
    <div className='m-8'> 
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