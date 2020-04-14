import React from "react"
import PropTypes from "prop-types"
import "./FacebookButton.scss"
import Icon from "../Icon/Icon"
import { classnames } from "~/utils"

const FacebookButton = ({ className, link, text }) => {
  return (
    <a
      className={classnames("facebook-btn", className)}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <Icon className={"facebook-btn__icon"} type="facebook" round></Icon>
    </a>
  )
}

FacebookButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

FacebookButton.defaultProps = {
  className: "",
}

export default React.memo(FacebookButton)
