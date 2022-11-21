import React, { useState } from "react";
import { getPeople } from "../api/tmdb-api";
import PageTemplate from '../components/templatePeopleListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import MyPagination from "../components/myPagination";

const PeoplePage = (props) => {
  const [page, setPage] = useState(1);

  const {  data, error, isLoading, isError }  = useQuery(['people', {page}], getPeople)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

    const totalPages = data.total_pages;
  const people = data.results;



  return (
<>
    <PageTemplate
    title="People"
    persons={people}
    action={(movie) => {
      return <AddToFavoritesIcon movie={movie} />
    }}
  />
<MyPagination page={Number(page)} setPage={setPage} totalPages={Number(totalPages)}/>
</>
  );
};
export default PeoplePage;
