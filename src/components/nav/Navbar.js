import React from 'react'
import { Link } from 'react-router-dom'
import Signin from './Signin';
import Signup from './Signup';
import { connect } from 'react-redux'


const Navbar = (props) => {
  const { auth } = props;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/home' ></Link>
        <Signin />
        <Signup />
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
 
  return{
    auth: state.firebase.auth
  }
}


export default connect(mapStateToProps)(Navbar)
