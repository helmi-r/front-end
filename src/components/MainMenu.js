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
                            <ModalInput imgUrl={'/img/sangat-puas.jpg'} style={puasStyle} />
                        </div>
                        <div className="col">
                            <ModalInput imgUrl={'/img/puas.jpg'} style={biasaStyle} />
                        </div>
                        <div className="col">
                            <ModalInput imgUrl={'/img/tidak-puas.jpg'} style={tidakStyle} />
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

    handleClose() {
        this.setState({
            show: false
        })
    }

    handleShow() {
        this.setState({
            show: true
        })
    }

    render() {
        const { imgUrl } = this.props;
        return (
            <>
                <img src={imgUrl} alt="" style={this.props.style} onClick={this.handleShow}>
                </img>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Isi form dibawah ini</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputEmail1 mb-2">Nama</label>
                                <input type="text" className="form-control" placeholder="isikan nama" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputEmail1 mb-2">HP/Telp</label>
                                <input type="text" className="form-control" placeholder="isikan no.HP/Telp" />
                            </div>
                            <button type="submit" className="btn btn-primary">Simpan</button>
                        </form>

                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Batal
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Simpan
                        </Button>
                    </Modal.Footer> */}
                </Modal>
            </>
        )
    }

}


export default MainMenu