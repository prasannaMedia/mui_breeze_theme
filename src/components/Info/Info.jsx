import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import auditImg from "../../assest/page-audit.svg";
import { Svg } from "../svg/Svg";
import rightImg from "../../assest/right.png";
import plusImg from "../../assest/plus.png";
import RemoveIcon from "@mui/icons-material/Remove";

import workspaceImg from "../../assest/workspace.svg";
export const Info = () => {
  const rightSectionData = [
    {
      id: 1,
      title: "Add your webpage URL and get the report in a click",
      detail:
        " Add the URL of your webpage and get the detailed report by clicking on the 'new page audit' button",
    },
    {
      id: 2,
      title:
        "Get insights into performance, SEO score, and overall opportunities to improve your webpage",
      detail:
        "You get details of your performance and SEO score plus the opportunities where you can improve your webpage results",
    },
    {
      id: 3,
      title: "Save the webpage audit report in the Breeze app",
      detail:
        "You can save your report of the webpage audit by clicking the 'save' button in the Breeze web application",
    },
  ];

  const [qaData, setQaData] = useState([
    {
      id: 1,
      question: "Which is the best tool for website audit?",
      ans: "Breeze is one of the best tools for website audit report. You can avail it for free in a beginner plan",
      open: true,
    },
    {
      id: 2,
      question: "What is website audit report? ",
      ans: "2Breeze is one of the best tools for website audit report. You can avail it for free in a beginner plan",
      open: false,
    },
    {
      id: 3,
      question: "Can I download the webpage audit report? ",
      ans: "3Breeze is one of the best tools for website audit report. You can avail it for free in a beginner plan",
      open: false,
    },
  ]);

  const handleCollapse = (id) => {
    setQaData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    );
  };

  return (
    <Box m={10} mb={2}>
      <Typography variant="h4" color="#71829c">
        Breeze is the best website audit tool you can find{" "}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        A glimpse of the 'Page Audit' feature inside the Breeze web application
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{ height: "80%", width: "85%", objectFit: "cover" }}
            component={"img"}
            mt={10}
            src={auditImg}
          ></Box>
        </Grid>
        <Grid item xs={12} md={6} mt={5}>
          <Typography variant="h4" textAlign={"left"}>
            Website audit report at your fingertips with Breeze
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            textAlign={"left"}
          >
            Access the detailed audit report for your webpage and look into
            opportunities
          </Typography>
          <Box display={"flex"} flexDirection={"column"} mt={2}>
            {rightSectionData.map((item) => {
              return (
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"flex-start"}
                >
                  <Box
                    component={"img"}
                    mr={2}
                    src={rightImg}
                    sx={{ height: "20px", width: "20px" }}
                  />
                  <Box textAlign="left">
                    <Typography fontSize={16} fontWeight={500}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.detail}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>

      <Box mt={10} position="relative" zIndex={1000}>
        <Box
          display="flex"
          flexDirection="column"
          mt={2}
          sx={{ background: "white" }}
        >
          {qaData.map((item) => (
            <Box
              key={item.id}
              display="flex"
              alignItems="flex-start"
              mb={5}
              sx={{
                borderBottom: "1px solid #d0d6df",
                padding: "10px",
                position: "relative",
              }}
            >
              {item.open ? (
                <RemoveIcon
                  sx={{ color: "green" }}
                  onClick={() => {
                    handleCollapse(item.id);
                  }}
                />
              ) : (
                <Box
                  component="img"
                  mr={2}
                  src={plusImg}
                  sx={{ height: "20px", width: "20px" }}
                  onClick={() => {
                    handleCollapse(item.id);
                  }}
                />
              )}

              <Box textAlign="left">
                <Typography mb={1} fontSize={16} fontWeight={500}>
                  {item.question}
                </Typography>
                {item.open && ( // Display details only when item.open is true
                  <Typography variant="body2" color="text.secondary">
                    {item.ans}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box mt={5}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6} textAlign={"left"} mt={15}>
            <Box mb={2}>
              <Typography
                variant="h5"
                fontWeight={500}
                color={"text.secondary"}
              >
                Sign up to
              </Typography>
              <Typography variant="h5">The Breeze Web App </Typography>
            </Box>
            <Typography variant="subtitle1" color={"text.secondary"}>
              Some of the features that make Breeze one of the best website
              toolkits available today.{" "}
            </Typography>
            <Box mt={2}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0962e8",
                  marginBottom: { xs: "10px", md: "0px" },
                }}
              >
                <Svg type={"arrow"} color={"#fff"} />
                Get Started
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component={"img"}
              src={workspaceImg}
              sx={{ height: "100%", width: "100%", objectFit: "cover" }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
      <Box mt={5} display={"flex"} alignItems={"end"} sx={{ height: "100%" }}>
        <Typography variant="body2">Breeze | Product | Page Audit</Typography>
      </Box>
    </Box>
  );
};
