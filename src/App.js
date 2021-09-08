import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom';

function aboutBtn(){
  document.title = "Alec Rewinkel- About"
}
function homeBtn(){
  document.title = "Alec Rewinkel"
}
function projectBtn() {
  document.title = "Alec Rewinkel- Projects"
}
function contactBtn() {
  document.title = "Alec Rewinkel- Contact"
}
class App extends Component {
  render(){
    return(
      <div>
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" scroll>
            <Navigation>
                <Link onClick={homeBtn} className="nav_link" to="/Portfolio">HOME</Link>
                <Link onClick={aboutBtn} className="nav_link" to="/aboutme">ABOUT ME</Link>
                <Link onClick={projectBtn} className="nav_link" to="/projects">PORTFOLIO</Link>
                <Link onClick={contactBtn} className="nav_link" to="/contact">CONTACT</Link>
            </Navigation>
        </Header>
        <Drawer>
            <Navigation>
                <Link onClick={homeBtn} className="nav_link" to="/Portfolio">HOME</Link>
                <Link onClick={aboutBtn} className="nav_link" to="/aboutme">ABOUT ME</Link>
                <Link onClick={projectBtn} className="nav_link" to="/projects">PORTFOLIO</Link>
                <Link onClick={contactBtn} className="nav_link" to="/contact">CONTACT</Link>
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
