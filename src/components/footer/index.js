import React, { Component } from 'react';
import {Container , Row , Col,Image, Button,Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
                    className="d-none d-lg-block logoFot"
                    />
            </Navbar.Brand>

            
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <FontAwesomeIcon icon="check-square" />
                </Navbar.Text>
            </Navbar.Collapse>
            <Navbar.Text>
                    <FontAwesomeIcon icon="check-square" />
                </Navbar.Text>
        </Navbar>
    );
  }
}
