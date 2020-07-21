import React from 'react';
import './App.css';
import Lottie from 'lottie-react-web';
import animation from './animations/drawkit5.json'


import 'bootstrap/dist/css/bootstrap.css';


import Topo from "./components/topo";
import Home from "./components/home";
import Sobre from "./components/sobre";
import Proj from "./components/proj";
import Orcamento from "./components/orcamento";
import Contato from "./components/contato";
import Footer from "./components/footer";



function App() {
  return (
    <div className="App" id="topo">
        <Topo/>
        <Home/>
        <Sobre/>
        <Proj/>
        <Orcamento/>
        <Contato/>
        <Footer/>
    </div>
  );
}

export default App;
