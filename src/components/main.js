import React from 'react';
import {Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';



const Main = () => (
    <Switch>
        <Route  exact path ="/MyNewPortfolio" component={LandingPage} />
        <Route  path ="/MyNewPortfolio/aboutme" component={AboutMe} />
        <Route  path ="/MyNewPortfolio/contact" component={Contact} />
        <Route  path ="/MyNewPortfolio/projects" component={Projects} />
        <Route  path ="/resume" component={Resume} />
    </Switch>
)

export default Main;
