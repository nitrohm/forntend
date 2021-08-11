import React from 'react'
import Link from 'next/link';

export default function login() {
    return (
        <center>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AdminLTE 3 | Registration Page (v2)</title>
  {/* Google Font: Source Sans Pro */}
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
  {/* Font Awesome */}
  <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
  {/* icheck bootstrap */}
  <link rel="stylesheet" href="../../plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
  {/* Theme style */}
  <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
</div>
<div className='card'></div>
  <div className='card'></div>
  <div className='card'></div>
  <div className='card'></div>
  <div className='card'></div>
  <div className="login-box">
    {/* /.login-logo */}
    <div className="card card-outline card-primary">
      <div className="card-header text-center">
        <a href="../../index2.html" className="h1"><b>Admin</b>LTE</a>
      </div>
      <div className="card-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <form action="../../index3.html" method="post">
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="icheck-primary">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">
                  Remember Me
                </label>
              </div>
            </div>
            {/* /.col */}
            <div className="col-4">
            <Link href="/register">
            <a href="/register" className="nav-link">
              <button type="submit" className="btn btn-primary btn-block">Sign in</button>
            </a>
            </Link>
            </div>
            {/* /.col */}
          </div>
        </form>
        <div className="social-auth-links text-center mt-2 mb-3">
          <a href="#" className="btn btn-block btn-primary">
            <i className="fab fa-facebook mr-2" /> Sign in using Facebook
          </a>
          <a href="#" className="btn btn-block btn-danger">
            <i className="fab fa-google-plus mr-2" /> Sign in using Google+
          </a>
        </div>
        {/* /.social-auth-links */}
        <p className="mb-1">
          <a href="forgot-password.html">I forgot my password</a>
        </p>
        <p className="mb-0">
          <a href="register.html" className="text-center">Register a new membership</a>
        </p>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </div>
  {/* /.login-box */}
  {/* jQuery */}
  {/* Bootstrap 4 */}
  {/* AdminLTE App */}
</center>

    )
}
