import React, { Component } from 'react';
import { Navbar, Nav,Image  } from 'react-bootstrap';

import './style.css';

export default class Topo extends Component {
  render() {
    return (
      <div> 
          <Navbar bg="fundoTopo" className="fundoTopo" expand="lg" fixed="top">
            <Navbar.Brand href="#home">
             <div className="logo">
                <Image 
                    src='/img/logoDesk.png'
                    alt="WF Desenvolvimento"
                    fluid
                    className="d-none d-lg-block marginDesk"
                    />
                <Image 
                    src='/img/logoMobi.png'
                    alt="WF Desenvolvimento"
                    fluid
                    className="d-xs-block d-lg-none tamanhoP"
                    />
             </div>   
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav " className="flex-row-reverse">
                <Nav className="mr-5">
                    <Nav.Link href="#home" className="linkTopoAtiv">{"<Home>"}</Nav.Link>
                    <Nav.Link href="#link" className="linkTopo">Sobre</Nav.Link>
                    <Nav.Link href="#link" className="linkTopo">Servicos</Nav.Link>
                    <Nav.Link href="#link" className="linkTopo">Orcamento</Nav.Link>
                    <Nav.Link href="#link" className="linkTopo">Contato</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
      </div>
    );
  }
}
