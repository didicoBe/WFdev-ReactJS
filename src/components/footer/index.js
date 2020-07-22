import React, { Component } from 'react';
import {Container , Row , Col,Image, Button,Navbar } from 'react-bootstrap';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons'


import "./style.css"


export default class Footer extends Component {
  render() {
    return (
        <Navbar className="footer">
            <Navbar.Brand href="#home">
                <Image 
                    src='/img/LogoNEGATIVO.png'
                    alt="WF Desenvolvimento"
                    fluid
                    className="logoFot"
                    />
            </Navbar.Brand>

            
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text >
                    <a target="_blank" href="https://www.facebook.com/wfdesenvolvimento/">
                        <FontAwesomeIcon icon={faFacebook} color="white" fontSize="35px"  className="redesocial" />
                    </a> 
                    <a target="_blank" href="https://www.behance.net/didico">
                        <FontAwesomeIcon icon={faBehance} color="white" fontSize="35px"  className="redesocial" />
                    </a>                    
                    <a target="_blank" href="https://www.linkedin.com/in/waldir-bertuqui-neto/">
                        <FontAwesomeIcon icon={faLinkedin} color="white" fontSize="35px"  className="redesocial" />
                    </a>
                    <a target="_blank" href="https://github.com/didicoBe">
                        <FontAwesomeIcon icon={faGithub} color="white" fontSize="35px"  className="redesocial" />
                    </a>                    
                </Navbar.Text>
            </Navbar.Collapse>
            
        </Navbar>
    );
  }
}
