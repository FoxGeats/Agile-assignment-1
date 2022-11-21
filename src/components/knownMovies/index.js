import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";

export default function KnownForMovieList(person) {


  return (
   
    
  
    <ImageList 
    sx={{ 
       
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
        gridAutoColumns: "minmax(160px, 1fr)"
        
        }} >
          
       

      {person.person.cast.map((know) => (
        <ImageListItem key={know.poster_path}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${know.poster_path}`}
            srcSet={`https://image.tmdb.org/t/p/w500/${know.poster_path}`}
            alt={know.title}
            loading="lazy"
          />
            <Link to={`/movies/${know.id}`}>
          <ImageListItemBar
          
            title={know.title}
            
            actionIcon={
            
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${know.title}`}
               
              >
                <InfoIcon />
              </IconButton>
              
            }
          />
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
    
  );
}


