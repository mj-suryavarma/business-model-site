import React,{useState,useCallback,useEffect} from 'react';
import About from './aboutus/about';
import OurService from './home/ourservice/ourservice';
import './App.css';
import HomePage from './home/home'; 
import ContactMe from './contact/contact';

function App() {


  return (
    <div className="App"> 
      <HomePage />
       <About />
       <OurService />
       <ContactMe />
        
    </div>
  );
}

export default App; 