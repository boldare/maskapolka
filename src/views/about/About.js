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

const About = props => {
  return (
    <div className="about section">
      <h2 className="heading-primary">
        Maska Polka to ogólnopolska oddolna akcja prospołeczna
      </h2>
      <p className="about__paragraph">
        Tworząc akcje zależało nam na wzajemnej wymianie dobrych praktyk oraz
        ludzi oraz firm tworzących lub potrzebujących masek dla zapewnienia
        bezpieczeństwa sobie oraz bliskim.
      </p>
      <p className="about__paragraph heading-secondary">
        Jak poprawnie używać maseczki
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

About.propTypes = {}

export default React.memo(About)
