import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <>
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='to' className="navbar-logo">
                        lvl
                    </Link>
                    <div className="menu-icon">
                       <i className={click ? 'fas fa-times'}></i> 
                    </div>
                </div>
            </nav>
        </div>
    </>
    )
}

export default Navbar
