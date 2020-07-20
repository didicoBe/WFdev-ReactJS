import React from 'react';
import './App.css';
import Lottie from 'lottie-react-web';
import animation from './animations/drawkit5.json'


import 'bootstrap/dist/css/bootstrap.css';


import Topo from "./components/topo";
import Home from "./components/home";
import Sobre from "./components/sobre";
import Proj from "./components/proj";


function App() {
  return (
    <div className="App">
        <Topo/>
        <Home/>
        <Sobre/>
        <Proj/>
        
       
    </div>
  );
}

export default App;
