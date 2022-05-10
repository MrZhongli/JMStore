import React, { createContext, useContext, useEffect, useState } from "react"
import { getItemData } from "../../Data/productData"


const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		getItemData().then((resp) => setProducts(resp))
	})
	return (
		<AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
	)
}

export default AppContextProvider
