type MovieCardProps = {
  id: number,
  title: string,
  posterUrl?: string,
  description?: string,
}

export default function MovieCard({id, title, posterUrl, description}: MovieCardProps){

  return (
    <>
      <p>
        <span>{id}</span>
        <span>{title}</span>
        <span>{posterUrl}</span>
        <span>{description}</span>
      </p>
    </>
  )
}