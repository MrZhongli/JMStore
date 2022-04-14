import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const styles= {
    header:"text-3xl font-bold underline text-orange-500"
  }

  return (
    <div className="App">
      <NavBar/>
      <h1 className="">This is JMStore on dev</h1>
      <h1 className={styles.header}>
      This is JMStore on dev 
    </h1>
  
    <Footer/>
    </div>
  );
}

export default App;
