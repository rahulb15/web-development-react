import React from 'react';
import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import ErrorPage from './components/ErrorPage';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes> {/* This is the router */}
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* This is the login page */}
        <Route path="/signup" element={<Signup />} /> {/* This is the signup page */}
        <Route path="/welcome" element={<Welcome />} /> {/* This is the welcome page */}
        <Route path="/error" element={<ErrorPage />} /> {/* This is the error page */}
      </Routes> 
    
      
    </div>
  );
}
export default App;