
import React from "react";
import Badge from "./details/badge.js"
import Learn from "./details/learn.js"
import Photobooth from "./details/photobooth.js"
import dots from "../images/Dots.png"
import Wellness from "./details/wellness.js"
import Rights from "./details/rights.js"




class Secondpg extends React.Component {

constructor(props){
  super(props);
  this.state = {
    badge : true,
    photobooth : false,
    learn : false,
    activeTab : "rights",
    wellness : false,
    rights : false,

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

            <Wellness wellness={this.state.wellness} />

            <Rights rights={this.state.rights} />


                <br/>
                <br/>
                <br/>
                <br/>

                <ul id = "listActivities">
                  <li id="photobooth" onClick={() => this.OpenInfo("photobooth")}> &rsaquo; Photobooth ensorcelé </li>
                  <li id="learn" onClick={() => this.OpenInfo("learn")}> &rsaquo; En apprendre toujours plus </li>
                  <li id="badge" onClick={() => this.OpenInfo("badge")}> &rsaquo; Je fabrique mon badge </li>
                  <li id="wellness" onClick={() => this.OpenInfo("wellness")}> &rsaquo; La fin du sport en solo </li>
                  <li id="rights" onClick={() => this.OpenInfo("rights")}> &rsaquo; Et tes privilèges ?! </li>

                </ul>

                <img className = "dots" src={dots} alt="decoratives dots" />



          </section>

  )
}

};

export default Secondpg;
