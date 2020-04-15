import React from "react"
import PropTypes from "prop-types"
import { Button } from "@components"
import "./Press.scss"

const Press = ({ packUrl }) => {
  return (
    <>
      <div className="press__bg"></div>
      <section className="press__pack section">
        <div className="press__heading">
          <h1 className="heading-primary text--short">
            Materiały prasowe o akcji:
          </h1>
          <p className="press__subheading heading-secondary text--short">
            Mamy dla Ciebie przydatne rzeczy w postaci logo, plakatów czy opisu
            naszej akcji.
          </p>
        </div>
        <div className="press__file">
          <div>
            <p className="heading-secondary text--short">Press pack.zip</p>
            <p className="press__description text--short">
              W paczce znajdują się materiały przydatne do promocji akcji wraz z
              opisami oraz plikami wizualnymi.
            </p>
          </div>
          <a href={packUrl} target="_blank" rel="noopener noreferrer">
            <Button color="white">Pobierz Press pack.zip</Button>
          </a>
        </div>
      </section>
      <h2 class="heading-primary press__heading-secondary">
        Dołącz do akcji prospołecznej i odpowiedzialnie, razem w zdrowiu
        przejdźmy sytuację związaną z pandemią.
      </h2>
    </>
  )
}

Press.propTypes = {
  packUrl: PropTypes.string.isRequired,
}

export default React.memo(Press)
