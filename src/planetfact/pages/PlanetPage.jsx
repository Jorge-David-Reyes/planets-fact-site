import React from 'react'
import { PlanetLayout } from '../layout'
import { PrimaryButton } from '../components/button'
import { Saturn } from '../components/icon'

export const PlanetPage = () => {
  return (
    <PlanetLayout>
      <div className="box__planet">
          <div className="text__planet">
              <div className="planet__image">
                <Saturn/>
              </div>

              <div className="planet__content">
                  <div className="planet__info">
                    <div>
                    <div className="planet__title">
                          <h1 className="title">Mercury</h1>
                      </div>
                      <div className="planet__paragraph">
                          <p className="paragraph">
                              Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.
                          </p>
                      </div>
                    </div>
                      <div className="planet__source">
                        <p className="source">
                          Source:
                        </p>
                      </div>
                  </div>
                  <div className="planet__menu">
                    <PrimaryButton/>
                    <PrimaryButton/>
                    <PrimaryButton/>
                  </div>
              </div>
          </div>

          <div className="footer__planet">
              <div className="footer__statistic">
                <div className="static__title">
                  <h4 className="title">Titulo</h4>
                </div>
                <div className='static__info'>
                  <h2 className='info'>58.6 Days</h2>
                </div>
              </div>
              <div className="footer__statistic">
                <div className="static__title">
                  <h4 className="title">Titulo</h4>
                </div>
                <div className='static__info'>
                  <h2 className='info'>58.6 Days</h2>
                </div>
              </div>
              <div className="footer__statistic">
                <div className="static__title">
                  <h4 className="title">Titulo</h4>
                </div>
                <div className='static__info'>
                  <h2 className='info'>58.6 Days</h2>
                </div>
              </div>
              <div className="footer__statistic">
                <div className="static__title">
                  <h4 className="title">Titulo</h4>
                </div>
                <div className='static__info'>
                  <h2 className='info'>58.6 Days</h2>
                </div>
              </div>
          </div>
      </div>

    </PlanetLayout>
  )
}
