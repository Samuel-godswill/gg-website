import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'

function Navbar() {
    return (
        <div className="">
            <div className='logo'>
                <img src={logo} alt=''/>
            </div>
            <div className='nav'>
                <ul className='childNav'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Testimonials</li>
                    <li>Rent & Shop</li>
                    <li>Contact Us</li>
                </ul>
            </div>

           
        </div>
    );
}

export default  Navbar;