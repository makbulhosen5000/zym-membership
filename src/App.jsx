import { useState } from 'react'
import './App.css'
import Nav from './components/Navbar/Nav'
import PriceList from './components/PriceCard/PriceList'
import Dashboard from './components/Dashboard/Dashboard'
import PhoneBar from './components/PhoneBar/PhoneBar'


function App() {

  return (
    <div className="App">
        <Nav/>
        <h1 className=' text-5xl bg-pur my-5  text-center'>Awesome Affordable Gym Packages </h1>
        <PriceList/>
        <Dashboard/>
        <PhoneBar/>
    </div>
  )
}

export default App
