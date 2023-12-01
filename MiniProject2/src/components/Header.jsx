import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.scss'
export default function Header() {
  return (
    <>
     <div className='header'>
        <NavLink to={"/"} className="same"> Home </NavLink>
        <NavLink to={"/cart"} className="same" > Cart </NavLink>
     </div>  
    </>
  )
}
