import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import Header from './Header';
import Footer from './Footer';

import { Link } from 'react-router-dom'

const puasStyle = {
    width: "60%",
    heiht: "60%",
    backgroundColor: "DodgerBlue",
    padding: "5px",
};
const biasaStyle = {
    width: "60%",
    heiht: "60%",
    backgroundColor: "orange",
    padding: "5px",
};
const tidakStyle = {
    width: "60%",
    heiht: "60%",
    backgroundColor: "magenta",
    padding: "5px",
};
const MainMenu = () => {
    return (
        <>

            <div className="container-fluid">
                <Header />
                <div className="p-3 mt-3 mb-2 bg-secondary text-white">
                    <div className="row align-items-center">
                        <h2 className="text-center mb-5">MOHON PENILAIAN ANDA TERHADAP LAYANAN KAMI</h2>
                        <div className="col-lg-1"></div>
                        <div className="col">
                            <ModalInput img src="/img/sangat-puas.jpg" style={puasStyle}/>
                            {/* <img src="/img/sangat-puas.jpg" alt="" style={puasStyle} className="btn btn-primary"/> */}
                        </div>
                        <div className="col">
                        <ModalInput img src="/img/puas.jpg" alt="" style={biasaStyle}/>
                            {/* <img src="/img/puas.jpg" alt="" style={biasaStyle} /> */}
                        </div>
                        <div className="col">
                        <ModalInput img src="/img/tidak-puas.jpg" alt="" style={tidakStyle}/>
                            {/* <img src="/img/tidak-puas.jpg" alt="" style={tidakStyle} /> */}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

class ModalInput extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    
handleClose () {
    this.setState({
        show: false
    })
}

handleShow (){
    this.setState({
        show: true
    })
}

    render() {
        return (
            <>
            <img src={this.props.img} alt="" style={this.props.style} onClick={this.handleShow}>
            </img>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

}


export default MainMenu