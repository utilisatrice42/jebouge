import React from "react";
import dots from "../images/Dots.png";
import Trail from "./details/trail.js";
import Videobox from "./details/videobox.js";
import Infos from "./details/infos.js";
import Program from "./details/program.js";
import Dossard from "./details/dossard.js";




class Firstpgbis extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      trailer : true,
      trail : false,
      infos : false,
      program : false,
      dossard : false,
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
  
  
            <section className = "firstpgbis" id="firstpgbispgnav">
  
  
              <Trail trail={this.state.trail} />  
              <Videobox trailer={this.state.trailer} />
              <Infos infos={this.state.infos}  />
              <Program program={this.state.program} />
              <Dossard dossard={this.state.dossard} />

  
                  <br/>
                  <br/>
                  <br/>
                  <br/>
  
                  <ul id = "descriptionevent">
                    <li id="trailer" onClick={() => this.OpenInfo("trailer")}> &rsaquo; Trailer </li>
                    <li id="dossard" onClick={() => this.OpenInfo("dossard")}> &rsaquo; Bouger pour l'égalité </li>
                    <li id="trail" onClick={() => this.OpenInfo("trail")}> &rsaquo; Le parcours </li>
                    <li id="program" onClick={() => this.OpenInfo("program")}> &rsaquo; Programme </li>
                    <li id="infos" onClick={() => this.OpenInfo("infos")}> &rsaquo; Infos pratiques </li>

                  </ul>
  
                  <img className = "dots" src={dots} />
  
  
  
            </section>

  )
}

};

export default Firstpgbis;