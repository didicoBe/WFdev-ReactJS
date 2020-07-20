import React, { Component } from 'react';
import Lottie from 'lottie-react-web';
import animation from '../../animations/drawkit4.json';
import {Container , Row , Col,Form, Button } from 'react-bootstrap';


import "./style.css";

export default class Orcamento extends Component {
  render() {
    return (
      <div>
              {/* desk */}
              <Container className="d-none d-lg-block">
                  <Row>
                      <Col>
                        <Row>
                            <div className="Titulos">{"</Orcamento>"}</div>
                            <div className="Subtitulo">Diga o que você precisa, nós resolvemos para você.</div>

                            <Form className="formulario">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Nome" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Telefone" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="E-mail" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                    <option>Tipo de serviço</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                    <option>...</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                    <option>...</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                    <option>...</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" className="btnOrc">enviar</Button>
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
                        <Row>
                            <div className="Titulos">{"</Orcamento>"}</div>
                            <div className="SubtituloM">Diga o que você precisa, nós resolvemos para você.</div>

                            <Form className="formularioM">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Nome" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Telefone" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="E-mail" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                    <option>Tipo de serviço</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                    <option>...</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                    <option>...</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                    <option>...</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button className="btnOrc">enviar</Button>
                            </Form>
                        
                            <div className="tamanhoOrc">
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

      </div>
    );
  }
}
