
import React from "react";
import dots from "../images/Dots.png"
import venus from "../images/venus.png"




class Firstpg extends React.Component {

render(){
  return (


          <section className = "firstpg" id="firstpgnav">

            <div className = "video">

              <video id="myVideo" loop={true} autoPlay={true} muted={true}>

                  <source src="./jebouge.webm" type="video/mp4"/>

              </video>
            </div>

              <div className = "event">

                <h2>
                    Je Bouge pour les Droits des Femmes  
                    · deuxième édition
                </h2>
                <p>
                Aujourd'hui, en Belgique, les femmes ont théoriquement les mêmes droits que les hommes. 
                Pourtant si l’égalité gagne du terrain au niveau des lois, leur concrétisation réelle stagne encore.

                Au quotidien, les femmes évoquent régulièrement leurs droits par la négative : les droits qu'elles n'ont toujours pas, ceux qu'elles peuvent difficilement faire valoir, ceux qu'on leur refuse… Qu'il s'agisse de l'emploi, des discriminations sexistes, des violences, de l’accès à la contraception, des pressions sur le corps des femmes, sur la maternité, du manque de places d’accueil pour les enfants en bas âge… de nombreux obstacles subsistent. 
Des droits laborieusement conquis sont actuellement remis en questions par le contexte d’austérité, qui pèse particulièrement sur les femmes. 

L'accès aux droits fondamentaux constitue une étape essentielle à l'<b>émancipation des femmes</b>, c’est une revendication centrale pour une <b>société solidaire, juste et égalitaire</b>. 

Ce <b>dimanche 30 juin</b>, au parc de la Citadelle de <b>Liège</b>, bougeons ensemble pour les droits des femmes ! <br/><br/>En marchant ou en courant, sur un <b>parcours de 3, 6 ou 9 km</b>, affirmons notre volonté d’égalité !
                </p>

              </div>

              <div className= "venusdiv">
                  <img src={venus} className="venus"  alt="Venuslogo"/>
              </div>

              <img className = "dots" src={dots} alt="decorativesdots" />



          </section>

  )
}

};

export default Firstpg;
