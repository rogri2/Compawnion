import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Fragment>
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/perfil/:id">Perfil</Link>
            <Link to="/busqueda">Buscar</Link>
            <Link to="/">Sign Out</Link>
        </nav>
    </Fragment>
  )
}
