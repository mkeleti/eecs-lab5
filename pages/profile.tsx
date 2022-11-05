import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import Head from "next/head";
import { StyledEngineProvider } from '@mui/material/styles';

export default function Profile() {
  return (
    <StyledEngineProvider injectFirst>
      <Head>
        <title>Profile</title>
        <link rel="stylesheet" type="text/css" href="/profilestyles.css"></link>
      </Head>
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>My Profile</h1>
        <img src="/profilephoto.jpeg" height="100"></img>
        <h2 className="bioHeader" >Biography</h2>
        <p>
          Current student enrolled at University of Kansas in their Computer
          Science B.S. Program with hands-on experience gained through
          student-centric, growth-oriented internships. Recognized for
          possessing a strong passion for student outreach through departmental
          Computer Science clubs and organizations.
        </p>
        <h2>Favorite Websites</h2>
        <p className="links">
          <a href="http://cachemonet.com">cachemonet.com</a>
          <br />
          <a href="https://csh.bz/2016/01/11/">csh.bz</a>
          <br />
          <a href="https://www.desolhar-philo.com">desolhar-philo.com</a>
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qtf0nlXLGis"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>
    </Container>
    </StyledEngineProvider>
  );
}
