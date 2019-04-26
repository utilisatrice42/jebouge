
import React from "react";

import viefeminine from "../images/VFlogo.png"
import ets from "../images/ETS.png"

class Thirdpg extends React.Component {

render(){
  return (


          <section className = "thirdpg" id="thirdpgnav">

            <div className = "viefeminine">

                <img src={viefeminine} style={{width:"150px"}}/>

                <p style={{width:"400px"}}> Vie Féminine est donc plus que jamais déterminée à lutter contre toutes les injustices et inégalités
                 produites par ces systèmes, à mettre en évidence et à dénoncer leurs effets pervers sur la vie des femmes.
                 C’est pourquoi Vie Féminine s’est engagé lors du Congrès du 29 mai 2010 à intégrer dès aujourd’hui
                 une lecture de la société qui tienne compte de ces trois systèmes de domination et qui s’ancre dans la vie
                 quotidienne des femmes. </p>

            </div>

            <div className="ets">

                <img src={ets} style={{width:"200px"}}/>

                <p style={{width:"400px"}}> Vie Féminine est donc plus que jamais déterminée à lutter contre toutes les injustices et inégalités
                 produites par ces systèmes, à mettre en évidence et à dénoncer leurs effets pervers sur la vie des femmes.
                 C’est pourquoi Vie Féminine s’est engagé lors du Congrès du 29 mai 2010 à intégrer dès aujourd’hui
                 une lecture de la société qui tienne compte de ces trois systèmes de domination et qui s’ancre dans la vie
                 quotidienne des femmes. </p>

             </div>


             <div className="partnership">

             <h2> Partenaires </h2>

             </div>




          </section>

  )
}

};

export default Thirdpg;
