import React from 'react'
import { FaInternetExplorer } from "react-icons/fa";
import './NavBar.css'

function NavBar() {
  return (
    <div className='two-button'>      
    <nav className="navbar">
    <button href="#">Family Fights</button>
    <button href="#">Weekly Tasks</button>
    <button href="#">My Families</button>
  </nav>
  </div>
  )
}

export default NavBar
