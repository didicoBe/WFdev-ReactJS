import React, { Component } from 'react';
import { Modal,Button } from "react-bootstrap";


import "./style.css"


export default class MinhaModal extends Component {
  
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
                <p>
                    {this.props.descricao}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button  onClick={this.props.onHide}>Fechar</Button>
            </Modal.Footer>
      </Modal>
    );
  }
}
