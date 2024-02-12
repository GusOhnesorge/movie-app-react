import { useState, useEffect, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard.tsx'
import MovieButton from './components/MovieButton.tsx'

const movieDbApiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGI5MTViYWI3M2JlZDdiYjA4YWU4Zjc5ZmNkNjc4OSIsInN1YiI6IjY1YzkzNjk0YTkzZDI1MDE2MzRjMDQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ez063EyqkKCF3RdU-yF8UvalOQECY6yaJ-uwSyaEme4'

type Movie = {
  id: number,
  title: string,
  poster_path: string
}

function App() {
  const [page, setPage] = useState<number>(1);
  const [movieResults, setMovieResults] = useState<Movie[]>([]);

  const sortMovieResults = (movieResults: Movie[]) => {
    const sorted = [...movieResults];
    sorted.sort((a, b) => {
      return a.id - b.id
    });
    setMovieResults(sorted);
  }

  const fetchUpcomingMovies = useCallback(async (page: number) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`, {
        headers: new Headers({
          'Authorization': 'Bearer ' + movieDbApiKey,
        })
      })
      const data = await response.json();
      const results: Movie[] = data.results;
      
      setMovieResults(prevMovies => [...prevMovies, ...results])
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchUpcomingMovies(page);
  }, [page, fetchUpcomingMovies]);

  const movieResultCards = movieResults.map(movie => {
    return (
      <MovieCard key={movie.id} id={movie.id} title={movie.title} posterUrl={movie.poster_path} />
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
      <MovieButton onClick={() => sortMovieResults(movieResults)} copy='sort movies by id' />
      {movieResultCards}
    </>
  )
}

export default App
