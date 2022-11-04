import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import Head from "next/head";
import { Button, ButtonGroup, Card, Paper, Stack } from "@mui/material";
import Image from "next/image";

export default function Home() {
  interface links {
    label: string,
    link: string,
 }
  const links:links[] = [
    { label: "Password Validator", link: "/password" },
    { label: "Slideshow", link: "/slideshow" },
    { label: "Personal Profile", link: "/profile" },
    { label: "CSS Manipulation", link: "/css-manip" },
    { label: "Publication", link: "/epub" },
    
  ]

  
  const buttons = links.map((link) =>
    <Button href={link.link} component={Link} key={link.label}>{link.label}</Button>);
  return (
    <Container maxWidth="lg">
      <Head>
        <title>My first? webpage</title>
      </Head>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" mt={5} component="h1" gutterBottom>
          Welcome to my first? webpage
        </Typography>
        <Stack spacing={3} mt={5} mb={10}>
          <Typography variant="h5" mx="auto" component="h5">
            With HTML you can write <u>Underlined Words</u>,{" "}
            <i>italicized words</i>, and <b>bold words</b>!
          </Typography>
          <Typography variant="h5" text-center mx="auto" component="h5">
            You can also insert images as well!
          </Typography>
        </Stack>
        <Image
          src="/PillarsOfCreation.png"
          width="582"
          height="640"
          alt="The Pillars of Creation!"
        />
        <Typography variant="h6" pb={10} component="h6">
          Pillars of Creation - James Webb Telescope
        </Typography>
          <Stack mx="auto" spacing={3}>
            <Typography text-center variant="h5" mx="auto" component="h5">
              Assignments:
            </Typography>
            <ButtonGroup size="large" aria-label="large button group">
              {buttons}
            </ButtonGroup>
          </Stack>
      </Box>
    </Container>
  );
}
