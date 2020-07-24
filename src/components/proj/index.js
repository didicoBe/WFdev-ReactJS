import React, { Component } from 'react'
import {Container , Row , Col,Image, Button } from 'react-bootstrap'
import Lottie from 'lottie-react-web';
import animation from '../../animations/drawkit10.json'
import MinhaModal from "../modal";

import "./style.css"

export default class Proj extends Component {
    state = {
        modalShow:false,
        titulo:'',
        subtitulo:'',
        descricao:'',
        cor:'',
        anima:''
    }


    Modal = (titulo,subtitulo,descricao,cor, animacao)=>{
        this.setState({
                        modalShow:true,
                        titulo:titulo,
                        subtitulo:subtitulo,
                        descricao:descricao,
                        cor:cor,
                        anima: animacao

                     })
    }




    render() {
        return (
            <div className="espaco" id="servico">
               {/* desk */}
               <Container className="d-none d-lg-block">
                    <MinhaModal
                        titulo={this.state.titulo}
                        subtitulo={this.state.subtitulo}
                        descricao={this.state.descricao}
                        cor={this.state.cor}
                        show={this.state.modalShow}
                        onHide={() => this.setState({modalShow:false})}
                        anima={this.state.anima}
                        />
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
                                    <Button variant="primary" className="btnCx" onClick={()=>{this.Modal('Aplicativos Mobile','Você não vai ficar fora dessa né?','Tenha o seu aplicativo na google play ou na apple store, multiplique suas vendas, esteja mais proximo do seu cliente.','apps','animation2')}}>ver mais</Button>
                                </div>
                                <div className="sites">
                                    <h5>Sites</h5>
                                    <Image className="imgCx" src="/img/site.png" fluid />
                                    <Button variant="primary" className="btnCxSite" onClick={()=>{this.Modal('Sites','Sua empresa precisa ter a sua cara',`Desenvolvemos sites para divulgação do seu produto ou prestação de serviço e dessa forma possa te auxiliar a atingir seu público alvo.
Ter um site bem estruturado passa mais credibilidade e facilita a comunicação entre você e seu cliente.`,'SErvicosites','animation4')}}>ver mais</Button>
                                </div>
                            </Row>
                            <Row className="linha2">
                                <div className="lojaVirtual">
                                        <h5>Lojas Virtuais</h5>
                                        <Image className="imgCx" src="/img/lojaVirtual.png" fluid />
                                        <Button variant="primary" className="btnCxLoja" onClick={()=>{this.Modal('Lojas Virtuais','Venda muito mais com muito menos',`Temos a solução completa para a criação de sua loja virtual de forma organizada e interligada a diversas formas de pagamento. Hoje em dia a venda de produtos e serviços de forma virtual é a maneira mais eficiente e barata de divulgação. Invista em uma loja virtual e alavanque suas vendas.`,'ServicoLoja','animation3')}}>ver mais</Button>
                                    </div>
                                    <div className="sis">
                                        <h5>Softwares e <br/>Integrações</h5>
                                        <Image className="imgCx" src="/img/sis.png" fluid />
                                        <Button variant="primary" className="btnCxSis" onClick={()=>{this.Modal('Softwares e Integrações','Faça seus sistemas se conversarem, aumente sua produtividade',`Nossa empresa tem grande experiência no desenvolvimento de softwares proprietários, personalizado e integrações com diversas plataformas Amazon, Google, Oracle e etc. Integração e desenvolvimento em qualquer plataforma.`,'Servicosoft','animation')}}>ver mais</Button>
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
                                <Button variant="primary" className="btnCx" onClick={()=>{this.Modal('Aplicativos Mobile','Você não vai ficar fora dessa né?','Tenha o seu aplicativo na google play ou na apple store, multiplique suas vendas, esteja mais proximo do seu cliente.','apps','animation2')}}>ver mais</Button>
                            </div>
                            <div className="sitesM">
                                <h5>Sites</h5>
                                <Image className="imgCx" src="/img/site.png" fluid />
                                <Button variant="primary" className="btnCxSite" onClick={()=>{this.Modal('Sites','Sua empresa precisa ter a sua cara',`Desenvolvemos sites para divulgação do seu produto ou prestação de serviço e dessa forma possa te auxiliar a atingir seu público alvo.
Ter um site bem estruturado passa mais credibilidade e facilita a comunicação entre você e seu cliente.`,'SErvicosites','animation4')}}>ver mais</Button>
                            </div>
                        
                        
                            <div className="lojaVirtualM">
                                    <h6>Lojas Virtuais</h6>
                                    <Image className="imgCx" src="/img/lojaVirtual.png" fluid />
                                    <Button variant="primary" className="btnCxLoja" onClick={()=>{this.Modal('Lojas Virtuais','Venda muito mais com muito menos',`Temos a solução completa para a criação de sua loja virtual de forma organizada e interligada a diversas formas de pagamento. Hoje em dia a venda de produtos e serviços de forma virtual é a maneira mais eficiente e barata de divulgação. Invista em uma loja virtual e alavanque suas vendas.`,'ServicoLoja','animation3')}}>ver mais</Button>
                                </div>
                                <div className="sisM">
                                    <h5>Softwares e <br/>Integrações</h5>
                                    <Image className="imgCx" src="/img/sis.png" fluid />
                                    <Button variant="primary" className="btnCxSis" onClick={()=>{this.Modal('Softwares e Integrações','Faça seus sistemas se conversarem, aumente sua produtividade',`Nossa empresa tem grande experiência no desenvolvimento de softwares proprietários, personalizado e integrações com diversas plataformas Amazon, Google, Oracle e etc. Integração e desenvolvimento em qualquer plataforma.`,'Servicosoft','animation')}}>ver mais</Button>
                            </div>
                            
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
