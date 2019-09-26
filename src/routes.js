import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Teams from './components/Teams';
import Team from  './components/Teams/Team';
import Signin from './components/nav/Signin';
import Signup from './components/nav/Signup';
import Comments from './components/projects/Comments';
import Navbar from './components/nav/Navbar';


const Routes = () =>(

    <BrowserRouter>
    <Header />
    <Switch>
       <Route path="/teams/:id" component={Team} />

        <Route path="/teams" component={Teams}/>
        <Route path="/home" component={Home}/>
        <Route path="/signin" component={Signin} />
        <Route path="/" component={Signup} />
        <Route path="/comment" component={Comments} />
        <Route path="/" component={Navbar} />
      
    </Switch>
    <Footer />
    </BrowserRouter>

)

export default Routes;