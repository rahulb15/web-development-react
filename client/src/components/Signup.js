import React from 'react'

const Signup = () => {
  return (
    <div>
      <section className="signup">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="signup-content">
                <div className="signup-form">
                  <h1 className="form-title" align="center">Signup</h1>
                  <p className="form-description">Please fill in this form to create your account.</p>
                  <div className="form-group">
                    <label className="control-label">Name</label>
                    <div className="input-group">
                      <input className="form-control" type="text" placeholder="Name" required/>
                    </div>
                    <label className="control-label">Email</label>
                    <div className="input-group">
                      <input className="form-control" type="email" placeholder="Email" required/>
                    </div>
                    <label className="control-label">Password</label>
                    <div className="input-group">
                      <input className="form-control" type="password" placeholder="Password" required/>
                    </div>
                    <label className="control-label">Confirm Password</label>
                    <div className="input-group">
                      <input className="form-control" type="password" placeholder="Confirm Password" required/>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block" type="submit" >Signup</button>
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

export default Signup