import React from 'react'

export const Statistics = ({title, content}) => {
  return (
    <div className="footer__statistic">
        <div className="static__title">
            <h4 className="title">{title}</h4>
        </div>
        <div className='static__info'>
            <h2 className='info'>{content}</h2>
        </div>
    </div>
  )
}
