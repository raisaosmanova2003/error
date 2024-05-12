import React from 'react'
import Header from '../../../../../rout_exp/routing/src/Layout/site/Header'
import Footer from '../../../../../rout_exp/routing/src/Layout/site/Footer/Footer'
import {Outlet} from "react-router-dom";
const SiteRoot = () => {
  return (
    <React.Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </React.Fragment>
  )
}

export default SiteRoot
