import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
// import { Tract } from '../components/Tract'

export default function Main() {
  return (
    <div>
       <Header></Header>
        <Outlet></Outlet>
        {/* <Tract></Tract> */}
        <Footer></Footer>
    </div>
  )
}
