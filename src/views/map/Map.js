import React from "react"
import { MapFrame } from "@components"
import "./Map.scss"

const MapView = () => {
  return (
    <section className="map-view section">
      <MapFrame className="map-view__map" />
    </section>
  )
}

export default React.memo(MapView)
