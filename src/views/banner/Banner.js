import React from "react"
import PropTypes from "prop-types"
import "./Banner.scss"
import { FacebookButton, Button, Icon } from "@components"
import { Link, navigate } from "gatsby"

const Banner = ({ heading, description, facebookLink }) => {
  return (
    <>
      <div className="banner__bg" />
      <div className="banner__shape-wrapper">
        <Icon className="banner__shape" type="bgShape" />
      </div>
      <section className="banner section">
        <div className="banner__heading">
          <h1 className="heading-primary">{heading}</h1>
          <p className="banner__paragraph">{description}</p>
        </div>
        <div className="banner__buttons">
          <Button
            className="banner__find-btn"
            color="red"
            link="https://www.mapotic.com/maskapolka-1"
            onClick={() => navigate("/#map")}
          >
            <Icon className="banner__icon" type="pin" round />
            Znajdź punkt
          </Button>
          <a
            href="https://www.mapotic.com/maskapolka-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="banner__add-btn"
              color="white"
              link="https://mapa.maskapolka.pl/"
            >
              <Icon className="banner__icon" type="plus" round />
              Dodaj punkt
            </Button>
          </a>
        </div>
        <div className="banner__scroll-down">
          <Link to="/#about">
            <Icon className="banner__scroll-down-icon" type="arrow" round />
            <div>Zjedź w dół i dowiedz się więcej o akcji Maska Polka</div>
          </Link>
        </div>
        <Icon className="banner__illustration" type="iluStart" />
        <Icon className="banner__illustration--2" type="iluStart2" />
        <FacebookButton
          className="banner__fb-btn"
          text="Dołącz do akcji"
          link={facebookLink}
        />
      </section>
    </>
  )
}

Banner.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  facebookLink: PropTypes.string.isRequired,
}

export default React.memo(Banner)
