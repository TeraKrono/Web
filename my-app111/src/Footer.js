import React from "react";
import fcb from './facebook.svg'
import inst from './instagram.svg'
import twr from './twitter.svg'
import img from './image/icon.png'

class Footer extends React.Component {

    render () {
        return (
    <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <p className="footertext">©Anime list</p>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-body-secondary" href="http://twitter.com"><img src={twr} className="bi" width="24" height="24"></img></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="http://instagram.com"><img src={inst} className="bi" width="24" height="24"></img></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="http://facebook.com"><img src={fcb} className="bi" width="24" height="24"></img></a></li>
            </ul>
        </footer>
  </div>
        )
    }
}

export default Footer;