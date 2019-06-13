import React from 'react';

function Badge (props){

      return(

        <div style={{display: props.badge? "block" : "none"}}>


           <div className="box" >

           <h2> Crée ton badge  </h2>
              <p>

              Toi aussi tu aimes afficher tes idées sur ta veste ? Réalise ton badge féministe personnalisé ! <br/>

              </p>

           </div>


          </div>


      )

}

export default Badge;
