import React, { Component } from 'react';
import { Navbar, Nav,Image  } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";

import './style.css';

export default class Topo extends Component {

  
  state = {navExpanded: false};

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  

  setNavExpanded = ()=> {
    this.setState({ navExpanded: true });
  }

  closeNav= ()=> {
    this.setState({ navExpanded: false });
  }


  componentDidMount(){
    document.body.addEventListener('click', this.closeNav);
  }




  render() {
    
    return (
      <div> 
          <Navbar bg="fundoTopo" className="fundoTopo" expand="lg" fixed="top" 
          onToggle={()=>{this.setNavExpanded()}}
          expanded={this.state.navExpanded}
          >
            <Navbar.Brand href="#home">
             <div className="logo">
                <Image 
                    src='/img/logoDesk.png'
                    alt="WF Desenvolvimento"
                    fluid
                    className="d-none d-lg-block marginDesk"
                    onClick={this.scrollToTop}
                    />
                <Image 
                    src='/img/logoMobi.png'
                    alt="WF Desenvolvimento"
                    fluid
                    className="d-xs-block d-lg-none tamanhoP"
                    onClick={this.scrollToTop}
                    />
             </div>   
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="flex-row-reverse">
                <Nav className="mr-5">
               
                    <Nav className="linkTopo">
                    <Link
                        activeClass="active"
                        to="topo"
                        spy={true}
                        smooth={true}
                        offset={-140}
                        duration={500}
                        onClick={()=>{this.closeNav()}}
                          >Home</Link>
                    </Nav>
                
                    <Nav className="linkTopo">
                      <Link
                        activeClass="active"
                        to="sobre"
                        spy={true}
                        smooth={true}
                        offset={-140}
                        duration={500}
                        onClick={()=>{this.closeNav()}} 
                          >Sobre</Link>
                    </Nav>
                    <Nav className="linkTopo">
                      <Link
                            activeClass="active"
                            to="servico"
                            spy={true}
                            smooth={true}
                            offset={-140}
                            duration={500}
                            onClick={()=>{this.closeNav()}}
                        >
                        Servicos
                        </Link>
                    </Nav>
                    <Nav className="linkTopo">
                      <Link
                        activeClass="active"
                        to="orcamento"
                        spy={true}
                        smooth={true}
                        offset={-140}
                        duration={500}
                        onClick={()=>{this.closeNav()}}
                        >Orcamento</Link>
                      </Nav>
                    <Nav className="linkTopo">
                      <Link
                        activeClass="active"
                        to="contato"
                        spy={true}
                        smooth={true}
                        offset={-140}
                        duration={500}
                        onClick={()=>{this.closeNav()}}
                          >Contato</Link>                          
                    </Nav>
                    <Nav className="linkTopo">
                      <a style={{textDecoration:'none'}}
                        href ="http://user.wfdesenvolvimento.com.br"
                        onClick={()=>{this.closeNav()}}
                          >Login</a>                          
                    </Nav>

                </Nav>
            </Navbar.Collapse>
            </Navbar>
      </div>
    );
  }
}
