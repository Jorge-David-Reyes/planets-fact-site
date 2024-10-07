import { Logo } from '../logo'
import { NavBar } from '../navbar'
import { SideBar } from '../sidebar';

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

export const Header = () => {
  return (
    <>
        <header className="header">
            <div className="content-header">
                <Logo/>

                <NavBar planets = { planets }/>

                <SideBar/>
            </div>
        </header>
    </>
  )
}
