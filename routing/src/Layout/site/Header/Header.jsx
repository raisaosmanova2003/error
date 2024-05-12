import React from 'react'
import { Link } from "react-router-dom";
import Shop from '../../../../../../rout_exp/routing/src/Pages/site/Shop/Shop'
import Dashboard from '../../../../../../rout_exp/routing/src/Pages/admin/Dashboard/Dashboard'
import Home from '../../../../../../rout_exp/routing/src/Pages/site/Home/Home'
import Details from '../../../../../../rout_exp/routing/src/Pages/site/Details/Details'
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to='/' className='nav-link'>Home</Link>
      </li>
      <li className="nav-item">
      <Link to='/admin' className='nav-link'>Dashboard</Link>
      </li>
      <li className="nav-item">
      <Link to='shop' className='nav-link'>Shop</Link>
      </li>
      <li className="nav-item">
      <Link to='details' className='nav-link'>Details</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Header
