import React from "react"
import PropTypes from "prop-types"
import "./FacebookButton.scss"
import Icon from "../Icon/Icon"
import { Button } from "@components"
import { classnames } from "~/utils"

const FacebookButton = ({ className, link, text }) => {
  return (
    <a
      className={classnames(className)}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button color="blue">
        {text}
        <Icon className={"facebook-btn__icon"} type="facebook" round></Icon>
      </Button>
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
