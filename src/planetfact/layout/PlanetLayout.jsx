import { useState } from 'react';
import { Header } from '../components/header';

export const PlanetLayout = ({ image, title, paragraph, statistics, source, menu }) => {

  return (
    <>
        <Header/>
        <main>
          <article className="box__planet">
              <section className="text__planet">
                  <figure className="planet__image">{image}</figure>
                  <div className="planet__content">
                      <header className="planet__info">
                          <h1 className="planet__title title">{title}</h1>
                          <p className="planet__paragraph paragraph">{paragraph}</p>
                          <footer className="planet__source">
                              <p className="source">{source}</p>
                          </footer>
                      </header>
                      <nav className="planet__menu">{menu}</nav>
                  </div>
              </section>
              <section className="footer__planet">{statistics}</section>
          </article>
        </main>
    </>
  )
}
