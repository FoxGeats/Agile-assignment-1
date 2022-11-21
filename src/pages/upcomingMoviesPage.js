import React, { useState } from "react";
import { getMovieUpcoming } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlayListIcon from '../components/cardIcons/addToPlaylist'
import MyPagination from "../components/myPagination";
const UpcomingMoviesPage = (props) => {
  const [page, setPage] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['upcoming', {page}], getMovieUpcoming)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const totalPages = data.total_pages;

  return (
    <>
    <PageTemplate
    title="Upcoming Movies"
    movies={movies}
    action={(movie) => {
      return <AddToPlayListIcon movie={movie} />
    }}
  />
  
  <MyPagination page={Number(page)} setPage={setPage} totalPages={Number(totalPages)}/>
  </>
  );
};
export default UpcomingMoviesPage;
