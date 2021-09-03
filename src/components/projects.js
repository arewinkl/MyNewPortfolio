import React, {Component} from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardText } from 'react-mdl';
import '../App.css';


class Projects extends Component {
   
    constructor(props) {
        super(props);
        this.state= {activeTab: 0};
        
    }
    toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div className="apps">

                    <Card className="tart"  shadow={100} style={{ textAlign: 'center', display: 'inline-block'}}>
                        <CardTitle expand style={{color: 'white', textShadow:'2px 0',height: '330px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png)center/ cover #D3D3D3'}}>React Employee Directory</CardTitle>
                        <CardText >
                            This react application contains an entire employee directory, and allows you to sort through the directory by employee names to find their contact information.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/arewinkl/employee-Directory" target="_blank" colored>GitHub</Button>
                            <Button href="https://arewinkl.github.io/employee-Directory/" target="_blank" colored>GitHub Pages</Button>
                        </CardActions>
                    </Card>,
                    <Card className="tart" shadow={100} style={{ textAlign: 'center', font:'40px', display: 'inline-block'}}>
                        <CardTitle  expand style={{color: 'white', textShadow:'2px 0', height: '330px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png)center/ cover #D3D3D3' }}>
                            Conference Planner</CardTitle>
                        <CardText >
                            This Conference Planner application, allows you to register for a conference and view the details of that conference. The user is also allowed to create their own conference and post it.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/arewinkl/conferencePlanner" target="_blank" colored>GitHub</Button>
                            <Button href="https://conference-planner.herokuapp.com/" target="_blank" colored>Heroku</Button>
                        </CardActions>
                     </Card>,
                     <Card className="tart" shadow={100} style={{display: 'inline-block',  textAlign: 'center'}}>
                        <CardTitle expand style={{color: 'white', textShadow:'2px 0', height: '330px',background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png)center/ cover #D3D3D3'}}>Tic-Tac-Toe Master</CardTitle>
                        <CardText >
                            This react application allows the user to practice their tic-tac-toe skills whenever they want! they just need to sit down with a friend and see who is the best. You can even go back and checkout out what the board looked at at different stages of the game.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/arewinkl/tic-tac-toe-master" target="_blank" colored>GitHub</Button>
                            <Button href="https://arewinkl.github.io/tic-tac-toe-master/" target="_blank" colored>GitHub Pages</Button>
                        </CardActions>
                    </Card >,
                    <Card className="tart" shadow={100} style={{ textAlign: 'center', display:'inline-block'}}>
                        <CardTitle expand style={{color: 'white', textShadow:'2px 0', height: '330px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png)center/ cover #D3D3D3'}}>Music Master</CardTitle>
                        <CardText className="meow">
                            This react application called MusicMaster, is for all those out there who love music and want to stay up to date on the newest & most popular music. You can make playlists of your favorite artists and songs. If you like collecting records you can use the wishlist tab to save albums as a resource when you are out looking to buy more.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/arewinkl/MusicMaster" target="_blank" colored>GitHub</Button>
                            <Button href="https://arewinkl.github.io/MusicMaster/" target="_blank" colored>GitHub Pages</Button>
                        </CardActions>
                    </Card>,
            </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div>

            <Card className="tart" shadow={100} style={{ textAlign: 'center', display: 'inline-block'}}>
                <CardTitle expand style={{color: 'white',textShadow:'2px 0', height: '330px', background: 'url(https://img.icons8.com/color/452/mongodb.png)center/ cover #D3D3D3'}}>

                    Budget Tracker</CardTitle>
                <CardText >
                    This application allows the user to track their spending. They can add and subtract funds to see how much money they have left. Each transaction can be named for easy tracking, & there is a graph to display funds.   (Node.js)
                </CardText>
                <CardActions border>
                    <Button href="https://github.com/arewinkl/PWA-budgetTracker" target="_blank" colored>GitHub</Button>

                </CardActions>
            </Card>,
            <Card className="tart" shadow={100} style={{display: 'inline-block', textAlign: 'center'}}>
                <CardTitle expand style={{color: 'white', textShadow:'2px 0', height: '330px', background: 'url(https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png)center/ cover #D3D3D3'}}>

                    Eat-Da-Burger</CardTitle>
                <CardText >
                    This application is called eat-da-burger. The whole concept of the app is for the user to be able to create burgers and then eat them once they have been made.
                </CardText>
                <CardActions border>
                    <Button href="https://github.com/arewinkl/eat-da-burger" target="_blank" colored>GitHub</Button>
                    <Button href="https://arcane-mountain-33377.herokuapp.com/" target="_blank" colored>Heroku</Button>

                </CardActions>
            </Card>
                </div>
            )
        }else if (this.state.activeTab === 2){
           return(
           <div>
                <Card className="tart" shadow={100} style={{ textAlign: 'center', display: 'inline-block'}}>
                <CardTitle expand style={{color: 'white', textShadow:'2px 0', height:'330px', background: 'url(https://logodix.com/logo/1764882.png) center/ cover #D3D3D3'}}>Couch Surfer Travel Blog</CardTitle>
                <CardText >
                    This application allows the user to create an account, from there they have the ability to write a blog post on the topic that they choose. When they log in they can see previous blogs, edit posts/ and delete them if they want.
                </CardText>
                <CardActions border>
                    <Button href="https://github.com/arewinkl/couchSurfers" target="_blank" colored>GitHub</Button>
                    <Button href="https://dry-scrubland-38194.herokuapp.com/" target="_blank" colored>Heroku</Button>
                </CardActions>
            </Card>,
            <Card className="tart" shadow={100} style={{ textAlign: 'center', display: 'inline-block'}}>
                <CardTitle expand style={{color: 'white', textShadow:'2px 0', height: '330px', background: 'url(https://logodix.com/logo/1764882.png) center/ cover #D3D3D3'}}>Team Builder</CardTitle>
                <CardText >
                    This application allows the user to operate from the command line & create a Team Homepage HTML file. Once they run node.js they follow the prompts/ answer a few questions and the file is made!
                </CardText>
                <CardActions border>
                    <Button href="https://github.com/arewinkl/teamGenerator" target="_blank" colored>GitHub</Button>

                </CardActions>
            </Card>
            </div>
           )
        }else if (this.state.activeTab === 3){
           return(
               <div>

            <Card className="tart" shadow={100} style={{display:'inline-block', textAlign:'center'}}>
                    <CardTitle expand style={{color: 'Black', textShadow:'2px 0', height:'300px', background: 'url(https://cdn1.vectorstock.com/i/1000x1000/80/95/json-file-document-icon-vector-24678095.jpg) center/ cover #D3D3D3'}}>WeatherMan</CardTitle>
                <CardText>
                "IN PROGRESS" This application allows the user to check the weather in any city that they wish, all that they need to do is fire it up and type in where they would like to check the weather, and there it is!
                </CardText>
                <CardActions border>
                <Button href="https://github.com/arewinkl/NewWeatherApp" target="_blank" colored>GitHub</Button>
                <Button href="https://arewinkl.github.io/NewWeatherApp/" target="_blank" colored>GitHub Pages</Button>
                </CardActions>
            </Card>,
            <Card className="tart" shadow={100} style={{display:'inline-block', textAlign:'center'}}>
                    <CardTitle expand style={{color: 'Black', textShadow:'2px 0', height:'320px', background: ' bottom right 15% no-repeat #D3D3D3'}}>Sports-Talk</CardTitle>
                <CardText>
                (In Progress) a sports app that would allow the user to search and find news about their favorite sports.
                </CardText>
                <CardActions border>
                <Button target="_blank" colored>""</Button>
                <Button target="_blank" colored>""</Button>
                </CardActions>
            </Card>
            </div>
           )
        }
    }
    render(){
        return(
            <div className="app-tabs">
           <Tabs  activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
              
               <Tab> <div className="tabtab">React</div></Tab>
               <Tab><div className="tabtab">MongoDB/ MySQL</div></Tab>
               <Tab><div className="tabtab">Node.js</div></Tab>
               <Tab><div className="tabtab">More Projects</div></Tab>
               
           </Tabs>

           <section className="projects-grid">
               <Grid className="projects-grid">

                   <Cell col={12}>
                   <div className="content">{this.toggleCategories()}</div>
                   </Cell>

               </Grid>

           </section>
            </div>
        );
    }
};

export default Projects;
