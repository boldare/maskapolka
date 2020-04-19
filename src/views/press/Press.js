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
          <h1 className="heading-primary text--short">Press pack</h1>
          <p className="press__subheading heading-secondary">
            Chcesz pomóc nam w nagłośnieniu inicjatywy? Fantastycznie!
            Przygotowaliśmy dla Ciebie materiały potrzebne do promocji.
          </p>
        </div>
        <div className="press__file">
          <div>
            <p className="heading-secondary text--short">Press pack.zip</p>
            <p className="press__description text--short">
              W naszym press packu znajdziesz pliki wizualne (logo, plakaty) i
              opis inicjatywy.
            </p>
          </div>
          <a href={packUrl} target="_blank" rel="noopener noreferrer">
            <Button color="white">Pobierz Press pack.zip</Button>
          </a>
        </div>
        <div className="inner-html">
          Skontaktuj się z nami, wysyłając maila na{" "}
          <a href="mailto:media.maskapolka@gmail.com">
            media.maskapolka@gmail.com
          </a>
          .
        </div>
      </section>
      <h2 class="heading-primary press__heading-secondary">
        Dołącz do akcji prospołecznej i odpowiedzialnie,{" "}
        <span className="highlight">razem w zdrowiu </span>
        przejdźmy sytuację związaną z pandemią.
      </h2>
    </>
  )
}

Press.propTypes = {
  packUrl: PropTypes.string.isRequired,
}

export default React.memo(Press)
