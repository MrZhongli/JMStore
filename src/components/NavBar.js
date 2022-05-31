import React from "react";
import { Link } from "react-router-dom"
import CartWidget from "./CartFolder/CartWidget";

export const NavBar = () => {
  return (

    <div className="navbar ">
      <div className="navbar-start  ">
        <div className="flex-none lg:block sm:hidden  ">
          <ul className="flex flex-row">
            <li className="mx-8 "><Link to={'/'} className="text-black ">Inicio </Link></li>
            <li className="mx-8 "><Link to={'/producto'} className="text-black ">Productos </Link> </li>
            <li className="mx-8 "><a href="https://drive.google.com/file/d/1HmpQcayuXzeo9x7StX-dH67h-fdGk_mw/view" className="text-black ">  Catalogo </a></li>
            <li className="mx-8 "><Link to={'/contactos'} className="text-black "> Contactos  </Link></li>
          </ul>
        </div>
        <div className="dropdown md:block lg:hidden ">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3  shadow bg-gray-400 rounded-box w-screen h-96 column justify-center align-center m-auto">
            <li className="px-2 mx-auto"><Link to={'/'} className="text-white ">Inicio </Link> </li>
            <li className="px-2 mx-auto"><Link to={'/producto'} className="text-white ">Productos </Link> </li>
            <li className="px-2 mx-auto"><a href="https://drive.google.com/file/d/1HmpQcayuXzeo9x7StX-dH67h-fdGk_mw/view" className="text-white ">Catalogo</a></li>
            <li className="px-2 mx-auto"><Link to={'/contactos'} className="text-white "> Contactos  </Link></li>
          </ul>
        </div>  
      </div>
      <div className="navbar-center">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">ROSSE PAPELERIA</Link>
      </div>
      <div className="navbar-end">
        <Link to="/carrito"><CartWidget /></Link>
      </div>
    </div>
  )
}

export default NavBar