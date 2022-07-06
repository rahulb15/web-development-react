import React from 'react';
import { Route, Routes} from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import RandonIMG from './components/RandonIMG';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes> {/* This is the router */}
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* This is the login page */}
        <Route path="/signup" element={<Signup />} /> {/* This is the signup page */}
      </Routes> 
      
    </div>
  );
}
export default App;