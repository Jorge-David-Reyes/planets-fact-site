import { Link } from "react-router-dom"

export const NavBarItem = ({name}) => {
  return (
    <>
        <li className={`navbar-item`}>
          <Link className={name} to={`/${name.toLowerCase()}`}><h4>{name}</h4></Link>
        </li>
    </>
  )
}
