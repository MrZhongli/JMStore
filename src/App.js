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
      <h1 className="my-16">This is JMStore on dev</h1>
      
    
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
