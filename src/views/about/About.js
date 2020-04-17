import React from "react"
import PropTypes from "prop-types"
import "./About.scss"
import { Icon } from "@components"

const steps = [
  {
    title: "Zdezynfekuj ręce",
    icon: "instruction1",
  },
  {
    title: "Złap za gumki",
    icon: "instruction2",
  },
  {
    title: "Załóż na twarz",
    icon: "instruction3",
  },
]

const About = ({ description }) => {
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
      <p className="about__paragraph heading-secondary" id="how-to">
        Jak prawidłowo założyć maseczkę?
      </p>
      <ol className="about__instruction">
        {steps.map((step, i) => (
          <li key={step.icon}>
            <div className="about__icon-wrapper">
              <Icon className="about__icon" type={step.icon} />
            </div>
            {`${i + 1}. ${step.title}`}
          </li>
        ))}
      </ol>
    </div>
  )
}

About.propTypes = {
  description: PropTypes.string.isRequired,
}

export default React.memo(About)
