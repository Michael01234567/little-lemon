import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Testimonials from './Testimonials.js';
import WeekSpecials from './WeekSpecials.js';
import Header from './components/Header.js';
// import BookingForm from './BookingForm';



function App() {
  return (
    <>
      <Nav/> 
      <Header/>     
      <WeekSpecials/>
      <Testimonials/>
      <Footer/>
      
    </>  
  );
}

export default App;
