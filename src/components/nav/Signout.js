import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../../store/actions/authActions';

const SignedOut = (props) => {
  
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/signout'>signout</NavLink></li>
      </ul>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
    return{
      signout:() => dispatch(signout())
    }
  
  }
export default connect(null,mapDispatchToProps)(SignedOut)