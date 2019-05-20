import React from "react"
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Navbar extends React.Component {

  render() {
//
//     window.addEventListener("scroll", () => {
//      const event = document.querySelector("#firstpgnav");
//      const activities = document.querySelector("#secondpgnav");
//      const team = document.querySelector("#thirdpgnav");
//      const link = document.querySelectorAll(".nav-link");
//
// });

    return (

      <nav className = "navbar">

      <Link activeClass="nav-active" to="firstpgbispgnav" spy={true} smooth={true} offset={0} duration={500}>
            <a className="nav-link" a href="#firstpgbis">

            <button className="event">

                L'évènement

            </button>
          </a>
      </Link>

                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">

                  <circle cx="28" cy="45" r="4"  fill="#292727" id="strokecircle">

                  </circle>

                  </svg>

              <Link activeClass="nav-active" to="secondpgnav" spy={true} smooth={true} offset={0} duration={500}>
                  <a className="nav-link" a href="#secondpg">
                      <button className="activities">

                          Les activités

                      </button>
                  </a>
              </Link>

                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">

                  <circle cx="28" cy="45" r="4"  fill="#292727" id="strokecircle">

                  </circle>

                  </svg>

                  <Link activeClass="nav-active" to="thirdpgnav" spy={true} smooth={true} offset={0} duration={500}>
                      <a className="nav-link" a href="#thirdpg">
                          <button className="team">

                              Les organisatrices

                          </button>
                      </a>
                  </Link>



             <a  href = "https://docs.google.com/forms/d/e/1FAIpQLSfTnwZA5NungZ4MP6pfkmpezHpS7qyGFf7_zhdOCRMyY2YWsA/viewform" target="_blank">
                        <button className="subscription">
                        S'inscrire
                        </button>
                    </a>
      </nav>
    );
  }
}


export default Navbar;
