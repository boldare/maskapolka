import React from "react"
import PropTypes from "prop-types"
import "./MapFrame.scss"
import { classnames } from "~/utils"

const MapFrame = ({ className }) => {
  return (
    <div className={classnames("map-frame", className)}>
      <iframe
        title="map"
        allow="geolocation *; camera *;"
        frameBorder="0"
        src="https://www.mapotic.com/maskapolka-1/embed"
      ></iframe>
    </div>
  )
}

MapFrame.propTypes = {
  className: PropTypes.string.isRequired,
}

export default React.memo(MapFrame)
