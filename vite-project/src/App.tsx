import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard.tsx'
import MovieButton from './components/MovieButton.tsx'
import useUpcomingMovies from './hooks/useUpcomingMovies.tsx'
import { Movie } from './hooks/useUpcomingMovies.tsx'

const movieDbApiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGI5MTViYWI3M2JlZDdiYjA4YWU4Zjc5ZmNkNjc4OSIsInN1YiI6IjY1YzkzNjk0YTkzZDI1MDE2MzRjMDQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ez063EyqkKCF3RdU-yF8UvalOQECY6yaJ-uwSyaEme4'

function App() {

  const { fullMovieList, page, setPage, setFullMovieList } = useUpcomingMovies(movieDbApiKey);
  const sortMovieResults = (movieResults: Movie[]) => {
    const sorted = [...movieResults];
    sorted.sort((a, b) => {
      return a.id - b.id
    });
    setFullMovieList(sorted);
  }

  const movieResultCards = fullMovieList.map(movie => {
    return (
      <MovieCard key={movie.id} id={movie.id} title={movie.title} posterPath={movie.poster_path} description={movie.overview} score={movie.vote_average} voteCount={movie.vote_count} />
    )
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Movie App</h1>
      <MovieButton onClick={() => setPage(page + 1)} copy={`page is ${page}`} />
      <MovieButton onClick={() => sortMovieResults(fullMovieList)} copy='sort movies by id' />
      {movieResultCards}
    </>
  )
}

export default App
