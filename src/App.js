import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';
import CardContainer from './components/CardContainer';
import ItemListContainer from './components/ItemListFolder/ItemListContainer';
import ProductListContainer from './components/ItemListFolder/ProductListContainer';

import HomeContainer from './components/HeroFolder/HomeContainer';
import DetailContainer from './components/ProductDetailFolder/DetailContainer';
 


function App() {
 

  return (
    <div className="App bg-gray-300">
      <NavBar />
      <HomeContainer/>
      {/* <h1 className="my-16">Productos</h1>
      
    
    <CardContainer className="flex flex-row ...">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </CardContainer> */}
      {/* <ItemListContainer /> */}
    {/* promesas
      <h1>Promesas Productos Catalogo</h1>
    <div className="flex flex-column justify-center align-center">
      <ProductListContainer/>

     
    </div> */}
    <hr/>
    


    <div>
      <h1 className='m-16'>DESAFIO 6</h1>
      <div className='flex flex-row ...'>
      <DetailContainer/>
      </div>
    </div>
    
    
    <Footer/>
    </div>
  );
}

export default App;
