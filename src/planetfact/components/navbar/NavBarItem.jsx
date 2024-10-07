export const NavBarItem = ({name}) => {
  return (
    <>
        <li className={`navbar-item`}>
            <a className={`${name}`} href={name}><h4>{name}</h4></a>
        </li>
    </>
  )
}
