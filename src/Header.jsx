import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/header.css"

function Header() {
  return (
    <>
     <header>
     <nav className="navlinks-wrapper">
        <h1 className="logo">R O J</h1>
        <ul className="Links">
          <li className="nav-item"><Link to={'/'} class="navlink"> Home </Link></li>
          <li className="nav-item"> <Link to={'/about'} class="navlink"> About </Link></li>
          <li className="nav-item"><Link to={'/project'} class="navlink"> Project </Link></li>
          <li className="nav-item"> <Link to={'/contact'} class="navlink"> Contact </Link></li>
        </ul>
        <div className="hamburger">
          <span className="icon"></span>
          <span className="icon"></span>
          <span className="icon"></span>
        </div>
      </nav>
    </header>
    
    </>
  )
}

export default Header