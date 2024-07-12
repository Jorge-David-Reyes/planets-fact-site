

export const NavBarItem = ({name, onSelect }) => {
  return (
    <>
        <li className={`navbar-item`} onClick={onSelect}>
            <a className={`${name}`} href={name}><h4>{name}</h4></a>
        </li>
    </>
  )
}
