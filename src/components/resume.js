import React, {Component} from 'react';
import { CardText, Grid, Cell, List, ListItem } from 'react-mdl';

class Resume extends Component {
   
    render(){
        return(
            <div className="resumes">
                 <div  >
               <Grid>
                <Cell  col={12} >
                    <div>
                       <h1>
                           Alec Joseph Rewinkel
                       </h1>
                       <h3>
                           Full Stack Web Developer
                       </h3>
                    </div>
                </Cell>

               <Cell shadow={100} col={3} style={{borderRadius: '140px', backgroundColor: '#eef2f3'}}>
                  
               <List>
                     <ListItem>
                        
                   <ul>
                   <br/>
                   
                   <h5><strong>— Contact Info</strong></h5>
                       <li>

                             <i className="fa fa-phone-square" aria-hidden="true" />
                              303-842-5715

                       </li>
                       <br/>
                       <li>

                             <i class="fa fa-envelope" aria-hidden="true"/>
                                alecrewinkel@gmail.com

                       </li>
                       <br/>
                       <li>

                             <i className="fa fa-github-square" aria-hidden="true" />
                               github.com/arewinkl

                       </li>
                       <br/>
                       <li>
                       
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                              Linked-In/Alec Rewinkel
                           
                       </li>
                   </ul>
                         </ListItem>
                     </List>   
                        
                    <List>
                        <ListItem>
                            <ul style={{ fontSize:'18px', textAlign:'left'}}>
                            <h5><strong>— Hard Skills</strong></h5>
                            
                             <li>Javascript</li>
                             <li>HTML</li>
                             <li>CSS</li>
                             <li>React</li>
                             <li>React-mdl</li>
                             <li>MySQL</li>
                             <li>Bootstrap</li>
                             <li>Git</li>
                             <li>MongoDB</li>
                             
                            </ul>
                        </ListItem>

                        <ListItem>
                            <ul style={{ fontSize:'18px', textAlign:'left'}}>
                            <h5><strong>— Soft Skills</strong></h5>
                            
                             <li>Integrity</li>
                             <li>Problem-Solving</li>
                             <li>Creativity</li>
                             <li>Time Management</li>
                             <li>Professionalism</li>
                             <li>Resourceful</li>
                             <li>Willingness to learn</li>
                             <li>Attention to detail</li>
                            </ul>
                        </ListItem>
                       
                    </List>
                </Cell>
                <Cell col={9}>
                    <CardText col={9}>
                        <div>
                            <h2>— Professional Summary:</h2>
                            <p style={{fontSize:'20px'}}>College graduate with a BA in Economics and BS in Sports Medicine, along with a minor in business administration. Excellent problem-solving, leadership and time management skills. Highly motivated with the drive to excel and committed to professionalism. Entrepreneur who built a successful personal training business from the ground up. As a result of the current pandemic, I made the decision to transitioned to a career as a Full-Stack Web Developer in 2020. 
                            <h2>— Experience:</h2>
                            <h5><strong>Owner, Founder, Fit4Lyfe Athletics, Fort Collins, CO — 2015-2020 </strong></h5>
                            In 2015 I established a health and wellness business called Fit4lyfe Athletics. It started out as a way to sell workout programs on campus. This business continued to grow and expand, it taught me invaluable lessons about how to run a business, and the value of building a community within your profession.
                            <h5><strong>Personal Trainer, Fit4LyfeAthletics, Fort Collins-Denver, CO — 2015-2020</strong></h5>
                            Operated as an independent contractor at several gyms over the past five years. As a personal trainer I worked with many different population sets, which challenged me to develop strategies of how to best address their personal situation. This job required patience, creativity, resourcefulness, and problem-solving skills on a daily if not hourly business.
                            <h5><strong>Fitness Nutriton Specialist, Fit4LyfeAthletics, Denver, CO — 2019-2020</strong></h5>
                            This specialist certification allowed me to implement a multifaceted approach to my clients training.
                            <h2>— Education:</h2>
                            
                            <ul style={{fontSize:'18px'}}>
                                <li><strong>Colorado State University, Fort Collins, CO, 80523  — Bachelor of Science, Concentration in Sports Medicine, 2016.</strong></li>
                                <li><strong>Colorado State University, Fort Collins, CO, 80523  — Bachelor of Liberal Arts, College of Economics, 2016.</strong></li>
                                <li><strong>Colorado State University, Fort Collins, CO, 80523  — Minor in Business Administration, College of Business, 2016.</strong></li>
                                <li><strong>University of Denver, Denver, CO, 80208 —Certified Full-Stack Web Developer, August 2020 — December, 2020.</strong></li>
                            </ul>
                            <h2>— References:</h2>
                               
                                References and expanded job history are available upon request.
                            </p>
                        </div>
                    </CardText>
                </Cell>
                </Grid>  
                </div>
            </div>
        );
    }
}

export default Resume;