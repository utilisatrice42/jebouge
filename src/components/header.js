import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logojebouge.png"
import Navbar from "./navbar.js"

const Header = ({ siteTitle }) => (

  <header className = "header" id = "myHeader"
    style={{
      background: `#FFF4F4`,
      marginBottom: `0.20rem`,
    }}
  >
    <div className = "logo">
    <img src={logo} style={{width:"200px"}}/>
    </div>

    <Navbar/>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
