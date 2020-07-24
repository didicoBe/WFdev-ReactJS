import React, { Component } from 'react';
import Lottie from 'lottie-react-web';
import animation from '../../animations/drawkit4.json';
import {Container , Row , Col,Form, Button } from 'react-bootstrap';
import axios from "axios";
import { ToastContainer ,toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import "./style.css";

export default class Orcamento extends Component {
  state ={
    nome:'',
    telefone:'',
    mail:'',
    tiposerv:'',
    tipodev:'',
    ctt:'',
    conhece:''
  }



    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

   async onSubmit(e) {
        
        const dados = { 
                        nome: this.state.nome,
                        telefone: this.state.telefone,
                        email: this.state.mail,
                        tiposervico: this.state.tiposerv,
                        tipodev: this.state.tipodev,
                        prefctt: this.state.ctt,
                        comonosconheceu: this.state.conhece
        }
        const headers = { 
            'Authorization': 'jW|SZmY52Exj6HJ'
        };


        await axios.post('http://wfdesenvolvimento.com.br/api/email', dados, {headers})
            .then(response => {
                this.setState({
                    nome:'',
                    telefone:'',
                    mail:'',
                    tiposerv:'',
                    tipodev:'',
                    ctt:'',
                    conhece:''
                })
                toast.success('😁 Orçamento enviado com sucesso!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

            })
            .catch(error => {
                toast.error('🥺 Erro ao enviar, veja se preencheu todos os campos obrigatórios!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                console.error('aqui', error);
            });


    }



  render() {
    return (
      <div id="orcamento">
            <ToastContainer/>
              {/* desk */}
              <Container className="d-none d-lg-block">
                  <Row>
                      <Col>
                        <Row>
                            <div className="Titulos">{"</Orcamento>"}</div>
                            <div className="Subtitulo">Diga o que você precisa, nós resolvemos para você.</div>

                            <Form className="formulario">
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Nome*" name="nome" id="nome" onChange={(e)=>this.onChange(e)}  />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Telefone*" name="telefone" id="telefone" onChange={(e)=>this.onChange(e)}  />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="E-mail*" name="mail" id="mail" onChange={(e)=>this.onChange(e)}  />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Control as="select" name="tiposerv" id="tiposerv" onChange={(e)=>this.onChange(e)} >
                                    <option>Tipo de serviço* </option>
                                    <option>Aplicativo Mobile</option>
                                    <option>Site institucional/landpage</option>
                                    <option>Loja Virtual</option>
                                    <option>Software/Integração</option>
                                    <option>Outros</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group >
                                    <Form.Control as="select"  name="tipodev" id="tipodev" onChange={(e)=>this.onChange(e)} >
                                    <option>Tipo de desenvolvimento</option>
                                    <option>Criação do zero</option>
                                    <option>Manutenção e Ajustes</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group >
                                    <Form.Control as="select"  name="ctt" id="ctt" onChange={(e)=>this.onChange(e)} >
                                    <option>Preferencia de contato</option>
                                    <option>Telefone</option>
                                    <option>E-mail</option>
                                    <option>Whatsapp</option>
                                    </Form.Control>
                                </Form.Group>
                                
                                <Form.Group >
                                    <Form.Control as="select"  name="conhece" id="conhece" onChange={(e)=>this.onChange(e)} >
                                    <option>Como nos conheceu ?</option>
                                    <option>Facebook</option>
                                    <option>Google</option>
                                    <option>Indicação</option>
                                    <option>Instagram</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" className="btnOrc" onClick={()=>this.onSubmit()}>enviar</Button>
                            </Form>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                            <div className="tamanhoProj">
                                <Lottie
                                    options={{
                                    animationData: animation
                                    }}
                                />
                            </div>
                        </Row>
                      </Col>
                      
                  </Row>
              </Container>


              {/* mobile */}
              <Container className="d-xs-block d-lg-none">
                  <Row>
                      <Col>
                            <div className="Titulos">{"</Orcamento>"}</div>
                            <div className="SubtituloM">Diga o que você precisa, nós resolvemos para você.</div>

                            <Form className="formularioM">
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Nome*" name="nome" id="nome" onChange={(e)=>this.onChange(e)}  />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Telefone*" name="telefone" id="telefone" onChange={(e)=>this.onChange(e)}  />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="E-mail*" name="mail" id="mail" onChange={(e)=>this.onChange(e)}  />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Control as="select" name="tiposerv" id="tiposerv" onChange={(e)=>this.onChange(e)} >
                                    <option>Tipo de serviço* </option>
                                    <option>Aplicativo Mobile</option>
                                    <option>Site institucional/landpage</option>
                                    <option>Loja Virtual</option>
                                    <option>Software/Integração</option>
                                    <option>Outros</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group >
                                    <Form.Control as="select"  name="tipodev" id="tipodev" onChange={(e)=>this.onChange(e)} >
                                    <option>Tipo de desenvolvimento</option>
                                    <option>Criação do zero</option>
                                    <option>Manutenção e Ajustes</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group >
                                    <Form.Control as="select"  name="ctt" id="ctt" onChange={(e)=>this.onChange(e)} >
                                    <option>Preferencia de contato</option>
                                    <option>Telefone</option>
                                    <option>E-mail</option>
                                    <option>Whatsapp</option>
                                    </Form.Control>
                                </Form.Group>
                                
                                <Form.Group >
                                    <Form.Control as="select"  name="conhece" id="conhece" onChange={(e)=>this.onChange(e)} >
                                    <option>Como nos conheceu ?</option>
                                    <option>Facebook</option>
                                    <option>Google</option>
                                    <option>Indicação</option>
                                    <option>Instagram</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" className="btnOrc" onClick={()=>this.onSubmit()}>enviar</Button>
                            </Form>
                        
                            <div className="tamanhoOrc">
                                <Lottie
                                    options={{
                                    animationData: animation
                                    }}
                                />
                            </div>
                      </Col>
                      
                  </Row>
              </Container>

      </div>
    );
  }
}
