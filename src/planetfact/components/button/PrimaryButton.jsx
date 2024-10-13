export const PrimaryButton = ({title, onClick}) => {
  return (
    <button onClick={onClick} className="button-primary">{title}</button>
  )
}
