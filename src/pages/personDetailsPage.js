import React from "react";
import { useParams } from 'react-router-dom';
import PersonDetails from "../components/personDetails/";
import PageTemplate from "../components/templatePeoplePage";
import { getPerson,getPersonMovieCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import KnownMovies from "../components/knownMovies";


const PersonDetailsPage = (props) => {
  const { id } = useParams();




    const { data: people} = useQuery(
    ["MovieCredits", { id: id }],
    getPersonMovieCredits
  );
   
  const { data: person, error, isLoading, isError } = useQuery(
    ["persond", { id: id }],
    getPerson
  );


  


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }



  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
            <PersonDetails person={person} />
        
            {people.cast.length>0?(
              <KnownMovies person={people}/>
            ):
            (
             <p>Waiting for more information...</p>
            )
            }
          
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for more details</p>
      )}
    </>
  );
};


export default PersonDetailsPage;