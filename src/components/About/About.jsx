import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Svg } from "../svg/Svg";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
export const About = () => {
  const cardsdata = [
    {
      title: "Check Performance",
      detail: "It predicts an overall performance score of a    webpage",
      icon: <Svg type={"check-circle"} />,
    },
    {
      title: "Check Accessiblity",
      detail:
        "Accessiblity checks the oppertunities to improve accessiblity of your webpage ",
      icon: <Svg type={"check"} />,
    },
    {
      title: "Find out best practices",
      detail:
        "Best practices tells you the moral practices to follow for a webpage on the Internet",
      icon: <Svg type={"find_replace"} />,
    },
    {
      title: "keep Track of SEO score",
      detail:
        "SEO checks ensure that your page is following basic search engine optimization advice",
      icon: <Svg type={"art_track"} />,
    },
    {
      title: "Know PWA",
      detail: "PWA checks validate the aspects of a progressive web app",
      icon: <Svg type={"app_settings"} />,
    },
    {
      title: "Save Report",
      detail:
        "You can save the report on the breeze web application to folllow through later",
      icon: <Svg type={"save"} />,
    },
  ];

  return (
    <Box m={10}>
      <Box m={5}>
        <Typography
          variant="h4"
          color="#71829c"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          See how a web page is performing in the Breeze web application{" "}
        </Typography>
        <Typography variant="subtitle1" color={"text.secondary"}>
          Breeze assess overall performance, SEO score, and issue in a webpage{" "}
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {cardsdata.map((card) => {
          return (
            <Grid item xs={12} md={4} lg={4} zIndex={10}>
              <Card
                sx={{
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                  minHeight: "170px",
                }}
                m={5}
              >
                <CardContent>
                  <Box>{card.icon}</Box>
                  <Typography variant="h6">{card.title}</Typography>
                  <Typography variant="subtitle1" color={"text.secondary"}>
                    {card.detail}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
