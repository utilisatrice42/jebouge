
import React from "react";
import Badge from "./details/badge.js"
import Learn from "./details/learn.js"
import Photobooth from "./details/photobooth.js"
import Rights from "./details/rights.js"
import dots from "../images/Dots.png"



class Secondpg extends React.Component {

constructor(props){
  super(props);
  this.state = {
    badge : true,
    photobooth : false,
    learn : false,
    activeTab : "rights",
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


                <br/>
                <br/>
                <br/>
                <br/>

                <ul id = "listActivities">
                  <li id="photobooth" onClick={() => this.OpenInfo("photobooth")}> &rsaquo; Photobooth ensorcelé </li>
                  <li id="learn" onClick={() => this.OpenInfo("learn")}> &rsaquo; En apprendre toujours plus </li>
                  <li id="badge" onClick={() => this.OpenInfo("badge")}> &rsaquo; Je fabrique mon badge </li>

                </ul>

                <img className = "dots" src={dots} />



          </section>

  )
}

};

export default Secondpg;
