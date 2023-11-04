interface IButton {
  text: string
  onClick?: () => void
}

const defaultClick = () => {}

const Button = ({ text, onClick = defaultClick }: IButton) => {
  return <button onClick={onClick}>{text}</button>
}

export default Button
