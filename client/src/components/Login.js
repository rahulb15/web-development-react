import React from 'react'

const Login = () => {
  return (
    <div>
        <section className="login">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="login-content">
                            <div className="login-form">
                                <h1 className="form-title">Login</h1>
                                <p className="form-description">Please fill in this form to login.</p>
                                <div className="form-group">
                                    <label className="control-label">Email</label>
                                    <div className="input-group">
                                        <input className="form-control" type="email" placeholder="Email" required/>
                                    </div>
                                    <label className="control-label">Password</label>
                                    <div className="input-group">
                                        <input className="form-control" type="password" placeholder="Password" required/>
                                    </div>
                                    <button className="btn btn-primary btn-lg btn-block" type="submit" >Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login