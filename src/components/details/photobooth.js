import React from 'react';

function Photobooth (props){

      return(

        <div style={{display: props.photobooth? "block" : "none"}}>


           <div className="box" >

            <h2> Te sens-tu l'âme d'une sorcière ? </h2>
              <p>

               Viens jeter un sort dans le chaudron du patriarcat et immortalise le
                moment ! <br/>

              </p>


           </div>


          </div>


      )

}

export default Photobooth;
