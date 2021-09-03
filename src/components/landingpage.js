import React from 'react';
import ParticlesBg from 'particles-bg';
import Resume from  '../assets/images/portfolio-resumes.png';
/*import  history from './history';*/
import { useHistory } from 'react-router-dom';

function tabProject() {
 
}

function Landing(){
let history = useHistory();
 function projectsBtn(){
    history.push('/projects');
    document.title = "Alec Rewinkel- Projects";
 }

 

        return(
            <div style={{width: '100%', margin: 'auto'}} className='lp_background'>
              <div ></div>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <div className='lp_wrapper'>
                  <h1 className="lp_header">Hello, I'm <span style={{ color:'#04c2c9' }}>Alec Rewinkel</span>.</h1>
                  <h1 className="lp_header">I'm a full-stack web developer.</h1>
                  <button className='lp_cta' onSubmit={tabProject} data-title="projects" onClick={projectsBtn}>View my work</button>
                  <a className='lp_cta' href={Resume} rel="noreferrer" data-title="Resume" target="_blank">View my resume</a>
                  
                  
                </div>
                    

                <ParticlesBg num={70} color="#9597ad" type="cobweb" bg={true}/>
            </div>
        );
    }


export default Landing;
