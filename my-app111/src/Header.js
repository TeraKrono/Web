import React, { useState } from 'react';
import img from './image/icon.png'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
        console.log(isActive);
      };
    
        return (
            <nav id="header" className={`navbar navbar-expand-lg navbar-dark ${isActive ? 'active' : ''}`}>
              <Link to="/" className="logo">Anime list</Link>
              <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse ${isActive ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/List" className="nav-link">List</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Zmena" className="nav-link">Zmena</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Loginpage" className="nav-link">Login</Link>
                    </li>
                    </ul>
              </div>
            </nav>
          );
        }
        
        export default Header;