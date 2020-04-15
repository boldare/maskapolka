import React from "react"
import PropTypes from "prop-types"
import "./Collapse.scss"
import { Icon } from "@components"
import { classnames } from "~/utils"

const Collapse = ({ title, open, children, onClick }) => {
  return (
    <button
      className={classnames("collapse", { "collapse--open": open })}
      onClick={onClick}
    >
      <div className="collapse__title heading-secondary">
        {title}
        <Icon className="collapse__icon" type="arrow" round shadow />
      </div>
      {open && <div className="collapse__content">{children}</div>}
    </button>
  )
}

Collapse.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
}

export default React.memo(Collapse)
