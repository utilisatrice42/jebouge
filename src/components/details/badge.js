import React from 'react';

function Badge (props){

      return(

        <div style={{display: props.badge? "block" : "none"}}>


           <div className="box" >

            <h2> Badges féministes </h2>
              <p>

                  <ul>
                  <li>Viens créer ton propre badge féministe ! <br/>
                  Une badgeuse et du matériel créatif sera mis à ta disposition </li>

                  <li> Achète ton badge de l'évènement et des associations organisatrices <br/>

                  x € (les gains servent à financer l'évènement et d'autres actions féministes)
                  </li>

                  </ul>

              </p>


           </div>


          </div>


      )

}

export default Badge;
