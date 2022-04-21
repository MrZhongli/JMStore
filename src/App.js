import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';
import CardContainer from './components/CardContainer';

function App() {
 

  return (
    <div className="App">
      <NavBar/>
      <h1 className="my-16">Productos</h1>
      
    
    <CardContainer className="flex flex-row">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </CardContainer>

  
    <Footer/>
    </div>
  );
}

export default App;
