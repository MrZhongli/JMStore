import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useCartContext } from "../Context/CartContext";


const Cart = () => {
    const {cart, total} = useCartContext()
    
   
    if (cart.length === 0) {
        return (
            <div className="flex-auto justify-center mx-auto">
                <h2 className="flex justify-center flex-auto mt-4 text-2xl font-bold text-gray-600">
                    No hay productos en su carrito, pero visita nuestro catalogo...
                </h2>
                    <div className="flex justify-center ">
                     <Link to="../producto">
                        <button className=" btn inline-flex items-center border-0 py-1 px-3 mx-1 mt-10 ">
                            Ir al catálogo
                        </button>
                        </Link>
                    </div>
            </div>
        );
    } else {
        return (
            <div>
                {/* Detalle de cada producto agregado */}
                <div>
                    {cart.map((item) => {
                        return <CartItem key={item.id} item={item}></CartItem>;
                    })}
                    </div>

                {/* Totalizados */}
                <div className="flex flex-col flex-auto ">
                    <h3 className="flex justify-center text-blue-700 text-s font-medium">
                        {/* Productos en el carrito: {contarItems */}
                    </h3>
                    <h3 >
                        {/* Precio total del carrito: AR$ {precioTotal()} */}
                    </h3>
                </div>
                    <h1 className="flex justify-center text-blue-700 text-s font-medium">Total: ${total()}</h1>

                {/* Botones */}
                <div className=" flex flex-wrap justify-center mt-6 mb-20">
                    <Link to="../pago">
                        <button className="inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full   md:mt-0 text-lg font-bold animate-bounce">
                            Ir a pagar
                        </button>
                    </Link>
                    {/* <button onClick={deleteCart} className="inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full   md:mt-0 text-lg font-bold">
                        Vaciar carrito
                    </button> */}
                    <Link to="../producto">
                        <button className="inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full   md:mt-0 text-lg font-bold">
                            Seguir comprando
                        </button>
                    </Link>
                </div>
            </div>
        );


   
    
    
    


   
}
}

export default Cart