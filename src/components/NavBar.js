import React from "react";
import { Link } from "react-router-dom"
import CartWidget from "./CartFolder/CartWidget";

export const NavBar = () => {

  // const estilos={position:'fixed', zIndex: 1000}
   
  return (
    <div  className="navbar bg-pink-200 bg-transparent z-100 " >
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Rosse Papeleria</a>
    </div>
    <div className="flex-none">
      <ul className="flex flex-row">
        <li className="mx-8 "><a className="text-black "><Link to={'/'}>Inicio </Link> </a></li>
        <li className="mx-8 "><a className="text-black "><Link to={'/producto'}>Productos </Link> </a></li>
        <li className="mx-8 "><a href="https://drive.google.com/file/d/1HmpQcayuXzeo9x7StX-dH67h-fdGk_mw/view"  className="text-black ">  Catalogo </a></li>
        <li className="mx-8 "><a className="text-black "><Link to={'/contactos'}> Contactos  </Link></a></li>
      </ul>
      <CartWidget/>
    </div>
  </div>
  )
}

export default NavBar