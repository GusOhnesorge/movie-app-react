import MovieScore from "./MovieScore"

type MovieCardProps = {
  title: string,
  posterPath?: string,
  description?: string,
  score?: number,
  voteCount?: number,
}

export default function MovieCard({title, posterPath, description, score, voteCount}: MovieCardProps){

  return (
    <>
      <p>
        <span><strong>{title}</strong></span>
      </p>
      {posterPath && <img src={`https://image.tmdb.org/t/p/original/${posterPath}`} style={{height: '150px', width: '100px'}}></img>}
      <p>{description}</p>
      { score !== undefined && <MovieScore score={score} voteCount={voteCount} /> }
    </>
  )
}