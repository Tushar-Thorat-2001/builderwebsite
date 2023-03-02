import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CardActionArea,
} from "@mui/material";
import MultiCards from "../components/MultiCards";
import FlexCard from "../components/flexcard";
import Information from "../components/Information";
import Amenties from "../components/Amenties";

const Home = () => {
  return (
    <>
      <FlexCard />
      <Information />
      <Amenties />

      <MultiCards />
    </>
  );
};

export default Home;
