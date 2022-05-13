import React from "react";
import { Link } from "react-router-dom"
import CartWidget from "./CartFolder/CartWidget";

export const NavBar = () => {

  // const estilos={position:'fixed', zIndex: 1000}
   
  return (
    <div  className="navbar bg-pink-200 bg-transparent " >
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
      <div className="dropdown dropdown-end">
        <label tabindex="0" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" />
          </div>
        </label>
        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default NavBar