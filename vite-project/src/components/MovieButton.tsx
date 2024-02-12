type MovieButton = {
  onClick: () => void,
  copy: string,
}

export default function MovieButton({onClick, copy}: MovieButton) {

  return (
    <button onClick={onClick}>{copy}</button>
  )
}