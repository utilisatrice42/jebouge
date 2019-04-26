
import React from "react";
import Badge from "./details/badge.js"
import Learn from "./details/learn.js"
import Photobooth from "./details/photobooth.js"
import Rights from "./details/rights.js"
import Trail from "./details/trail.js"
import Wellness from "./details/wellness.js"
import Videobox from "./details/videobox.js"
import dots from "../images/Dots.png"



class Secondpg extends React.Component {

constructor(props){
  super(props);
  this.state = {
    trailer : true,
    badge : false,
    trail : false,
    rights : false,
    photobooth : false,
    wellness : false,
    learn : false,
    activeTab : "trailer",
  }

  this.OpenInfo = this.OpenInfo.bind(this);

}

OpenInfo(info) {
  this.setState((state) => ({
    [info] : true,
    [state.activeTab]:false,
    activeTab : info
  }));
}
render(){
  return (


          <section className = "secondpg" id="secondpgnav">

            <Badge badge={this.state.badge}/>

            <Learn learn={this.state.learn}/>

            <Photobooth photobooth={this.state.photobooth}/>

            <Rights rights={this.state.rights}/>

            <Trail trail={this.state.trail}/>

            <Wellness wellness={this.state.wellness}/>

            <Videobox trailer={this.state.trailer}/>

                <br/>
                <br/>
                <br/>
                <br/>

                <ul id = "listActivities">
                  <li id="trail" onClick={() => this.OpenInfo("trail")}> &rsaquo; Le parcours </li>
                  <li id="rights" onClick={() => this.OpenInfo("rights")}> &rsaquo; Mon dossard, mes droits </li>
                  <li id="photobooth" onClick={() => this.OpenInfo("photobooth")}> &rsaquo; Photobooth ensorcelé </li>
                  <li id="wellness" onClick={() => this.OpenInfo("wellness")}> &rsaquo; Mon bien-être et moi </li>
                  <li id="learn" onClick={() => this.OpenInfo("learn")}> &rsaquo; En apprendre toujours plus </li>
                  <li id="badge" onClick={() => this.OpenInfo("badge")}> &rsaquo; Je fabrique mon badge </li>
                  <li id="trailer" onClick={() => this.OpenInfo("trailer")}> &rsaquo; Trailer </li>

                </ul>

                <img className = "dots" src={dots} />



          </section>

  )
}

};

export default Secondpg;
