import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <div>
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" scroll>
            <Navigation>
                <Link className="nav_link" to="/MyNewPortfolio">HOME</Link>
                <Link className="nav_link" to="/aboutme">ABOUT ME</Link>
                <Link className="nav_link" to="/projects">PORTFOLIO</Link>
                <Link className="nav_link" to="/contact">CONTACT</Link>
            </Navigation>
        </Header>
        <Drawer>
            <Navigation>
                <Link className="nav_link" to="/MyNewPortfolio">HOME</Link>
                <Link className="nav_link" to="/aboutme">ABOUT ME</Link>
                <Link className="nav_link" to="/projects">PORTFOLIO</Link>
                <Link className="nav_link" to="/contact">CONTACT</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
      </div>
    );
  }
}

export default App;
