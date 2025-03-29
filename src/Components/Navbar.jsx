import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ComponentCSS/Navbar.css';


const Navbar = () => {

    // making for responsive navbar by default menu is not open (closed)
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);
    const onClose = () => {
        setShow(false);
    }

    // wheen clicked to menu btns list anchor then close ul
    const handleLinkClick = () => {
        // changing to ul stlyle
        setIsOpen(false);
    };

    // when clicked to login then open popup
    const handleLogin = () => {
        // changing to ul stlyle
        setIsOpen(false);
        setShow(true);
    };

    // when clicked to checkbox aur menu btn which is three line
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* login popup */}
            {show && <Login show={show} onClose={onClose} />}


            <nav id="navbar" className="xyz">
                <Link to="" id="heading">
                    <img id="logo" src="./Images/smartCanteenLogo.png" alt="logo" />

                    <h1 className='nav_name' onClick={handleLinkClick}>QUEUE FLOW</h1>
                </Link>

                {/* input checks to make responsive design  */}
                <input type="checkbox" checked={isOpen} id="click" onChange={toggleMenu} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>

                {/* menu buttons */}
                <div id="menuBtns">
                    <ul id="links" style={{ left: isOpen ? '0%' : '-100%' }}>
                        <li>
                            <Link className="nav-link"
                                onClick={handleLinkClick}
                                to="/">Home  </Link>
                        </li>
                        <li>
                            <Link className="nav-link"
                                onClick={handleLinkClick}
                                to="/orders">Cart  </Link>
                        </li>
                        <li>
                            <Link className="nav-link"
                                onClick={handleLinkClick}
                                to="/QueueStatus">
                                {/* <i className="fa-solid fa-cart-plus"></i> */}
                                Queue Status
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link"
                                onClick={handleLinkClick}
                                to="/PreOrder">
                                {/* <i className="fa-solid fa-cart-plus"></i> */}
                                Pre Order
                            </Link>
                        </li>


                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
