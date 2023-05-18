import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../assest/breeze-logo (1).svg";
import googleChromeImg from "../../assest/chrome_store.png";
import Rating from "react-rating-stars-component";

export const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "#011027", color: "white" }}
      component={"footer"}
      textAlign={"left"}
    >
      <Box sx={{ borderBottom: "1px solid #3f4a5c" }} p={4}>
        <Box
          component={"img"}
          src={logo}
          sx={{
            display: {
              xs: "none",
              md: "flex",
              width: "100px",
              height: "50px",
            },
          }}
        />
      </Box>
      <Box sx={{ borderBottom: "1px solid #3f4a5c" }} p={4}>
        <Grid container spacing={10}>
          <Grid item md={4} xs={12}>
            <Typography variant="h6" mb={2}>
              Features
            </Typography>

            <Box display={"flex"}>
              <Box display={"flex"} flexDirection={"column"} mr={5} gap={1}>
                <Typography variant="subtitle2" color="GrayText">
                  Cookie & Cache{" "}
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                  Responsive Layout
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                  Take Screenshot
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                  Live Edit
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                  SEO Panel
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                  What is?
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                  Media{" "}
                </Typography>
              </Box>
              <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Typography variant="subtitle2" color="GrayText">
                  Environment
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                  Browswer Support{" "}
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                  Tech Stack{" "}
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                  Screenshot Audit
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                  Team Sharing
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                  Page Manager
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                  Checklist
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item md={4} xs={12}>
            <Typography variant="h6" mb={2}>
              Company
            </Typography>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography variant="subtitle2" color="GrayText">
                About Us
              </Typography>
              <Typography variant="subtitle2" color="GrayText">
                Careers
              </Typography>
              <Typography variant="subtitle2" color="GrayText">
                Contact Us
              </Typography>
              <Typography variant="subtitle2" color="GrayText">
                Blog
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box display={"flex"} flexDirection={"column"} gap={2}>
              <Box
                component={"img"}
                src={googleChromeImg}
                sx={{ height: "50%", width: "50%", objectFit: "cover" }}
              ></Box>
              <Typography variant="h6">Check out our 9 reviews</Typography>
              <Rating
                count={5}
                value={4}
                size={24}
                activeColor="#00a154"
                edit={false}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box p={4}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Typography variant="subtitle2" color="GrayText">
              © SCube.co
            </Typography>
            <Typography variant="subtitle2" color="GrayText">
              SCube.co & SCube Theme is trading name for SCube Digital Limited.
              SCube is Trademarked with UK Government.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              display={"flex"}
              height={"100%"}
              justifyContent={"end"}
              alignItems={"end"}
              spacing={10} // Add spacing between items
            >
              <Typography variant="subtitle2" mr={1} color="GrayText">
                Terms & Policies{" "}
              </Typography>
              <Typography variant="subtitle2" mr={1} color="GrayText">
                Privacy Policy
              </Typography>
              <Typography variant="subtitle2" mr={1} color="GrayText">
                Certificates{" "}
              </Typography>
              <Typography variant="subtitle2" color="GrayText">
                Cookie Policy{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
