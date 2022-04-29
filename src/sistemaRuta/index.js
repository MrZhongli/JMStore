import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import NavBar from "../components/NavBar";
import ProductList from "../components/ItemListFolder/ProductList";

const index = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/list' element={<ProductList/>}/>
            <Route path='/contador' element={<Contador/>}/>
            <Route path='/'></Route>
            <Route path='/'></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default index