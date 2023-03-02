import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import LocationCityIcon from "@mui/icons-material/LocationCity";

const Header = () => {
  return (
    <>
      <Container>
        <AppBar>
          <Toolbar sx={{ bgcolor: "orange" }}>
            <LocationCityIcon fontSize="large" />
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              GALAXY HEIGHT
            </Typography>
            <Button
              color="inherit"
              as={Link}
              to="/"
              sx={{ textDecoration: "none" }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              as={Link}
              to="/About"
              sx={{ textDecoration: "none" }}
            >
              About
            </Button>
            <Button
              color="inherit"
              as={Link}
              to="/Contact"
              sx={{ textDecoration: "none" }}
            >
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Header;
