import React, { useState } from "react"
import PropTypes from "prop-types"
import "./Layout.scss"
import { Button, Hamburger, Icon } from "@components"
import { Link, useStaticQuery, graphql } from "gatsby"

const items = [
  {
    label: "O akcji",
    link: "/#about",
  },
  {
    label: "Prawidłowe używanie maski",
    link: "/#about",
  },
  {
    label: "Instrukcja dodawania punktów",
    link: "/#map",
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
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      settings: contentfulUstawieniaSingle {
        contactMail
      }
    }
  `)

  return (
    <main className="main">
      <Link className="main__logo" to="/" aria-label="Home page">
        <Icon type="logo" />
      </Link>
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
        <a href={`mailto:${data.settings.contactMail}`}>
          <Button>Skontaktuj się z nami</Button>
        </a>
        <div>
          Strona zaprojektowana dzięki wsparciu firmy: Boldare
          <br />
          Wszelkie prawa zastrzeone przez MatkaPolka.pl | 2020
        </div>
      </footer>
      <img
        className="footer__icon"
        src="/images/Ilu_Footer.svg"
        alt="Społeczność w maskach"
      />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default React.memo(Layout)
