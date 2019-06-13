import React from 'react';

function Wellness (props){

      return(

        <div style={{display: props.wellness? "block" : "none"}}>


           <div className="box" >

            <h2> Copines de sport </h2>
              <p>

              Le sport tu aimes ça mais pas en solo ? Trouve une copine de sport, proche de chez toi, avec les mêmes
envies, en t'inscrivant sur les panneaux !

              </p>


           </div>


          </div>


      )

}

export default Wellness;
