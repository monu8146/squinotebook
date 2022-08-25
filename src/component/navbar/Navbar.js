import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <>
      <div className="nav_bar">
        <Link to="/"><h3 className='logo'>Squi<b>note</b></h3></Link>
      </div>
    </>
  )
}

export default Navbar