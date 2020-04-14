import React from "react"
import PropTypes from "prop-types"
import "./Button.scss"
import { classnames } from "~/utils"

const Button = ({ children, className, onClick, type }) => (
  <button
    className={classnames("button", className)}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
}

Button.defaultProps = {
  className: "",
  onClick: () => {},
  type: "button",
}

export default React.memo(Button)
