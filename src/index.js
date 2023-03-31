import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css'

//React router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Components 
import Header from './components/Header'
import Houses from './components/Houses'
import AboutUs from './components/AboutUs';
import PropertyCard from './components/PropertyCard'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


const App = () => {


  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Houses/>}/>
          <Route exact path='/About-us' element={<AboutUs/>} />
          <Route exact path='/house/:handle' element={<PropertyCard/>} />
          <Route exact path='/ContactUs' element={<ContactUs/>} />
        </Routes>
        <Footer/>

        </BrowserRouter>
    </>
  )
}



const rootElement = createRoot(document.getElementById('root'))
rootElement.render(<App />)