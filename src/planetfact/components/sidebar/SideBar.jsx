import React from 'react'
import hamburguerIcon from '../../../assets/icon-hamburger.svg'


export const SideBar = () => {
  return (
    <>
        <div className="icon-sidebar">
            <button >
                <img src={hamburguerIcon} alt="" />
            </button>
        </div>
    </>
  )
}
