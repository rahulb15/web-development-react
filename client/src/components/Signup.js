import React,{useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import SignupImage from '../images/5.png';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })
  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    const { name, email, password, password_confirmation } = user;
    fetch('http://localhost:5000/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation
      })
    }) 
    .then(res => res.json())
    .then(data => {
      console.log(data);
      navigate('/login');
      //redirectToLogin();
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setUser({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      })
    }
    )
  }

  // const redirectToLogin = () => {

  //  }
  


  return (
    <div>
      <section className="signup"> 
        <div className="container mt-5"> 
          <div className="row"> 
            <div className="col-md-4">
              <div className="signup-content">
                <div className="signup-form">
                  <h1 className="form-title" align="center">Signup</h1> 
                  <p className="form-description">Please fill in this form to create your account.</p>  
                  <form className="register-form" id="register-form" method="POST"> 
                  
                  <div className="form-group"> 
                    
                    <label className="control-label">Name</label>
                    <div className="input-group"> 
                      <input className="form-control" type="text" placeholder="Name" name="name" value={user.name} onChange={handleChange} required/>
                    </div>

                    <label className="control-label">Email</label>
                    <div className="input-group">
                      <input className="form-control" type="email" placeholder="Email"  name="email" value={user.email} onChange={handleChange} required/>
                    </div>

                    <label className="control-label">Password</label>
                    <div className="input-group">
                      <input className="form-control" type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} required/>
                    </div>

                    <label className="control-label">Confirm Password</label>
                    <div className="input-group">
                      <input className="form-control" type="password" placeholder="Confirm Password" name="password_confirmation" value={user.password_confirmation} onChange={handleChange} required/>
                    </div>

                    <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleSubmit}>Signup</button>

                  </div>
                  </form>
                </div>
                
              </div>  
            </div>
                  <div className= "signup-image col-md-8" align="center">
                    <figure><img src={SignupImage} alt="singup image" width="300" height="300"/></figure>
                    <NavLink className="signup-image-link" to="/login">I am already member</NavLink>
                  </div>
          </div>
        </div>
        </section>
    </div>
  )
}

export default Signup