import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';
import CardContainer from './components/CardContainer';
import ProductListContainer from './components/ItemListFolder/ProductListContainer';
import HomeContainer from './components/HeroFolder/HomeContainer';
import DetailContainer from './components/ProductDetailFolder/DetailContainer';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import ProductDetail from './components/ProductDetailFolder/ProductDetail';
import ContactContainer from './components/ContactFolder/ContactContainer';

  
function App() {
 

  return (
    <div className="App bg-pink-100">

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomeContainer/>}></Route>
        <Route path='/producto' element={
          <div className="flex flex-column justify-center align-center">
          <ProductListContainer />
          </div>}>
        </Route>
        <Route path='/producto/:productId' element={<ProductDetail/>}></Route>
        <Route path='/contactos' element={<ContactContainer/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>


























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
