import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { useNavigate } from "react-router-dom";

export default function PersonCard({ person, action }) {
  const navigate = useNavigate();
  const change = () => {
    navigate(`/persons/${person.id}`, { state: person })
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader

        title={
          <Typography variant="h5" component="p">
            {person.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" component="p">
              <WhatshotIcon fontSize="small" />
              {person.popularity}
            </Typography>
          </Grid>

        </Grid>
      </CardContent>
      <CardContent>

        <Grid item xs={12}>
          <Typography variant="p" component="p">

            {`${person.known_for.map(m => m.title)} ,`}
          </Typography>

        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="outlined" size="medium" color="primary" onClick={change}>
          More Info ...
        </Button>
      </CardActions>
    </Card>
  )
}