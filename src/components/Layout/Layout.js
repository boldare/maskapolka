import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import "./Layout.scss"
import { Button, Hamburger, Icon } from "@components"
import { Link, useStaticQuery, graphql } from "gatsby"
import { classnames } from "~/utils"

const items = [
  {
    label: "Czym jest Maska Polka?",
    link: "/#about",
  },
  {
    label: "Jak prawidłowo założyć maseczkę?",
    link: "/#how-to",
  },
  {
    label: "Chcesz pomóc? Oznacz się na mapie!",
    link: "/#map",
  },
  {
    label: "Potrzebujesz maseczki?",
    link: "/#map",
  },
  {
    label: "Aktualności",
    link: "/#articles",
  },
  {
    label: "Press pack",
    link: "/press",
  },
  {
    label: "Napisz do nas!",
    link: "/#footer",
  },
]

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLogoMinimized, setIsLogoMinimized] = useState(false)
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      settings: contentfulUstawieniaSingle {
        contactMail
      }
    }
  `)

  useEffect(() => {
    const scrollHandler = () => {
      setIsLogoMinimized(window.innerWidth < 600 && window.scrollY > 100)
    }
    document.addEventListener("scroll", scrollHandler)
    return () => document.removeEventListener("scroll", scrollHandler)
  }, [])

  return (
    <main className="main">
      <Link
        className={classnames("main__logo", {
          "main__logo--minimized": isLogoMinimized,
        })}
        to="/"
        aria-label="Home page"
      >
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
          <Button>Napisz do nas!</Button>
        </a>
        <div>
          Strona zaprojektowana dzięki wsparciu firmy: Boldare
          <br />
          Wszelkie prawa zastrzeone przez MaskaPolka.pl | 2020
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
