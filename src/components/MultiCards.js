import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";

const MultiCards = () => {
  return (
    <>
      <Typography variant="h3">News & Info</Typography>
      <Grid container direction={"row"} spacing={2}>
        <Grid item md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="images/3.jpg"
            />

            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                React
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                distinctio, iure eum quam rerum odit ullam laboriosam provident
                nesciunt repellendus officia architecto praesentium quaerat
                veniam? Nesciunt eos odio architecto sit?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="images/2.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                React
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                distinctio, iure eum quam rerum odit ullam laboriosam provident
                nesciunt repellendus officia architecto praesentium quaerat
                veniam? Nesciunt eos odio architecto sit?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="images/4.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                React
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                distinctio, iure eum quam rerum odit ullam laboriosam provident
                nesciunt repellendus officia architecto praesentium quaerat
                veniam? Nesciunt eos odio architecto sit?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default MultiCards;
