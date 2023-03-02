import React from "react";
import { Typography, Box, Card, Grid } from "@mui/material";
import Groups2Icon from "@mui/icons-material/Groups2";
import WaterIcon from "@mui/icons-material/Water";
import ElderlyIcon from "@mui/icons-material/Elderly";
import TtyIcon from "@mui/icons-material/Tty";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import ElectricMeterIcon from "@mui/icons-material/ElectricMeter";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { bgcolor } from "@mui/system";
const Amenties = () => {
  return (
    <>
      <Typography variant="h3">Amenities</Typography>
      <Box sx={{ w: "100%", my: 2, boder: "solid", my: 3 }}>
        <Grid container direction={"row"} spacing={2}>
          <Grid item md={2} xs={3}>
            <Card sx={{ boxShadow: "none", textAlign: "center" }}>
              <Box padding={1}>
                <Groups2Icon fontSize="large" />
              </Box>
              <Box>
                <Typography fontWeight="bold">
                  Gate <br />
                  Community
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={2} xs={3}>
            <Card sx={{ boxShadow: "none", textAlign: "center" }}>
              <Box padding={1}>
                <WaterIcon fontSize="large" />
              </Box>
              <Box>
                <Typography fontWeight="bold">
                  Rain Water
                  <br />
                  Harvesting
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={2} xs={3}>
            <Card sx={{ boxShadow: "none", textAlign: "center" }}>
              <Box padding={1}>
                <ElderlyIcon fontSize="large"></ElderlyIcon>
              </Box>
              <Box>
                <Typography fontWeight="bold">
                  Senior Citizen
                  <br />
                  siteout
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={2} xs={3}>
            <Card sx={{ boxShadow: "none", textAlign: "center" }}>
              <Box padding={1}>
                <TtyIcon fontSize="large" />
              </Box>
              <Box>
                <Typography fontWeight="bold">Intercom</Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={2} xs={3}>
            <Card sx={{ boxShadow: "none", textAlign: "center" }}>
              <Box padding={1}>
                <HomeIcon fontSize="large" />
              </Box>
              <Box>
                <Typography fontWeight="bold">Club House</Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={2} xs={3}>
            <Card sx={{ boxShadow: "none", textAlign: "center" }}>
              <Box padding={1}>
                <DirectionsBikeIcon fontSize="large" />
              </Box>
              <Box>
                <Typography fontWeight="bold">
                  Cycling &<br />
                  Jogginf Track
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={2} xs={3}>
            <Card sx={{ boxShadow: "none", textAlign: "center" }}>
              <Box padding={1}>
                <AddRoadIcon fontSize="large" />
              </Box>
              <Box>
                <Typography fontWeight="bold">Internal Road</Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={2} xs={3}>
            <Card sx={{ boxShadow: "none", textAlign: "center" }}>
              <Box padding={1}>
                <ElectricMeterIcon fontSize="large" />
              </Box>
              <Box>
                <Typography fontWeight="bold">Meter Room</Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={2} xs={3}>
            <Card sx={{ boxShadow: "none", textAlign: "center" }}>
              <Box padding={1}>
                <BedroomBabyIcon fontSize="large" />
              </Box>
              <Box>
                <Typography fontWeight="bold">
                  Children's
                  <br />
                  Play Area
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={2} xs={3}>
            <Card sx={{ boxShadow: "none", textAlign: "center" }}>
              <Box padding={1}>
                <LocalHospitalIcon fontSize="large" />
              </Box>
              <Box>
                <Typography fontWeight="bold">
                  Sewage
                  <br />
                  Treatment
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={2} xs={3}>
            <Card sx={{ boxShadow: "none", textAlign: "center" }}>
              <Box padding={1}>
                <SelfImprovementIcon fontSize="large" />
              </Box>
              <Box>
                <Typography fontWeight="bold">
                  Yoga/Meditation
                  <br />
                  Area
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item md={2} xs={3}>
            <Card
              sx={{
                boxShadow: "none",
                textAlign: "center",
                bgcolor: "#ECF2FF",
              }}
            >
              <Box padding={1}>
                <ReadMoreIcon fontSize="large" />
              </Box>
              <Box>
                <Typography fontWeight="bold" color="primary">
                  +12
                  <br />
                  More
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Amenties;
