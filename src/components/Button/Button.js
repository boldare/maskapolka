import React from "react"
import PropTypes from "prop-types"
import "./Button.scss"
import { classnames } from "~/utils"

const Button = ({ children, className, color, onClick, type }) => (
  <button
    className={classnames("button", className, `button--${color}`)}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["red", "white"]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
}

Button.defaultProps = {
  className: "",
  onClick: () => {},
  color: "red",
  type: "button",
}

export default React.memo(Button)
