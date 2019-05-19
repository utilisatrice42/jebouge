import React from 'react';

function Infos (props){

      return(

        <div style={{display: props.infos? "block" : "none"}}>


           <div className="boxtrail" >

            <h3> Quand ? </h3>
              <p>
                  Le dimanche 30 juin      
              </p>
              <h3> Prix ? </h3>
              <p>
                  Participation libre      
              </p>

              <h3> Où ? </h3>
              <p>
              A la Citadelle de Liège, départ rue des Glacis au Club de Foot de Pierreuse 417.     
              </p>

              <h3> Comment venir </h3>
              <p>
                  - A pied pour une marche santé <br/>
                  - En vélo avec des cuisses musclées <br/>
                  - En bus : <br/>
                        le 23 au départ du Pont d'Avroy, le 71 et le 72 au départ de la Place Saint-Lambert. <br/>
                        Arrêt : Liège Chalet <br/>     
              </p>
              



           </div>


          </div>


      )

}

export default Infos;
