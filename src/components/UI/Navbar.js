import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import React from 'react'
import "./Navbar.css";
import Modal from './Modal';
import hamburger from "../../assets/proj-icons/hamburger-menu.svg"
export default function Navbar({content, isLoading}) {
  const [ showModal, setShowModal ] = useState(false);

  const handleClick = (e) => {
    if(isLoading) e.preventDefault();
    if(window.innerWidth < 700) setShowModal(false);
  }
  let navbarItems = 
    <ul className='navbar'>
      <li className="nav-logo">
        {content !== "home" && <Link to="/"  onClick={() =>setShowModal(false)}>{window.innerWidth < 700 ? "AYNSL" : "AYN NICOLI SILVA LAQUINDANUM"}</Link>}
        {content === "home" && <a href="#home"  onClick={() =>setShowModal(false)}>{window.innerWidth < 700 ? "AYNSL" : "AYN NICOLI SILVA LAQUINDANUM"}</a>}
        <p>GRAPHIC ARTIST | LICENSED ARCHITECT</p>
      </li>
      {content === "home" && <li className='nav-item'><a href="#showcase-page" onClick={() =>setShowModal(false)}>PROJECTS</a></li>}
      {content === "architecture" && <li className='nav-item'><NavLink to="/projects/graphic" onClick={handleClick}>GRAPHIC DESIGNS</NavLink></li>} 
      {content === "graphic" && <li className='nav-item'><NavLink to="/projects/architecture" onClick={handleClick}>ARCHITECTURAL DESIGNS</NavLink></li>} 
      <li className='nav-item'><NavLink to="/about">ABOUT</NavLink></li>
      <li className='nav-item'><NavLink to="/contact">CONTACT</NavLink></li>
    </ul>;
    
  
  if(window.innerWidth < 700) {
    return (
      <nav className='nav-container'>
        <button onClick={() =>setShowModal(true)} className="hamburger-container"><img src={hamburger}/></button>
        {
          showModal && 
          <Modal handleHideModal={() =>setShowModal(false)} className="nav-modal" >
            {navbarItems}
          </Modal>
        }

      </nav>
    )
  }

  return (
    <nav className='nav-container'>
      {navbarItems}
    </nav>
  )
}
