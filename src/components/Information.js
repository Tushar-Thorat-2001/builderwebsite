import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import BorderStyleIcon from "@mui/icons-material/BorderStyle";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import ShareIcon from "@mui/icons-material/Share";
import DoneIcon from "@mui/icons-material/Done";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { display, padding } from "@mui/system";

const Information = () => {
  return (
    <>
      <Typography variant="h3">Today Aamod Overview</Typography>
      <Box sx={{ w: "100%", my: 2 }}>
        <Grid container direction={"row"} spacing={2}>
          <Grid item md={3} xs={6}>
            <Card sx={{ display: "flex", boxShadow: "none" }}>
              <Box padding={1}>
                <BorderStyleIcon fontSize="large" />
              </Box>
              <Box>
                <Typography variant="h6" color="text.secondary">
                  Project Area
                </Typography>
                <Typography fontWeight="bold">2.67 Acres(35% open)</Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={3} xs={6}>
            <Card sx={{ display: "flex", boxShadow: "none" }}>
              <Box padding={1}>
                <AspectRatioIcon fontSize="large" />
              </Box>
              <Box>
                <Typography variant="h6" color="text.secondary">
                  Size
                </Typography>
                <Typography fontWeight="bold">
                  375.00 sq.ft. - 687.000 sq.ft
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={3} xs={6}>
            <Card sx={{ display: "flex", boxShadow: "none" }}>
              <Box padding={1}>
                <ApartmentIcon fontSize="large"></ApartmentIcon>
              </Box>
              <Box>
                <Typography variant="h6" color="text.secondary">
                  Project Size
                </Typography>
                <Typography fontWeight="bold">5 Building</Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={3} xs={6}>
            <Card sx={{ display: "flex", boxShadow: "none" }}>
              <Box padding={1}>
                <CurrencyRupeeIcon fontSize="large"></CurrencyRupeeIcon>
              </Box>
              <Box>
                <Typography variant="h6" color="text.secondary">
                  Avg.Price
                </Typography>
                <Typography fontWeight="bold">₹9.40 K/sq.ft</Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={3} xs={6}>
            <Card sx={{ display: "flex", boxShadow: "none" }}>
              <Box padding={1}>
                <HourglassEmptyIcon fontSize="large"></HourglassEmptyIcon>
              </Box>
              <Box>
                <Typography variant="h6" color="text.secondary">
                  Possession Starts
                </Typography>
                <Typography fontWeight="bold">Dec, 2024</Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={3} xs={6}>
            <Card sx={{ display: "flex", boxShadow: "none" }}>
              <Box padding={1}>
                <AssuredWorkloadIcon fontSize="large"></AssuredWorkloadIcon>
              </Box>
              <Box>
                <Typography variant="h6" color="text.secondary">
                  Configurations
                </Typography>
                <Typography fontWeight="bold">1,2 BHK Apartements</Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={3} xs={6}>
            <Card sx={{ display: "flex", boxShadow: "none" }}>
              <Box padding={1}>
                <DoneIcon fontSize="large"></DoneIcon>
              </Box>
              <Box>
                <Typography variant="h6" color="text.secondary">
                  Rera Id
                </Typography>
                <Typography fontWeight="bold">P52000030717</Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ justifyContent: "center", display: "flex", m: 5 }}>
          <Button
            variant="outlined"
            startIcon={<ShareIcon />}
            size="large"
            sx={{ m: 1 }}
            color="secondary"
          >
            Delete
          </Button>
          <Button
            variant="outlined"
            endIcon={<FavoriteBorderIcon />}
            size="large"
            sx={{ m: 1 }}
            color="secondary"
          >
            Send
          </Button>
          <Button variant="contained" size="large" sx={{ m: 1 }}>
            Ask for Details
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Information;
