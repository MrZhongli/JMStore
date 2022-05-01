import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';
import CardContainer from './components/CardContainer';
import ItemListContainer from './components/ItemListFolder/ItemListContainer';
import  ItemDetailContainer  from './components/ItemDetailFolder/ItemDetailContainer';
import ProductListContainer from './components/ItemListFolder/ProductListContainer';

import HomeContainer from './components/HeroFolder/HomeContainer';
 


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
    promesas
      <h1>Promesas Productos Catalogo</h1>
    <div className="flex flex-column justify-center align-center">
      <ProductListContainer/>
      {/* <ItemListContainer /> */}

     
    </div>
    <hr/>
    {/* Consumir Api
    <div>
      <h1 className='m-16'>starWars container con imagenes de zapatos temporalmente</h1>
      <div className='flex flex-row ...'>
        <ItemDetailContainer/>
      </div>
    </div> */}
    
    <Footer/>
    </div>
  );
}

export default App;
