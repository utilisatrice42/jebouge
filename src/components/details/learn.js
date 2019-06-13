import React from 'react';

function Learn (props){

      return(

        <div style={{display: props.learn? "block" : "none"}}>


           <div className="box" >

           <h2> Teste tes connaissances </h2>
              <p>

              Femmes liégeoises féministes : Connais-tu les grandes figures féministes liégeoises ? Tout au long du
parcours, teste tes connaissances ! 

              </p>
           </div>


          </div>


      )

}

export default Learn;
