import React, { useState } from "react"
import PropTypes from "prop-types"
import { Collapse, MapFrame } from "@components"
import "./Map.scss"
import { CollapseType } from "~/types"

const MapView = ({ collapses }) => {
  const [collapseState, setCollapseState] = useState(
    collapses.reduce((res, { contentful_id }) => {
      res[contentful_id] = false
      return res
    }, {})
  )

  return (
    <>
      <section className="map-view__faq section" id="map">
        {collapses.map(({ contentful_id, title, content }) => (
          <Collapse
            open={collapseState[contentful_id]}
            title={title}
            onClick={() =>
              setCollapseState({
                ...collapseState,
                [contentful_id]: !collapseState[contentful_id],
              })
            }
            key={contentful_id}
          >
            <div
              className="inner-html"
              dangerouslySetInnerHTML={{
                __html: content.childMarkdownRemark.html,
              }}
            />
          </Collapse>
        ))}
      </section>
      <MapFrame className="map-view__map section" />
    </>
  )
}

MapView.propTypes = {
  collapses: PropTypes.arrayOf(PropTypes.shape(CollapseType)),
}

export default React.memo(MapView)
