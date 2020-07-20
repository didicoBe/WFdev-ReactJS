import React, { Component } from 'react';
import {Container , Row , Col,Image } from 'react-bootstrap'
import Lottie from 'lottie-react-web';
import animation from '../../animations/drawkit1.json'


import "./style.css"

export default class Home extends Component {
  render() {
    return (
      <div className="topoM"> 
        {/* desk */}
          <Container className="d-none d-lg-block">
            <Row>
                <Col>
                <div className="tamanho">
                    <Lottie
                        options={{
                        animationData: animation
                        }}
                    />
                </div>
                </Col>
                <Col>
                    <Row>
                        <div className="texto1">Dar vida a sua ideia é </div>
                        <div className="texto2">o nosso Objetivo </div>
                    </Row>
                    <Row className="icones">
                        <Col>
                            <Image 
                                src='/img/mobile-alt-solid.png'
                                alt="WF Desenvolvimento"
                                fluid
                            />
                        </Col>
                        <Col>
                            <Image 
                                src='/img/desktop-solid.png'
                                alt="WF Desenvolvimento"
                                fluid
                            />
                        </Col>
                        <Col>
                            <Image 
                                src='/img/shopping-cart-solid.png'
                                alt="WF Desenvolvimento"
                                fluid
                            />
                        </Col>
                        <Col>
                            <Image 
                                src='/img/chart-pie-solid.png'
                                alt="WF Desenvolvimento"
                                fluid
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
          </Container>


        {/* Mobi */}
          <Container className="d-xs-block d-lg-none">
            
                
                
                <Row className="justify-content-around">
                    <div className="texto1Mobi">Dar vida a sua ideia é </div>
                    <div className="texto2Mobi">o nosso Objetivo </div>
                </Row>
               
                
                <Row>
                    <div className="tamanhoMobi">
                        <Lottie
                            options={{
                            animationData: animation
                            }}
                        />
                    </div>
                </Row>

                <Row className="iconesMobi">
                    <Col>
                        <Image 
                            src='/img/mobile-alt-solid.png'
                            alt="WF Desenvolvimento"
                            fluid
                        />
                    </Col>
                    <Col>
                        <Image 
                            src='/img/desktop-solid.png'
                            alt="WF Desenvolvimento"
                            fluid
                        />
                    </Col>
                    <Col>
                        <Image 
                            src='/img/shopping-cart-solid.png'
                            alt="WF Desenvolvimento"
                            fluid
                        />
                    </Col>
                    <Col>
                        <Image 
                            src='/img/chart-pie-solid.png'
                            alt="WF Desenvolvimento"
                            fluid
                        />
                    </Col>
                </Row>
                
                <div className="proximo">
                    <img src="/img/chevron-down-solid.png" className="chev"/>
                </div>
            
          </Container>
      </div>
    );
  }
}
