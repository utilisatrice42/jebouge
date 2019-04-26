import React from 'react';
import Video from './video.js'

function Videobox (props){

      return(

        <div style={{display: props.trailer? "block" : "none"}}>


           <div className="boxvid" >



              <Video/>


           </div>


          </div>


      )

}

export default Videobox;
