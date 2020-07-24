import React, { Component } from 'react';
import { Modal,Button, Row, Col,  } from "react-bootstrap";
import Lottie from 'lottie-react-web';
import animation from '../../animations/software.json'
import animation2 from '../../animations/app.json'
import animation3 from '../../animations/loja.json'
import animation4 from '../../animations/site.json'


import "./style.css"


export default class MinhaModal extends Component {
  
  animacao = ()=>{
      switch (this.props.anima) {
        case 'animation':
            return animation
            break;
        case 'animation2':
            return animation2
            break;
        case 'animation3':
            return animation3
            break;
        case 'animation4':
            return animation4
            break;

        default:
            return ''
            break;
      }
  }
  

  
  render() {

    return (
        <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={this.props.cor}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {this.props.titulo}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{this.props.subtitulo}</h4>
                <Row>
                    <Col>
                        <p>
                            {this.props.descricao}
                        </p>
                    </Col>
                    <Col>
                        <div>
                            <Lottie
                                options={{
                                animationData: this.animacao()
                                }}
                            />
                        </div>
                    </Col>
                </Row>
                
            </Modal.Body>
            <Modal.Footer>
                <Button  onClick={this.props.onHide}>Fechar</Button>
            </Modal.Footer>
      </Modal>
    );
  }
}
