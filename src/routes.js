import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Teams from './components/Teams';
import Team from  './components/Teams/Team';



const Routes = () =>(

    <BrowserRouter>
    <Header />
    <Switch>
       <Route path="/teams/:id" component={Team} />

        <Route path="/teams" component={Teams}/>
        <Route path="/" component={Home}/>"
      
    </Switch>
    <Footer />
    </BrowserRouter>

)

export default Routes;