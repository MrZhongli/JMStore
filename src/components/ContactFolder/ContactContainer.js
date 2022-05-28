import React from 'react'

const ContactContainer = () => {
  return (
    <div className="hero min-h-screen bg-pink-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contactanos</h1>
      <p className="py-6">En breves momentos nos contactaremos contigo</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-pink-200">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Nombre</span>
          </label>
          <input type="text" placeholder="Escribe tu nombre" className="input input-bordered bg-gray-100 text-black"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Teléfono</span>
          </label>
          <input type="text" placeholder="Escribe tu numero" className="input input-bordered bg-gray-100 text-black"/>
          <label className="label">
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Escribenos tu consulta</span>
          </label>
          <textarea  type="text" placeholder="Escribe tu consulta" className="input input-bordered bg-gray-100 text-black"/>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ContactContainer