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
                        <div className="tamanhoCttMobile">
                            <Lottie
                                options={{
                                animationData: animation
                                }}
                            />
                        </div>
                    </Row>
                 
                

                    <Row className="TopoMargin">
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
                    
                    
                    <Row className="TopoMargin2">
                       <Col style={{marginRight:'-260px'}}>
                        <div className="textoCtt1Mobi">click para enviar um Zap</div>
                        <div className="textoCtt2Mobi">+55(11)99263-8184</div>
                        <div className="textoCtt2Mobi">+55(11)99263-8184</div>
                       </Col>
                       <Col>
                        <Image
                            src='/img/whatsapp-brands.png'
                            alt="whats"
                            fluid
                            className="ImgMailMobi"
                            
                        />
                       </Col>
                    </Row>
                    
            
        </Container>

      </div>
    );
  }
}
