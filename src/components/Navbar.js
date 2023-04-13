import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className='navbar'>
    <ul>

    <li> <Link to="/">Homepage</Link></ li>
    <li><Link to="/noquerydata">Noquerydata</Link></li>
    <li><Link to="/querydata">QuerydataMain</Link></li>
    <li><Link to="/products">Productdata</Link></li>
    
    
    </ul>
    </nav>
    
    </div>
  )
}

export default Navbar
