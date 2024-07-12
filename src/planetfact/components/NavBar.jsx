import { NavBarItem, SideBar } from "./";
import { useState } from 'react';

const planets = [
    'mercury',
    'venus',
    'earth',
    'mars',
    'jupiter',
    'saturn',
    'uranus',
    'neptune'
];

export const NavBar = ({ onSelectPlanet }) => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };

  return (
    <>
        <header className="header">
            <div className="content-header">
                <div className="box-title">
                    <h2>the planets</h2>
                </div>

                <nav className="nav">
                    <ul>
                        {planets.map((planet, index) => (
                            <NavBarItem key={index} name={planet} onSelect={() => onSelectPlanet(planet)}/>
                        ))}
                    </ul>
                </nav>

                <SideBar open={open} onClose={handleDrawerClose} onOpen={handleDrawerOpen}/>

            </div>
        </header>
    </>
  )
}


