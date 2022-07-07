import React from 'react'
import navImage from '../images/3.jpeg'

const NavPageImage = () => {
  return (
    <div>
      <section className="welcome" align="center">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="welcome-content">
                <div className="welcome-form">
                  <h1 className="form-title" width="100%"><span className="text-primary">Lets's Code</span></h1>
                  <img src={navImage} alalt="Avatar" className="avatar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NavPageImage