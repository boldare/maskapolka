import React, { useState } from "react"
import PropTypes from "prop-types"
import { Collapse, MapFrame } from "@components"
import "./Map.scss"

const MapView = ({ howToFind, howToAdd }) => {
  const [isHowToFindOpen, setIsHowToFindOpen] = useState(false)
  const [isHowToAddOpen, setIsHowToAddOpen] = useState(false)

  return (
    <>
      <section className="map-view__faq section" id="map">
        <Collapse
          open={isHowToFindOpen}
          title={"Potrzebujesz maseczki?"}
          onClick={() => setIsHowToFindOpen(!isHowToFindOpen)}
        >
          <div
            className="inner-html"
            dangerouslySetInnerHTML={{
              __html: howToFind,
            }}
          />
        </Collapse>
        <Collapse
          open={isHowToAddOpen}
          title={"Chcesz pomóc? Oznacz się na mapie!"}
          onClick={() => setIsHowToAddOpen(!isHowToAddOpen)}
        >
          <div
            className="inner-html"
            dangerouslySetInnerHTML={{
              __html: howToAdd,
            }}
          />
        </Collapse>
      </section>
      <MapFrame className="map-view__map section" />
    </>
  )
}

MapView.propTypes = {
  howToFind: PropTypes.string.isRequired,
  howToAdd: PropTypes.string.isRequired,
}

export default React.memo(MapView)
