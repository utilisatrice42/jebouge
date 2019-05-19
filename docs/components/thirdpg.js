
import React from "react";

import viefeminine from "../images/VFlogo.png"
import ets from "../images/ETS.png"

class Thirdpg extends React.Component {

render(){
  return (


          <section className = "thirdpg" id="thirdpgnav">

            <div className = "viefeminine">

                <img src={viefeminine} style={{width:"150px"}}/>

                <p style={{width:"800px"}}> L’égalité pour changer !
                  Vie Féminine, un mouvement créé par et pour les femmes, proche de chez vous.
                  En créant des lieux de rencontre ouverts à toutes, Vie Féminine donne aux femmes l’occasion de s’exprimer, de tisser des liens de solidarité, 
                  de prendre conscience de ces injustices et de les dépasser.
                  Au sein de ce réseau féministe s’organisent diverses activités, des services, des formations, des actions de sensibilisation. 
                  Des revendications politiques sont formulées et portées collectivement. Autant de moyens de mettre en lumière ce que nous voulons : l’égalité.
                  Ensemble, nous agissons pour combattre la précarité, le sexisme, le racisme, les violences, mais aussi pour développer l’autonomie des femmes, 
                  afin de faire avancer la construction d’une société paritaire, solidaire et démocratique.
                  Vie Féminine, c’est un vaste réseau de femmes de cultures et d’âges différents, en Wallonie et à Bruxelles.  </p>

            </div>

            <div className="ets">

                <img src={ets} style={{width:"200px"}}/>

                <p style={{width:"400px"}}> « Et ta sœur ? » est un collectif liégeois de jeunes militantes, engagées en faveur des droits des femmes. 
                Issu de Vie Feminine, le collectif participe à lutter à la fois contre le capitalisme, le racisme et le patriarcat qui touchent de plein fouet et en 
                priorité́ les femmes de tous horizons. <br/>
                Il compte une trentaine de jeunes femmes dynamiques, remontées à bloc pour participer à construire un monde plus égalitaire ! </p>

             </div>


             <div className="partnership">

             <h2> Partenaires : </h2>

             </div>




          </section>

  )
}

};

export default Thirdpg;
