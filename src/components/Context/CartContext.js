import React, { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
	// Logica
	const [cart, setCart] = useState([])

	const quantity = () => cart.reduce((sum, i) => { return sum + i.quantity }, 0)
  	const total = () => cart.reduce((sum, i) => { return sum + (i.quantity * i.price) }, 0)

	// Validar si está el item en el carrito
	const isInCart = (id) => cart.find((producto) => producto.id === id)

  //Agregar item al carro
  const addToCart = ( producto, cantidad ) => {
    const newCart = [...cart]
    const productoIsInCart = isInCart(producto.id)
    if (productoIsInCart) {
      newCart[newCart.findIndex((prod) => prod.id == productoIsInCart.id)].quantity += cantidad
      setCart(newCart)
      return
    }
    producto.quantity = cantidad
    setCart([...newCart, producto])
  }

	function contarItems() { 
        let iTotales = 0;
        cart.forEach ( element => iTotales += element.cantidad );
        return iTotales;
    }

	const deleteFromCart = (producto) => {
		const newCart = [...cart]

		const productIsInCart = isInCart(producto.id)

		if (!productIsInCart) {
			return
		}

		const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)

		setCart(deleteProduct)
	}
	function eliminarItem(id) {
        setCart(cart.filter( elemento => elemento.id !== id ) )
    }

	const deleteCart = () => setCart([])

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				contarItems,
				deleteFromCart,
				eliminarItem,
				deleteCart,
				setCart,
				contarItems,
				quantity,
				total,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
