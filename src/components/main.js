import React, { Component } from 'react';
import {  Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';
import history from './history';


 class Main extends Component {
    render() {

    

 return (
   
        <Switch history={history}>
            <Route  exact path ="/Portfolio" component={LandingPage} />
            <Route  path ="/aboutme" component={AboutMe} />
            <Route  path ="/contact" component={Contact} />
            <Route  path ="/projects" component={Projects} />
            <Route  path ="/resume" component={Resume} />
        </Switch>
    
)
 }
}

export default Main;
