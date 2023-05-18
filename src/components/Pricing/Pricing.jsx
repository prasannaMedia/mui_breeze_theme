import React from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Svg } from "../svg/Svg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00062A",
    },
    secondary: {
      main: "#00e7b9",
      contrastText: "#04538b",
    },
    text: {
      primary: "#5e5e8c",
      secondary: "#7970b3",
    },
  },
});

export const Pricing = () => {
  const cardsData = [
    {
      id: 1,
      title: "Freelancer: £0/Free",
    },
    {
      id: 2,
      title: "Starter: £150 pm/£1800 pa",
    },
    {
      id: 3,
      title: "Pro: £500 pm/£6000 pa",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box m={5} textAlign="left">
        <Card
          sx={{
            background:
              "linear-gradient(to bottom, #00062A , #03044C, #100181)",
            padding: "30px",
            borderRadius: "15px",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                mb={2}
                variant="h4"
                fontWeight={600}
                color="common.white"
              >
                Start managing your websites
              </Typography>
              <Typography variant="subtitle1" color="text.primary">
                The first comprehensive tool developed for Website Managers.
                Everything you need in one place for your team.
              </Typography>
              <Box mt={2} mb={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                    marginRight: "10px",
                    marginBottom: { xs: "10px", md: "0px" },
                  }}
                >
                  <Svg type="arrow" />
                  Get Started Free
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: "common.white", border: "1px solid #ffffff" }}
                >
                  Signup with Google
                </Button>
              </Box>
              <Typography variant="subtitle1" color="text.secondary">
                No credit card required
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                {cardsData.map((card) => (
                  <Card
                    key={card.id}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: "common.white",
                      padding: "10px",
                      borderRadius: "10px",
                      margin: "5px",
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <Svg type="circle_tick" />
                      <Typography ml={5}>{card.title}</Typography>
                    </Box>
                  </Card>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </ThemeProvider>
  );
};
