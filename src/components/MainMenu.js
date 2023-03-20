import Header from './Header';
import Footer from './Footer';

import {Link} from 'react-router-dom'

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
                           <Link to="/"><img src="/img/sangat-puas.jpg" style={puasStyle}/></Link> 
                        </div>
                        <div className="col">
                            <img src="/img/puas.jpg" style={biasaStyle} />
                        </div>
                        <div className="col">
                            <img src="/img/tidak-puas.jpg" style={tidakStyle} />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default MainMenu