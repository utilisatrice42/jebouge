import React from 'react';

function Rights (props){

      return(

        <div style={{display: props.rights? "block" : "none"}}>


           <div className="box" >

            <h2> Le jeu des privilèges </h2>
              <p>

              Notre sexe, notre genre, notre orientation sexuelle, notre couleur de peau, nos origines, notre religion nous
ouvrent ou nous ferment des portes dans la société... Participe au jeu des privilèges pour en prendre
conscience.

              </p>


           </div>


          </div>


      )

}

export default Rights;
