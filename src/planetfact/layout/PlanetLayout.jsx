import { useState } from 'react';
import { NavBar } from "../components" 

export const PlanetLayout = ({children}) => {
  const [selectedPlanet, setSelectedPlanet] = useState('');

  return (
    <>
        <NavBar onSelectPlanet={setSelectedPlanet}/>

        <div>
            {children}
        </div>
    </>
  )
}
