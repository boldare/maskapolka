import React from "react"
import PropTypes from "prop-types"
import "./Icon.scss"
import arrow from "../../images/arrow.svg"
import bgShape from "../../images/bg-shape.svg"
import logo from "../../images/logo.svg"
import pin from "../../images/pin.svg"
import plus from "../../images/plus.svg"
import iluStart from "../../images/Ilu_Start.svg"
import iluStart2 from "../../images/Ilu_Start_2.svg"
import instruction1 from "../../images/instruction-1.svg"
import instruction2 from "../../images/instruction-2.svg"
import instruction3 from "../../images/instruction-3.svg"
import instruction4 from "../../images/instruction-4.svg"
import instruction5 from "../../images/instruction-5.svg"
import logoBoldare from "../../images/logo-boldare.svg"
import facebookLogo from "../../images/facebook.svg"
import sygnetDiff from "../../images/sygnet-diff.svg"
import { classnames } from "~/utils"

const icons = {
  arrow: arrow,
  bgShape: bgShape,
  facebook: facebookLogo,
  iluStart: iluStart,
  iluStart2: iluStart2,
  instruction1: instruction1,
  instruction2: instruction2,
  instruction3: instruction3,
  instruction4: instruction4,
  instruction5: instruction5,
  logoBoldare: logoBoldare,
  sygnetDiff: sygnetDiff,
  logo: logo,
  pin: pin,
  plus: plus,
}

const Icon = ({ className, type, round, shadow }) => {
  const icon = icons[type]
  return (
    <svg
      className={classnames("icon", className, {
        "icon--round": round,
        "icon--shadow": shadow,
      })}
      viewBox={icon.viewBox}
    >
      <use xlinkHref={icon.url} />
    </svg>
  )
}

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(icons)).isRequired,
  round: PropTypes.bool,
  className: PropTypes.string,
  shadow: PropTypes.bool,
}

Icon.defaultProps = {
  className: "",
  round: false,
  shadow: false,
}

export default Icon
