import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductListContainer from './components/ItemListFolder/ProductListContainer';
import HomeContainer from './components/HeroFolder/HomeContainer';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import ProductDetail from './components/ProductDetailFolder/ProductDetail';
import ContactContainer from './components/ContactFolder/ContactContainer';
import AppContextProvider from './components/Context/AppContext';
import CartContextProvider from './components/Context/CartContext';
import Cart from './components/CartFolder/Cart';
import Pago from './components/Form/Pago';
// import GetProducts from './components/firebase/firebaseClient';

  
function App() {
 

  return (
    <div className="App bg-pink-100">
      <AppContextProvider>
      <CartContextProvider>
      <BrowserRouter>
      <NavBar/>
     
      <Routes>
        <Route path='/' element={<HomeContainer />}></Route>
        <Route path='/producto' element={<div><ProductListContainer /></div>}></Route>
        <Route path='/producto/:productId' element={<ProductDetail />}></Route>
        <Route path='/contactos' element={<ContactContainer />}></Route>
        <Route path='/carrito' element={<Cart />}></Route> 
        <Route path='/pago' element={<Pago />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

      </CartContextProvider>
      </AppContextProvider>
    


























      {/* <NavBar />
      <HomeContainer/>
      <h1 className="my-16">Productos</h1>
      
    
    <CardContainer className="flex flex-row ...">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </CardContainer>
    <ItemListContainer />
    promesas
      <h1>Promesas Productos Catalogo</h1>
    <div className="flex flex-column justify-center align-center">
      <ProductListContainer/>

     
    </div>
    <hr/>
    


    <div>
      <h1 className='m-16'>DESAFIO 6</h1>
      <div className='flex flex-row ...'>
      <DetailContainer/>
      </div>
    </div>
    
    
    <Footer/> */}
    </div>
  );
}

export default App;
