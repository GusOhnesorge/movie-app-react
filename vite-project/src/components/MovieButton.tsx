type MovieButtonProps = {
  onClick: () => void,
  copy: string,
}

export default function MovieButton({onClick, copy}: MovieButtonProps) {

  return (
    <button onClick={onClick}>{copy}</button>
  )
}