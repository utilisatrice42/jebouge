/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

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

            <Header />

            <Firstpg className="firstmobile" />

            <div className="boxvid" >



               <Video/>


            </div>

            <h2> Le parcours </h2>

            <Trail className="trailmobile" />

            <h2> Le dossard </h2>

            <Rights className="rightsmobile"/>

            <h2> Bien-être </h2>

            <Wellness className="wellmobile" />

            <h2> Photobooth ensorcelé </h2>

            <Photobooth className="photomobile" />


            <h2> Badge féministe </h2>

            <Badge className="badgemobile" />

            <h2> Les femmes dans tout ça </h2>

            <Learn className="learnmobile" />

            <div className="organisators">
            </div>

            <div className="partnership">
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
