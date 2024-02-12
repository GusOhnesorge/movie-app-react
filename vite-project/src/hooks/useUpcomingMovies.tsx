import { useState, useEffect, useCallback } from 'react';

export type Movie = {
  id: number,
  title: string,
  poster_path?: string,
  overview?: string,
  vote_average?: number,
  vote_count?: number,
}

function useUpcomingMovies(movieDbApiKey: string) {
  const [fullMovieList, setFullMovieList] = useState<Movie[]>([]);
  const [currentMoviePage, setCurrentMoviePage] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);


  const fetchUpcomingMovies = useCallback(async (page: number) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`, {
        headers: new Headers({
          'Authorization': 'Bearer ' + movieDbApiKey,
        })
      })
      const data = await response.json();
      const results: Movie[] = data.results;
      
      setCurrentMoviePage([...results]);
      setFullMovieList(prevMovies => [...prevMovies, ...results]);
    } catch (error) {
      console.error(error);
    }
  }, [movieDbApiKey]);

  useEffect(() => {
    fetchUpcomingMovies(page);
  }, [page, fetchUpcomingMovies]);


  return {fullMovieList, page, currentMoviePage, setPage, setFullMovieList};
}

export default useUpcomingMovies