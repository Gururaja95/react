import React from 'react';
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";
import { Title } from "./components/Title/Title";



 export const App = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <div className="container">
        <Title />
      <Shop />

      </div>
      
      
    </div>
  );
}

export default App;