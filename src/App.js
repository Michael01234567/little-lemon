import './App.css';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import BookingForm from './components/BookingForm.js';


function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <BookingForm/>
      <Main/>
      <Footer/>
    </>  
  );
}

export default App;
