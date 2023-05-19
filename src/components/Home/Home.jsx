import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import ResponsiveAppBar from "../AppBar/AppBar";
import auditImg from "../../assest/page-audit.svg";
import { Svg } from "../svg/Svg";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

const theme = createTheme({
  palette: {
    primary: {
      main: "#041324",
    },
    secondary: {
      main: "#00e7b9",
      contrastText: "#04538b",
    },
    text: {
      primary: "#ffff",
      secondary: "#1c5467",
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ backgroundColor: "#0963e8" }} textAlign="left">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: "100%",
            }}
          >
            <ResponsiveAppBar />
            <Box p={3}>
              <Typography
                variant="h4"
                color={theme.palette.text.primary}
                component="h4"
                mb={2}
              >
                Get website audit report in a click with Breeze application
              </Typography>
              <Typography variant="subtitle1" color="grayText">
                Breeze avails you detailed audit behind website pages within few
                steps.
              </Typography>
              <Box display="flex" mt={10}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                    marginRight: "10px",
                  }}
                >
                  <Svg type="arrow" />
                  Get A Free Workspace
                </Button>
                <Button sx={{ backgroundColor: "#060e3b", color: "white" }}>
                  <WorkOutlineOutlinedIcon style={{ marginRight: "5px" }} />
                  Explore Breeze
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            // display: { xs: "none", md: "block" },
            // position: "relative",
            transform: { xs: "none", md: "skewX(-8deg)" },
            marginLeft: { xs: 0, md: "-50px" },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#0963e8",
              height: "100%",
              borderRightColor: "transparent",
              zIndex: 1,
            }}
          >
            <Box
              p={3}
              sx={{
                transform: { xs: "none", md: "skewX(8deg)" },
              }}
            >
              <Box display="flex" justifyContent="end">
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Svg type="logout" />
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.text.secondary,
                    marginLeft: "30px",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  Request Demo
                </Button>
              </Box>
              <Box
                sx={{
                  marginLeft: { xs: "0px", md: "100px" },
                }}
                pt={3}
                justifyContent={"end"}
              >
                <img
                  src={auditImg}
                  alt="Audit"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Home;
