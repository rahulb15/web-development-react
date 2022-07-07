import React,{useState} from 'react'
import { NavLink, useNavigate} from 'react-router-dom';
import LoginImg from '../images/4.jpg';

const Login = () => {
    const navigate = useNavigate();
const [user, setUser] = useState({
    email: '',
    password: ''
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
        const { email, password } = user;
        fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json()) 
        .then(data => { 
            console.log(data); 
            if(data.status === 'Success'){
                // localStorage.setItem('token', data.token);
            // localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/welcome');
            }else if (data.status === 'failed'){
                navigate('/error');
             }
        })
            
    }

  return (
    <div>
        <section className="login">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="login-content">
                            <div className="login-form">
                                <h1 className="form-title">Login</h1>
                                <p className="form-description">Please fill in this form to login.</p>
                                
                                <form className="login-form" id="login-form" method="POST">

                                <div className="form-group">
                                    <label className="control-label">Email</label>
                                    <div className="input-group">
                                        <input className="form-control" type="email" placeholder="Email" name="email" value={user.email} onChange={handleChange} required/>
                                    </div>
                                    <label className="control-label">Password</label>
                                    <div className="input-group">
                                        <input className="form-control" type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} required/>
                                    </div>
                                    <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleSubmit}>Login</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                                <div className="login-image col-md-8" align="center">
                                    <figure><img src={LoginImg} alt="singup image" width="300" height="300"/></figure>
                                    <NavLink className="signup-image-link" to="/signup">Don't Have Account</NavLink>
                                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login