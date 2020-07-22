import React, { Component } from 'react';
import Lottie from 'lottie-react-web';
import animation from '../../animations/drawkit5.json';
import {Container , Row , Col,Image, Button } from 'react-bootstrap';


import "./style.css"

export default class Contato extends Component {
  render() {
    return (
      <div id="contato"> 
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
          

        {/* Mobile */}
        <Container className="d-xs-block d-lg-none">
        
                
                   
                                
                
                    <Row>
                    <div className="Titulos">{"</Contato>"}</div>
                    </Row>
                    <Row className="TopoMarginM">
                        
                       <Col xs={4}>
                        <Image
                            src='/img/mail.png'
                            alt="email"
                            fluid
                            className="ImgMailMobi"
                        />
                       </Col>
                       <Col xs={8} style={{marginLeft:'-70px'}} >
                        <div className="textoCtt1Mobi">click para enviar um e-mail</div>
                        <div className="textoCtt2Mobi">contato@wfdesenvolvimento.com.br</div>
                       </Col>
                       
                        
                    </Row>
                    
                    
                    <Row className="TopoMargin2M">
                       <Col style={{marginRight:'-80px'}} xs={8}>
                        <div className="textoCtt1Mobi">click para enviar um Zap</div>
                        <div className="textoCtt2Mobi"><a target="_blank" href="https://wa.me/5511992638184?text=Ola%20Gostaria%20de%20informações%20sobre%20sites">+55(11)99263-8184</a></div>
                        <div className="textoCtt2Mobi"><a target="_blank" href="https://wa.me/5511959164987?text=Ola%20Gostaria%20de%20informações%20sobre%20sites">+55(11)95916-4987</a></div>
                       </Col>
                       <Col xs={4}>
                        <a target="_blank" href="https://wa.me/5511992638184?text=Ola%20Gostaria%20de%20informações%20sobre%20sites">
                            <Image
                                src='/img/whatsapp-brands.png'
                                alt="whats"
                                fluid
                                className="ImgMailMobi"
                                
                            />
                        </a>
                        
                       </Col>
                    </Row>
                    <Row>
                        
                        <div className="tamanhoCttMobile">
                            <Lottie
                                options={{
                                animationData: animation
                                }}
                            />
                        </div>
                    </Row>
                    
            
        </Container>

      </div>
    );
  }
}
