type MovieScoreProps = {
  score: number,
  voteCount?: number,
}

export default function MovieScore({score, voteCount}: MovieScoreProps) {

  return (
    <p>
      {score}/10 ; {voteCount} votes
    </p>
  )
}