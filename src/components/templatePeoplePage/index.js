import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getPeopleImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import { Typography } from "@mui/material";

const TemplatePeoplePage = ({ person, children }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["Persond", { id: person.id }],
    getPeopleImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.profiles 

  return (
    <>
      

      <Grid container spacing={5} sx={{ padding: "15px" }} >
        <Grid item xs={3} >
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList 
                cols={1}>
                {images.map((image) => (
                    <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.file_path}
                    />
                    </ImageListItem>
                ))}
            </ImageList>

            <Typography variant="h5">
              Personal Info
            </Typography>
            <Typography variant="h6">
              Known For
            </Typography>
            <Typography>
              {person.known_for_department}
            </Typography>
            <Typography variant="h6">
              Known Credits
            </Typography>
            <Typography>
              Personal Info
            </Typography>
            <Typography variant="h6">
              Gender
            </Typography>
            <Typography >
            {(person.gender===1 ? "Female":"Male")}
            </Typography>
            <Typography variant="h6">
             Birthday
            </Typography>
            <Typography>
              {person.birthday}
            </Typography>
            <Typography variant="h6">
              Place of Birth
            </Typography>
            <Typography >
             {person.place_of_birth}
            </Typography>
            <Typography variant="h6">
              Also Known As
            </Typography>
           {person.also_known_as.map((p)=>(
            <Typography key={p}>
             {p}
            </Typography>
           ) )} 
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplatePeoplePage;