import React, { Component } from 'react'
import {Container , Row , Col,Image } from 'react-bootstrap'
import Lottie from 'lottie-react-web';
import animation from '../../animations/drawkit2.json'


import "./style.css"

export default class Sobre extends Component {
    render() {
        return (
            <div id="sobre">
                {/* desk */}
                <Container className="d-none d-lg-block">
                    <Row>
                        
                        <Col>
                            <Row>
                                <div className="Titulos">{"</Sobre>"}</div>
                                <div className="textoSobre">
                                    A WF Desenvolvimento é uma empresa familiar no ramo de programação de sistemas, afim de criar, desenvolver e oferecer o melhor para os nossos clientes.
                                    Queremos ajudar você e o seu negócio a fazer parte de um setor que só cresce no Brasil, o empreendedorismo.
                                    Com isso estamos aqui para lhe apresentar soluções para facilitar o contato entre você e o seu cliente, fazendo com que o seu negócio cresça cada vez mais.
                                    Tudo o que você precisa, nós podemos fazer!<br/>
                                    <br/>
                                    Conte com um empresa que tem mais de 10 anos de experiencia no mercado.

                                </div>
                            </Row>
                        </Col>
                        <Col>
                        <div className="tamanho">
                            <Lottie
                                options={{
                                animationData: animation
                                }}
                            />
                        </div>
                        </Col>
                    </Row>
                </Container>
                
                {/* mobile */}
                <Container className="d-xs-block d-lg-none">
                        <Row>
                            <div className="Titulos">{"</Sobre>"}</div>
                            <div className="textoSobreMobi">
                                A WF Desenvolvimento é uma empresa familiar no ramo de programação de sistemas, afim de criar, desenvolver e oferecer o melhor para os nossos clientes.
                                Queremos ajudar você e o seu negócio a fazer parte de um setor que só cresce no Brasil, o empreendedorismo.
                                Com isso estamos aqui para lhe apresentar soluções para facilitar o contato entre você e o seu cliente, fazendo com que o seu negócio cresça cada vez mais.
                                Tudo o que você precisa, nós podemos fazer!<br/>
                                <br/>
                                Conte com um empresa que tem mais de 10 anos de experiencia no mercado.

                            </div>
                        </Row>
                        <div className="tamanhoMobiSobre">
                            <Lottie
                                options={{
                                animationData: animation
                                }}
                            />
                        </div>
                        
                        
                        <div className="proximoSobre">
                            <img src="/img/chevron-down-solid.png" className="chevSobre"/>
                        </div>
                </Container>
            </div>
        )
    }
}
