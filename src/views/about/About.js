import React, { useState } from "react"
import PropTypes from "prop-types"
import "./About.scss"
import { Icon, Collapse } from "@components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { classnames } from "~/utils"
import { CollapseType } from "~/types"

const steps = [
  {
    title: "Zdezynfekuj ręce albo umyj ręce mydłem i wodą",
    icon: "instruction1",
  },
  {
    title: "Załóż maskę na nos i usta, sprawdź, czy maska dobrze przylega",
    icon: "instruction2",
  },
  {
    title: "Podczas noszenia maski unikaj dotykania jej",
    icon: "instruction3",
  },
  {
    title: "Wymień mask po kilku godzinach lub kiedy stanie się wilgotna",
    icon: "instruction4",
  },
  {
    title:
      "Zdejmij maskę, chwytając ją za uszka od tyłu. Szczelnie ją zabezpiecz. ",
    icon: "instruction4",
  },
]

const SliderArrow = ({ className, onClick, prev = false }) => {
  return (
    <div className={className} onClick={onClick}>
      <Icon
        className={classnames(
          "about__arrow",
          prev ? "about__arrow--left" : "about__arrow--right"
        )}
        type="arrow"
        round
        shadow
      />
    </div>
  )
}

const sliderSettings = {
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SliderArrow />,
  prevArrow: <SliderArrow prev />,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const About = ({ description, collapses }) => {
  const [collapseState, setCollapseState] = useState(
    collapses.reduce((res, { contentful_id }) => {
      res[contentful_id] = false
      return res
    }, {})
  )

  return (
    <div className="about section" id="about">
      <h2 className="heading-primary">
        Maska Polka to ogólnopolska oddolna akcja prospołeczna
      </h2>
      <div
        className="about__paragraph inner-html"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></div>
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

      <p className="about__paragraph heading-secondary" id="how-to">
        Jak prawidłowo założyć maseczkę?
      </p>

      <ol className="about__instruction">
        <Slider {...sliderSettings}>
          {steps.map((step, i) => (
            <li className="about__instruction-item" key={step.icon}>
              <div className="about__icon-wrapper">
                <Icon className="about__icon" type={step.icon} />
              </div>
              {`${i + 1}. ${step.title}`}
            </li>
          ))}
        </Slider>
      </ol>
    </div>
  )
}

About.propTypes = {
  description: PropTypes.string.isRequired,
  collapses: PropTypes.arrayOf(PropTypes.shape(CollapseType)),
}

export default React.memo(About)
