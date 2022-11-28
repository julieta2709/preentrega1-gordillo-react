import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Products from './components/Products';

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <ItemListContainer greeting={"No se encontraron Productos!"}/>
      <Products />
    </div>
  );
}

export default App;
