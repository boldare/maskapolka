import React, { useState } from "react"
import { Collapse, MapFrame } from "@components"
import "./Map.scss"

const MapView = () => {
  const [isHowToFindOpen, setIsHowToFindOpen] = useState(false)
  const [isHowToAddOpen, setIsHowToAddOpen] = useState(false)

  return (
    <>
      <section className="map-view__faq section" id="map">
        <Collapse
          open={isHowToFindOpen}
          title={"Jak znaleźć miejsca szycia czy odbioru"}
          onClick={() => setIsHowToFindOpen(!isHowToFindOpen)}
        >
          {"XD"}
        </Collapse>
        <Collapse
          open={isHowToAddOpen}
          title={"Jak dodawać punkty na mapie"}
          onClick={() => setIsHowToAddOpen(!isHowToAddOpen)}
        >
          {"XD"}
        </Collapse>
      </section>
      <MapFrame className="map-view__map section" />
    </>
  )
}

export default React.memo(MapView)
