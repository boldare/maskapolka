import React from "react"
import PropTypes from "prop-types"
import "./Layout.scss"
import Button from "../Button/Button"
import Icon from "../Icon/Icon"

const Layout = ({ children }) => {
  return (
    <main className="main">
      {children}
      <footer className="footer">
        <Button>Skontaktuj się z nami</Button>
        <div>
          Strona zaprojektowana dzięki wsparcu firmy: Boldare
          <br />
          Wszelkie prawa zastrzeone przez MatkaPolka.pl | 2020
        </div>
      </footer>
      <Icon className="footer__icon" type="iluFooter" />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default React.memo(Layout)
