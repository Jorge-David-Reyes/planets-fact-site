import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';

export const PlanetLayout = ({ image, title, paragraph, statistics, source, menu }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 376);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 376);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <article className="planet">
          <section className="box__planet">
            <figure className="planet__image">{image}</figure>
            <div className="planet__content">
              <div className="planet__info">
                <h1 className="planet__title">{title}</h1>
                <p className="planet__paragraph">{paragraph}</p>
                <footer className="planet__source">
                  <p className="source">Source: <Link className="source-link" to={`${source}`}>Wikipedia</Link></p>
                </footer>
              </div>
              {isMobile ? null : <nav className="planet__menu">{menu}</nav>}
            </div>
          </section>
          <section className="footer__planet">{statistics}</section>
        </article>
      </main>
    </>
  );
};
