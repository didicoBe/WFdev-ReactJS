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
                    <FontAwesomeIcon icon={faFacebook} color="white" fontSize="35px"  className="redesocial" />
                    <FontAwesomeIcon icon={faBehance} color="white" fontSize="35px"  className="redesocial" />
                    <FontAwesomeIcon icon={faLinkedin} color="white" fontSize="35px"  className="redesocial" />
                    <FontAwesomeIcon icon={faGithub} color="white" fontSize="35px"  className="redesocial" />
                </Navbar.Text>
            </Navbar.Collapse>
            
        </Navbar>
    );
  }
}
