import React, {Component} from 'react';
import { CardMedia } from 'react-mdl';
import alec from '../assets/images/Alec-Climbing.png.JPG'

class AboutMe extends Component {
    render(){
        return(
            <div className="alec-tabs">
              <div style={{paddingTop: 20 }}>
                  <h2>
                      Hi, my name is Alec.
                  </h2>
              </div>
              <div className='about_info'>
                <CardMedia style={{width: '100%', height: '100%', backgroundColor:'transparent'}}>
                    <div>
                        <img src={alec} alt="alec"/>
                        </div>
                </CardMedia>


                <p>
                    &emsp; My name is Alec Rewinkel, I am a Full Stack Web Developer native to Denver, CO.
                    I graduated from Colorado State University in Fort Collins, Colorado in 2016 with a Bachelors of Science with a concentration in Sports Medicine, a Bachelors of Economics, and a minor in Business Administration and graduated from Denver University’s Full Stack Web Development program in 2020.
                    <br/>
                    <br/>
                    &emsp; I dedicated my early career to being a personal trainer and helping my clients reach their health and fitness goals. This was an extremely rewarding job, I loved being able to show people what they are truly capable of when they put their mind to it and help them find ways to achieve these goals. I spent years keeping up with the newest research and training techniques that the health and science field have to offer. I’ve always been pabout training myself and others but eventually, I found myself yearning for a new challenge.
                    <br/>
                    <br/>
                    &emsp; The world of development was something that had always intrigued me but one that I never knew much about, I took this time to dive into it a bit more and immediately found that this was what I had been looking for. It was a different kind of challenge that I had not explored before and fell in love with it. I love that every day is full of new and different problems and that much like the health and fitness world, things are ever-evolving.
                    <br/>
                    <br/>
                    &emsp; Constantly learning and pushing myself has always been an important factor in my life and I know that this career will never allow me to become stagnant. I love meeting new people and learning about their experiences in the development field. If you would like to talk more about this at any point, please feel free to reach out if you have any questions or want to dive in further.
                    <br/>

                </p>
              </div>
            </div>
        );
    }
}

export default AboutMe;
