import React, { useState } from "react"
import PropTypes from "prop-types"
import "./Layout.scss"
import Button from "../Button/Button"
import Icon from "../Icon/Icon"
import footerIlu from "../../images/Ilu_Footer.svg"
import Hamburger from "../Hamburger/Hamburger"
import { Link } from "gatsby"

const items = [
  {
    label: "O akcji",
    link: "/#about",
  },
  {
    label: "Prawidłowe uywanie maski",
    link: "#",
  },
  {
    label: "Instrukcja dodawania punktów",
    link: "#",
  },
  {
    label: "Aktualności",
    link: "/#articles",
  },
  {
    label: "Materiały prasowe",
    link: "/press",
  },
  {
    label: "Kontakt",
    link: "/#footer",
  },
]

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="main">
      <div className="main__logo">
        <Icon type="logo" />
      </div>
      <div className="main__hamburger">
        <Hamburger
          open={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      <Link className="main__logo-text" to="/">
        <div className="main__logo-title">
          Maska <br />
          polka.pl
        </div>
        <div className="main__logo-description">Akcja prospołeczna</div>
      </Link>
      {isMenuOpen && (
        <nav className="nav">
          <ul className="nav__items">
            {items.map(item => (
              <Link to={item.link} onClick={() => setIsMenuOpen(false)}>
                <li className="heading-secondary nav__item">{item.label}</li>
              </Link>
            ))}
          </ul>
        </nav>
      )}
      {children}
      <footer className="footer" id="footer">
        <Button>Skontaktuj się z nami</Button>
        <div>
          Strona zaprojektowana dzięki wsparcu firmy: Boldare
          <br />
          Wszelkie prawa zastrzeone przez MatkaPolka.pl | 2020
        </div>
      </footer>
      <img className="footer__icon" src={footerIlu} />
      {/* <Icon className="footer__icon" type="iluFooter" /> */}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default React.memo(Layout)
