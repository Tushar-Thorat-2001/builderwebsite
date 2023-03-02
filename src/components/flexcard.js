import React from "react";

import {
  CardMedia,
  Grid,
  Typography,
  CardContent,
  CardActions,
  Card,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
const FlexCard = () => {
  return (
    <>
      <Typography variant="h3">Homes and Properites</Typography>
      <Box width="100%" sx={{ py: "50px" }} display="flex" spacing={2}>
        <Card sx={{ width: "50%", height: "590px" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="600"
            image="images/1.jpg"
            width={20}
          />
        </Card>

        <Grid
          container
          direction={"col"}
          spacing={2}
          width="50%"
          justifyContent={"end"}
          sx={{ paddingLeft: 2 }}
        >
          <Grid item md={12}>
            <Card sx={{ w: "25" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image="images/3.jpg"
              />
              <CardMedia component="img" />
            </Card>
          </Grid>
          <Grid item md={12}>
            <Card>
              <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image="images/2.jpg"
              />
            </Card>
          </Grid>
          <Grid item md={12}>
            <Card>
              <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image="images/4.jpg"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FlexCard;
