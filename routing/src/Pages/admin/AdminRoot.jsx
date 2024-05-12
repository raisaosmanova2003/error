import React from 'react'
import Header from '../../../../../rout_exp/routing/src/Layout/admin/Header'
import { Outlet } from 'react-router'
import Footer from '../../../../../rout_exp/routing/src/Layout/admin/Footer/Footer'

const AdminRoot = () => {
  return (
    <React.Fragment>
    <Header/>
    <Outlet/>
    <Footer/>
  </React.Fragment>
  )
}

export default AdminRoot
