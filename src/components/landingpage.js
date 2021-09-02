import React from 'react';
import ParticlesBg from 'particles-bg';
import Resume from  '../assets/images/portfolio-resumes.png';
/*import  history from './history';*/
import { useHistory } from 'react-router-dom';



function Landing(){
let history = useHistory();


        return(
            <div style={{width: '100%', margin: 'auto'}} className='lp_background'>
              <div ></div>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <div className='lp_wrapper'>
                  <h1 className="lp_header">Hello, I'm <span style={{ color:'#04c2c9' }}>Alec Rewinkel</span>.</h1>
                  <h1 className="lp_header">I'm a full-stack web developer.</h1>
                  <a className='lp_cta' href="projects">View my work</a>
                  <a className='lp_cta' href={Resume} rel="noreferrer"  target="_blank">View my resume</a>
                  <button variant="btn btn-success" onClick={()=> history.push('/projects')}>wowoww</button>
                  
                </div>
                    

                <ParticlesBg num={70} color="#9597ad" type="cobweb" bg={true}/>
            </div>
        );
    }


export default Landing;
