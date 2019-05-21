import React from 'react';
import parcours from '../../images/parcours-jbdf.png';

function Trail (props){

      return(

        <div style={{display: props.trail? "block" : "none"}}>


           <div className="boxtrail" >

            <h2> Parcours de 3 · 6 · 9 km </h2>
              <p>

                  Choisis la manière dont tu vas faire ton parcours : à faire en marchant
                  ou en courant, seul·e ou en groupe, accessible à tou·te·s, aux personnes à mobilité réduite et aux poussettes. 

                
              </p>

              <img style={{width:"400px"}} src={parcours} alt="map of trail" />


           </div>


          </div>


      )

}

export default Trail;
