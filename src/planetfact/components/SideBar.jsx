import React from 'react'
import hamburguerIcon from '../../assets/icon-hamburger.svg'

export const SideBar = ({open, onClose, onOpen}) => {
  return (
    <>
        <div className="icon-sidebar">
            <button onClick={onOpen}>
                <img src={hamburguerIcon} alt="" />
            </button>
        </div>
    </>
  )
}
