import { NavBarItem } from "./NavBarItem";

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


