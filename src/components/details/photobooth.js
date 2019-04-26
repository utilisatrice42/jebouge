import React from 'react';

function Photobooth (props){

      return(

        <div style={{display: props.photobooth? "block" : "none"}}>


           <div className="box" >

            <h2> Savoirs féministes </h2>
              <p>

                  L'évènement sera parsemé de BLABLABLABLABLA <br/>

              </p>


           </div>


          </div>


      )

}

export default Photobooth;
