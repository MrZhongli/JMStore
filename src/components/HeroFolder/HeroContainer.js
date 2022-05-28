import React from 'react'
// import webPresentation from '../../webPresentation.svg'

const HeroContainer = () => {
  return (
    <div className="hero  ">
      <img className='relative mb-5' src='https://firebasestorage.googleapis.com/v0/b/rosse-papeleria.appspot.com/o/webPresentation.svg?alt=media&token=da006ee5-e2fb-4ece-8a88-a6ab56d3d87f' />
      <div className="hero-content flex-col-reverse mt-10 lg:flex-row-reverse">
        <img  src="https://www.orem.com.mx/wp-content/uploads/2021/09/imagenes-cuadradas-sin-fondo-para-web.png" className="max-w-sm rounded-lg shadow-2xl md:hidden sm:hidden lg:block " />
        <div>
          <h1 className="text-5xl font-bold">Rosse Papeleria </h1>
          <p className="py-6">Haz tu vida mas fácil y ordenada, Planners personalizados hecho a tu gusto	♥!</p>
          <a href='https://drive.google.com/file/d/1HmpQcayuXzeo9x7StX-dH67h-fdGk_mw/view' className="btn btn-primary">Ver Catalogo</a>
          <div className='m-6 my-30'>
            <div className="indicator m-6">
              <span className="indicator-item badge badge-secondary"></span>
              <div className="grid w-32 h-32 bg-pink-200 place-items-center animate-bounce "><img className="w-24 h-24" src="https://i.pinimg.com/originals/29/e8/26/29e8266620709a35483d4d5ec77f508c.jpg"/></div>
            </div>
            <div className="indicator m-6">
              <span className="indicator-item badge badge-secondary"></span>
              <div className="grid w-32 h-32 bg-pink-200 place-items-center animate-bounce"><img className="w-24 h-24" src="https://i.pinimg.com/236x/f0/43/e0/f043e0fd8df26afa7347b4de82b8bb93--planner.jpg"/></div>
            </div>
            <div className="indicator m-6">
              <span className="indicator-item badge badge-secondary"></span>
              <div className="grid w-32 h-32  bg-pink-200 place-items-center animate-bounce"><img className="w-24 h-24" src="https://i.pinimg.com/236x/d2/f2/d1/d2f2d1f2f6a4db5b3ef104ead80aae77.jpg"/></div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default HeroContainer