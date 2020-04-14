import React from "react"
import PropTypes from "prop-types"
import "./Icon.scss"
import arrow from "../../images/arrow.svg"
import bgShape from "../../images/bg-shape.svg"
import logo from "../../images/logo.svg"
import pin from "../../images/pin.svg"
import plus from "../../images/plus.svg"
import iluStart from "../../images/Ilu_Start.svg"
import iluFooter from "../../images/Ilu_Footer.svg"
import facebookLogo from "../../images/facebook.svg"
import { classnames } from "~/utils"

const icons = {
  arrow: arrow,
  bgShape: bgShape,
  facebook: facebookLogo,
  iluStart: iluStart,
  iluFooter: iluFooter,
  logo: logo,
  pin: pin,
  plus: plus,
}

const Icon = ({ className, type, round }) => {
  const icon = icons[type]
  return (
    <svg
      className={classnames("icon", className, { "icon--round": round })}
      viewBox={icon.viewBox}
    >
      <use xlinkHref={icon.url} />
    </svg>
  )
}

Icon.propTypes = {
  type: PropTypes.oneOf([
    "arrow",
    "bgShape",
    "facebook",
    "iluStart",
    "iluFooter",
    "logo",
    "pin",
    "plus",
  ]).isRequired,
  round: PropTypes.bool,
  className: PropTypes.string,
}

Icon.defaultProps = {
  className: "",
  round: false,
}

export default Icon
