import React, { Component } from 'react'
import {Container , Row , Col,Image, Button } from 'react-bootstrap'
import Lottie from 'lottie-react-web';
import animation from '../../animations/drawkit10.json'

import "./style.css"

export default class Proj extends Component {
    render() {
        return (
            <div>
               {/* desk */}
               <Container className="d-none d-lg-block">
                    <Row>
                        
                        <Col>
                            <Row>
                                <div className="Titulos">{"</Servicos>"}</div>
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
                            <Row className="linha1">
                                <div className="appmobile">
                                    <h5>Aplicativos Mobile</h5>
                                    <Image className="imgCx" src="/img/aplicativosMobile.png" fluid />
                                    <Button variant="primary" className="btnCx">ver mais</Button>
                                </div>
                                <div className="sites">
                                    <h5>Sites</h5>
                                    <Image className="imgCx" src="/img/site.png" fluid />
                                    <Button variant="primary" className="btnCxSite">ver mais</Button>
                                </div>
                            </Row>
                            <Row className="linha2">
                                <div className="lojaVirtual">
                                        <h5>Lojas Virtuais</h5>
                                        <Image className="imgCx" src="/img/lojaVirtual.png" fluid />
                                        <Button variant="primary" className="btnCxLoja">ver mais</Button>
                                    </div>
                                    <div className="sis">
                                        <h5>Softwares e <br/>Integrações</h5>
                                        <Image className="imgCx" src="/img/sis.png" fluid />
                                        <Button variant="primary" className="btnCxSis">ver mais</Button>
                                </div>
                            </Row>
                        </Col>
                        
                    </Row>
                </Container>
                

                {/* mobile */}
                <Container className="d-xs-block d-lg-none">
                    <Row>
                        
                        <Col xs={8}>
                            <Row>
                                <div className="Titulos">{"</Servicos>"}</div>
                                <div className="tamanhoProj">
                                    <Lottie
                                        options={{
                                        animationData: animation
                                        }}
                                    />
                                </div>
                                
                            </Row>
                        </Col>
                        <Col xs={4}>
                            <div className="appmobileM">
                                <h6>Aplicativos Mobile</h6>
                                <Image className="imgCx" src="/img/aplicativosMobile.png" fluid />
                                <Button variant="primary" className="btnCx">ver mais</Button>
                            </div>
                            <div className="sitesM">
                                <h5>Sites</h5>
                                <Image className="imgCx" src="/img/site.png" fluid />
                                <Button variant="primary" className="btnCxSite">ver mais</Button>
                            </div>
                        
                        
                            <div className="lojaVirtualM">
                                    <h6>Lojas Virtuais</h6>
                                    <Image className="imgCx" src="/img/lojaVirtual.png" fluid />
                                    <Button variant="primary" className="btnCxLoja">ver mais</Button>
                                </div>
                                <div className="sisM">
                                    <h5>Softwares e <br/>Integrações</h5>
                                    <Image className="imgCx" src="/img/sis.png" fluid />
                                    <Button variant="primary" className="btnCxSis">ver mais</Button>
                            </div>
                            
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
