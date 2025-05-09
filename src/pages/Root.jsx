import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Lates from './Lates'

const Root = () => {
  return (
    <>
        <Header/> 
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Root