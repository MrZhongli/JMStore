import React from 'react'

const WatchUs = () => {
  return (
    <div className="hero min-h-screen ">
      
      <div className="hero-content text-center flex-col lg:flex-row flex-flow basis-1 grow">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-black">Siguenos en nuestro <a href='https://www.instagram.com/rossepapeleria/'><strong><i>instagram</i> </strong></a></h1>
          <p className="py-6 text-black">Para mas info y agendas que te pueden gustar</p>
        </div>
      </div>
      <img src='https://i.pinimg.com/originals/16/4a/5a/164a5a83a26eef0f41c0379e6836cf7c.png'></img>
      {/* <img src="https://eltallerdehector.com/wp-content/uploads/2021/06/Instagram-Logo-png.png" className="max-w-sm sm:hidden md:block basis-1 rounded-lg shadow-2xl" /> */}
    </div>
  )
}

export default WatchUs