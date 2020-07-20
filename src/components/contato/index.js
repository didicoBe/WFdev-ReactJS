import React, { Component } from 'react';
import Lottie from 'lottie-react-web';
import animation from '../../animations/drawkit5.json';
import {Container , Row , Col,Image, Button } from 'react-bootstrap';


import "./style.css"

export default class Contato extends Component {
  render() {
    return (
      <div> 
        {/* desk */}
        <Container className="d-none d-lg-block">
            <Row>
                <Col>
                    <Row>
                        <div className="Titulos">{"</Contato>"}</div>
                        <div className="tamanhoProj">
                            <Lottie
                                options={{
                                animationData: animation
                                }}
                            />
                        </div>
                    </Row>
                </Col>  
                <Col>

                    <Row className="TopoMargin">
                       <Col lg={3}>
                        <Image
                            src='/img/mail.png'
                            alt="email"
                            fluid
                            className="ImgMail"
                        />
                       </Col>
                       <Col>
                        <div className="textoCtt1">click para enviar um e-mail</div>
                        <div className="textoCtt2">contato@wfdesenvolvimento.com.br</div>
                       </Col>
                       
                        
                    </Row>
                    
                    
                    <Row className="TopoMargin2">
                       <Col>
                        <div className="textoCtt1">click para enviar um Zap</div>
                        <div className="textoCtt2">+55(11)99263-8184</div>
                        <div className="textoCtt2">+55(11)99263-8184</div>
                       </Col>
                       <Col lg={3}>
                        <Image
                            src='/img/whatsapp-brands.png'
                            alt="whats"
                            fluid
                            className="ImgMail"
                        />
                       </Col>
                    </Row>
                </Col>  
            </Row>
        </Container>
          
      </div>
    );
  }
}
