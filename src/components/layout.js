/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import logo from "../images/logojebouge.png"
import parcours from '../images/parcours-jbdf.png';
import viefeminine from "../images/VFlogo.png";
import ets from "../images/ETS.png";
import fwb from "../images/FWB.svg";
import liegesport from "../images/liegesport.png";
import liegeville from "../images/Liegeville.svg";



import Header from "./header"
import Footer from "./Footer"
import Firstpg from "./firstpg"
import Firstpgbis from "./firstpgbis"
import Secondpg from "./secondpg"
import Thirdpg from "./thirdpg"
import "./layout.scss"

///////mobiles import

import Photobooth from "./details/photobooth.js";
import Badge from "./details/badge.js";
import Learn from "./details/learn.js";
import Rights from "./details/rights.js";
import Trail from "./details/trail.js";
import Video from "./details/video.js";
import Wellness from "./details/wellness.js";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <div className="websiteversion">

      <Header siteTitle={data.site.siteMetadata.title} />


          <Firstpg />

          <Firstpgbis />

          <Secondpg />

          <Thirdpg />

          <Footer />

        </div>


        

        <div className="mobileversion">

        <div className = "logomobile" >
          
          <img src={logo} alt="logojebouge"/>
         
        </div>

        <div className="boxvidmobile" >


            <iframe width="560" height="315" src="https://www.youtube.com/embed/GIHBRkn6N2c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


        </div>

        <div className = "eventmobile">

        <h3> Quand ? </h3>
              <p>
                  Le dimanche 30 juin      
              </p>
              <h3> Prix ? </h3>
              <p>
                  Participation libre      
              </p>

              <h3> Où ? </h3>
              <p>
              A la Citadelle de Liège, départ rue des Glacis au Club de Foot de Pierreuse 417.     
              </p>

              <h3> Comment venir </h3>
              <p>
                  - A pied pour une marche santé <br/>
                  - En vélo avec des cuisses musclées <br/>
                  - En bus : <br/>
                        le 23 au départ du Pont d'Avroy, le 71 et le 72 au départ de la Place Saint-Lambert. <br/>
                        Arrêt : Liège Chalet <br/>     
              </p>
              
         
      </div>


        <a href="http://docs.google.com/forms/d/e/1FAIpQLSfTnwZA5NungZ4MP6pfkmpezHpS7qyGFf7_zhdOCRMyY2YWsA/viewform" target="_blank" rel="noopener noreferrer">
         <button className="subscriptionmobile">
              S'inscrire
         </button>
      </a>

      


            <div className = "eventmobile">

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


            


            <div className="boxtrailmobile" >

            <h2> Le parcours </h2>


            <h2>  de 3 · 6 · 9 km </h2>
              <p>

                  Choisis la manière dont tu vas faire ton parcours : à faire en marchant
                  ou en courant, seul·e ou en groupe, accessible à tou·te·s, aux personnes à mobilité réduite et aux poussettes. 

                
              </p>

              <img style={{width:"90%"}} src={parcours} alt="map trail" />


           </div>

            <Trail className="trailmobile" />

        
            {/* <h2> Photobooth ensorcelé </h2>

            <Photobooth className="photomobile" />

            <h2> Badge féministe </h2>

            <Badge className="badgemobile" />

            <h2> Les femmes dans tout ça </h2>

            <Learn className="learnmobile" /> */}

<div className = "eventmobile">

<h2> Organisatrices : </h2>

<div className = "viefeminine">

<img src={viefeminine} style={{width:"40%"}} alt="logo vie féminine"/>

<p style={{width:"100%"}}> L’égalité pour changer !
  Vie Féminine, un mouvement créé par et pour les femmes, proche de chez vous.
  En créant des lieux de rencontre ouverts à toutes, Vie Féminine donne aux femmes l’occasion de s’exprimer, de tisser des liens de solidarité, 
  de prendre conscience de ces injustices et de les dépasser.
  Au sein de ce réseau féministe s’organisent diverses activités, des services, des formations, des actions de sensibilisation. 
  Des revendications politiques sont formulées et portées collectivement. Autant de moyens de mettre en lumière ce que nous voulons : l’égalité.
  Ensemble, nous agissons pour combattre la précarité, le sexisme, le racisme, les violences, mais aussi pour développer l’autonomie des femmes, 
  afin de faire avancer la construction d’une société paritaire, solidaire et démocratique.
  Vie Féminine, c’est un vaste réseau de femmes de cultures et d’âges différents, en Wallonie et à Bruxelles.  </p>

</div>

<div className="ets">

<img src={ets} style={{width:"50%"}} alt="logo collectif et ta soeur"/>

<p style={{width:"100%"}}> « Et ta sœur ? » est un collectif liégeois de jeunes militantes, engagées en faveur des droits des femmes. 
Issu de Vie Feminine, le collectif participe à lutter à la fois contre le capitalisme, le racisme et le patriarcat qui touchent de plein fouet et en 
priorité́ les femmes de tous horizons. <br/>
Il compte une trentaine de jeunes femmes dynamiques, remontées à bloc pour participer à construire un monde plus égalitaire ! </p>

</div>


<div className="partnership">

  <h2> Partenaires : </h2>

      <img src={liegesport} style={{width:"20%"}} alt="logo liège sport"/>
      <img src={liegeville} style={{width:"20%"}} alt="logo liège ville"/>
      <img src={fwb} style={{width:"20%"}} alt="logo fwb"/>

</div>

</div>

            <Footer className="footermobile" />


        </div>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
