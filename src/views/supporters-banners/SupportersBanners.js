import React from "react"
import PropTypes from "prop-types"
import "./SupportersBanners.scss"
import { ImageType } from "~/types"
import { Banners } from "@components"

const SupportersBanners = ({ mediaPartners }) => {
  return (
    <section className="section supporters-banners">
      <h2 className="heading-primary">Patroni medialni</h2>
      <Banners banners={mediaPartners} />
    </section>
  )
}

SupportersBanners.propTypes = {
  mediaPartners: PropTypes.arrayOf(ImageType).isRequired,
}

export default React.memo(SupportersBanners)
