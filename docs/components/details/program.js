import React from 'react';

function Program (props){

      return(

        <div style={{display: props.program? "block" : "none"}}>


           <div className="boxtrail" >

            <h3> En Matinée </h3>
              <p>
              Accueil à partir de 9h30. <br/> 
              Départ collectif à 10h avec petit échauffement collectif des muscles et des esprits. <br/>
              Pas matinal ? Départ individuel possible toute la matinée. <br/>
              Un parcours de 3, 6 ou 9km, à faire en marchant ou en courant, seul-e ou en groupe, accessible à toutes et à tous, aux personnes à mobilité réduite et aux poussettes.      
              </p>

              <h3> De Midi à 16h </h3>
              <p>
              Place aux animations. Bar et barbecue à prix modiques pour se remplir le ventre, animations ludiques sur les droits des femmes pour se remplir l’esprit ! <br/> 
              Une bonne ambiance, de la musique, du partage, de la rencontre… <br/>
              Tu auras jusqu’à 16h pour profiter pleinement de ce dimanche au soleil avec nous.
              </p>

              <a href = "https://docs.google.com/forms/d/e/1FAIpQLSfTnwZA5NungZ4MP6pfkmpezHpS7qyGFf7_zhdOCRMyY2YWsA/viewform" target="_blank">
                  <h2>Inscris-toi! </h2>
              </a>





           </div>


          </div>


      )

}

export default Program;
