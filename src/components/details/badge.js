import React from 'react';

function Badge (props){

      return(

        <div style={{display: props.badge? "block" : "none"}}>


           <div className="box" >

           <h2> En savoir plus ? </h2>
              <p>

                 Revenez sur le site début juin! <br/>

              </p>

           </div>


          </div>


      )

}

export default Badge;
