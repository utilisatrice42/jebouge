
import React from "react";
import dots from "../images/Dots.png"
import venus from "../images/venus.png"




class Firstpg extends React.Component {

render(){
  return (


          <section className = "firstpg" id="firstpgnav">

            <div className = "video">

              <video id="myVideo" loop={true} autoPlay={true} muted={true}>

                  <source src="./jebouge.webm" type="video/mp4"/>

              </video>
            </div>

              <div className = "event">

                <h2>
                    Les inégalités c’est tous les jours, tous le temps !
                </h2>
                <p>
                   T’as besoin de bouger pour tes droits ?
                  En plus d’un super parcours sur lequel tu peux venir courir,
                  marcher, faire de la poussette, faire du roller, de la trotinette...
                  On prévoit des super activités !  On s’approprie l’espace public!
                </p>

              </div>

              <div className= "venusdiv">
                  <img src={venus} className="venus"  alt="Venuslogo"/>
              </div>

              <img className = "dots" src={dots} />



          </section>

  )
}

};

export default Firstpg;
