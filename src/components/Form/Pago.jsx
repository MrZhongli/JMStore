import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Pago = () => {
    
    // const MySwal = withReactContent(Swal)
    const { cart , total, deleteCart} = useCartContext()
    
    const armarCompra = async(datosClientes)=>{
        const productosCompra = cart.map((element)=>{
            return{
                id: element.id,
                name: element.name,
                price: element.price,
                quantity: element.quantity
            }
        });
    // Array de compra
    const compra = {
        cliente: [datosClientes],
        productos:[...productosCompra],
        total: total()
    };
// Grabar compra en fireBase
    const db = getFirestore()
    const comprasColeccion = collection(db, 'compras')
    const response = await addDoc(comprasColeccion, compra)

    deleteCart()

    const MySwal = withReactContent(Swal)

    await MySwal.fire({
    title: <strong>Gracias por tu compra</strong>,
    html: <i>Para para seguir comprando vaya al inicio</i>,
    icon: 'success'
    })

}
const [cliente, setCliente] = useState({
    nombre:       "",
    apellido:     "",
    mail:         "",
    celular:      "",
    direccion:    "",
    depto:        "",
    provincia:    "",
});

function handleInput(event) {
    const target = event.target;
    const value = target.value;
    const nameInput = target.name;
    setCliente({ ...cliente , [nameInput]: value });
}

  return (
      
      <>
          {
              cart.length > 0 ? (
                  <div>
                      <div className="py-12 flex justify-center">
                          <div className="max-w-md     md:max-w-xl mx-2">
                              <form className="md:flex  ">
                                  <div className="w-full p-4 px-5 py-5">
                                      <div className="flex flex-row mb-6">
                                          <h2 className="text-3xl font-semibold">
                                              Formulario de pago y env??o
                                          </h2>
                                      </div>
                                      <div className="mb-6">
                                          <span className="text-gray-500 body-font font-medium ml-4">Datos personales</span>
                                          <div className="grid md:grid-cols-2 md:gap-2">
                                              <input
                                                  type="text"
                                                  name="nombre"
                                                  onChange={(event) =>
                                                      handleInput(event)
                                                  }
                                                  value={cliente.nombre}
                                                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                                  placeholder="Nombre*"
                                              />
                                              <input
                                                  type="text"
                                                  name="apellido"
                                                  onChange={(event) =>
                                                      handleInput(event)
                                                  }
                                                  value={cliente.apellido}
                                                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                                  placeholder="Apellido*" />
                                          </div>
                                          <div className="grid md:grid-cols-3 md:gap-2">
                                              <input
                                                  type="email"
                                                  name="mail"
                                                  onChange={(event) =>
                                                      handleInput(event)
                                                  }
                                                  value={cliente.mail}
                                                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm col-start-1 col-end-3"
                                                  placeholder="E-mail*" />
                                              <input
                                                  type="text"
                                                  name="celular"
                                                  onChange={(event) =>
                                                      handleInput(event)
                                                  }
                                                  value={cliente.celular}
                                                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm "
                                                  placeholder="Celular*" />
                                          </div>
                                      </div>

                                      <div className="mb-6">
                                          <span className="text-gray-500 body-font font-medium ml-4">Direcci??n de env??o</span>
                                          <input
                                              type="text"
                                              name="direccion"
                                              onChange={(event) =>
                                                  handleInput(event)
                                              }
                                              className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                              placeholder="Calle y N??mero*" />
                                          <div className="grid md:grid-cols-2 md:gap-2">
                                              <input
                                                  type="text"
                                                  name="depto"
                                                  onChange={(event) =>
                                                      handleInput(event)
                                                  }
                                                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                                  placeholder="Piso y Departamento" />
                                              <input
                                                  type="number"
                                                  name="cp"
                                                  onChange={(event) =>
                                                      handleInput(event)
                                                  }
                                                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                                  placeholder="C??digo Postal*" />
                                          </div>

                                          <input
                                              type="text"
                                              name="provincia"
                                              onChange={(event) =>
                                                  handleInput(event)
                                              }
                                              className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                              placeholder="Provincia*" />
                                      </div>

                                      <div className="mb-6">


                                          <div className="flex justify-end mb-6">
                                              <h4 className="text-gray-600 title-font text-lg font-medium ">
                                                  Total a pagar: CL$ {total()}
                                              </h4>
                                          </div>

                                          <div className="text-gray-600 body-font flex justify-between items-center pt-2">
                                              <Link to="../carrito">
                                                  <button
                                                      type="button"
                                                      className="inline-flex items-center border-0 py-1 px-3 mx-3 mt-10 focus:outline-none bg-pink-300 hover:bg-pink-800 hover:text-white rounded-full   md:mt-0 text-lg font-bold">
                                                      Volver
                                                  </button>
                                              </Link>
                                              <Link to="../catalogo/todo">
                                                  <button
                                                      type="button"
                                                      className="inline-flex items-center border-0 py-1 px-3 mx-3 mt-10 focus:outline-none bg-pink-300 hover:bg-pink-800 hover:text-white rounded-full   md:mt-0 text-lg font-bold" >
                                                      Seguir comprando
                                                  </button>
                                              </Link>
                                              {total() > 0 &&
                                                  
                                                      <button
                                                          type="button"
                                                          value="Submit"
                                                          className="inline-flex items-center border-0 py-1 px-3 mx-3 mt-10 focus:outline-none bg-pink-300 hover:bg-pink-800 hover:text-white rounded-full   md:mt-0 text-lg font-bold"
                                                          onClick={() => { armarCompra(cliente) }} >
                                                          Finalizar compra
                                                      </button>
                                              }
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              )
                  :
                  <div>
                      <h1 className='text-3xl m-10'>No hay productos en tu carrito </h1>
                      <Link to="/" className='btn btn-primary m-10'>ir a inicio</Link>
                  </div>
          }

      </>
  )
}

export default Pago