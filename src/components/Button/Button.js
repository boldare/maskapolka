import React from "react"
import PropTypes from "prop-types"
import "./Button.scss"
import { classnames } from "~/utils"

const Button = ({ children, className, color, onClick, type, shake }) => (
  <button
    className={classnames("button", className, `button--${color}`, {
      "button--shake": shake,
    })}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["red", "white", "blue"]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
  shake: PropTypes.bool,
}

Button.defaultProps = {
  className: "",
  onClick: () => {},
  color: "red",
  type: "button",
  shake: false,
}

export default React.memo(Button)
