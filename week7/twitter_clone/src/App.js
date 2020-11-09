import './App.css';
import LeftSideBar from './LeftSideBar';
import Header from './Header';
import Subheader from './Subheader';
import RightSideBar from './RightSideBar';
import Main from './Main';
import tweetData from './tweetData'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faEye, faBell, faEnvelope, faBookmark, faFileAlt, faUser, faUserCircle, faImage, faFileImage, faFile, faChartBar, faSmile, faCalendarAlt, faTrashAlt} from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react';

library.add(fab,faCheckSquare, faCoffee, faBuilding, faEye, faBell,faEnvelope, faBookmark, faFileAlt, faUser, faUserCircle, faImage, faFileImage, faFile, faChartBar, faSmile, faCalendarAlt,faTrashAlt)

class App extends Component  {
  constructor(){
    super()
  
    this.state = {
      tweet: ""
      
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event){
    console.log(this.state.tweet)
       this.setState({
            tweet: this.state.tweet
        })
        console.log(this.state.tweet)
    }
  

  render(){
    /*const tweetList = tweetData.map(main => <Main name={main.name} user={main.username} tweet={main.text} imageName={main.imageName} />)*/
  return (
    <div className="grid-container">
        <Header />
        <div className="subheader">
        <Subheader/>
        </div>
        
        <LeftSideBar />
        
        <RightSideBar />
    </div>
  );
}}

export default App