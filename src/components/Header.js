import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


const Header = () => {
    return (
     <header>
         <div className="flexbox-container">
             <Link to="/home" className="logo">
                 <span></span>
             </Link>
             <nav>
                 <Link to="/teams">Teams</Link>
                 <span></span>
               
             </nav>
              
             <Link to="/signin">Navbar</Link>
                 <span></span>
               
         </div>
     </header>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        

    }
}

export default connect(mapStateToProps)(Header);
