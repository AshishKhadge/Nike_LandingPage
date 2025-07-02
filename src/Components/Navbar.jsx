import React from 'react'
import logo from "../assets/logo.png";
import '../Components/Style.css'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <img src={logo} alt="" />
                <div className="components">
                    <a href="">menu</a>
                    <a href="">Location</a>
                    <a href="">about</a>
                    <a href="">contact</a>
                </div>
                <button className='btns'>login</button>
            </div>
        </>
    )
}

export default Navbar