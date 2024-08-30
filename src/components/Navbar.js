import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.css'
const Navbar=()=>{

    return (
      <div style={style}>
        <nav className="navbar navbar-expand-lg  bg-body-tertiary w-100% fixed-top" data-bs-theme='dark'>
        <div className="container-fluid py-2">
            <Link className="navbar-brand fw-bold fs-2 px-4" to="/">NewsAI</Link>
            <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav fw-medium">
                <li className="nav-item fs-5 px-2 ">
                <Link className='nav-link'  aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item dropdown fs-5 px-2">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu fs-5 py-2 px-4 ">
                <li className="nav-item">
                <Link className='nav-link'  to="/business">Business</Link></li>                
                <li className="nav-item">
                <Link className='nav-link'  to="/entertainment">Entertainment</Link></li>
                <li className="nav-item">
                <Link className='nav-link' to="/general">General</Link></li>
                <li className="nav-item">
                <Link className='nav-link' to="/health">Health</Link></li>
                <li className="nav-item">
                <Link className='nav-link' to="/science">Science</Link></li>
                <li className="nav-item">
                <Link className='nav-link' to="/sports">Sports</Link></li>
                <li className="nav-item">
                <Link className='nav-link' to="/technology">Technology</Link></li>
                </ul>
                </li>
                
            </ul>
            </div>
        </div>
        </nav>
      </div>
    )
  }
export default  Navbar
