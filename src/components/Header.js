import {Link} from 'react-router-dom'
import {AiFillClockCircle} from 'react-icons/ai'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-light mt-2" style={{backgroundColor: '#e3f2fd'}}>
                <div className="container-fluid">
                    <Link class="navbar-brand logo" to="/">
                        <img src="/img/rsbh.jpg" alt width={40} height={40} className="d-inline-block align-text-top" />
                        <strong>  BHAKTI HUSADA II PURWAKARTA</strong>
                    </Link>
                    
                    <h5 className="text-end"><AiFillClockCircle className='me-2'/> {new Date().toLocaleTimeString()}</h5>
                </div>
            </nav>
        </>
    )
}

export default Header