import React from "react"
import PropTypes from "prop-types"
import "./Hamburger.scss"
import { classnames } from "~/utils"

const Hamburger = ({ className, onClick, open }) => {
  return (
    <button
      className={classnames("hamburger", className, {
        "hamburger--active": open,
      })}
      onClick={onClick}
      aria-label="menu-button"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  className: PropTypes.string,
}

Hamburger.defaultProps = {
  className: "",
}

export default React.memo(Hamburger)
