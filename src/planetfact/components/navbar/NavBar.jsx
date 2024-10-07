import { NavBarItem } from "./NavBarItem";
import { useState } from 'react';

export const NavBar = ({ planets }) => {

  return (
    <>
        <nav className="nav">
            <ul>
                {planets.map((planet, index) => (
                    <NavBarItem key={index} name={planet}/>
                ))}
            </ul>
        </nav>
    </>
  )
}


