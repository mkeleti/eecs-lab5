import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import Image from "next/image";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ButtonGroup, SvgIcon } from "@mui/material";
import Head from "next/head";

export default function About() {
  const [imgsource, setSource] = useState<imgsrc>({ src: "/cat1.jpg", id: 0 });

  type imgsrc = { src: string; id: number };

  const ChangeImage = (dir: "left" | "right") => {
    const images: imgsrc[] = [
      { src: "/cat1.jpg", id: 0 },
      { src: "/cat2.jpg", id: 1 },
      { src: "/cat3.jpg", id: 2 },
      { src: "/cat4.jpg", id: 3 },
      { src: "/cat5.jpg", id: 4 },
      { src: "/cat6.png", id: 5 },
    ];
    let newID: number = 0;
    if (dir == "left") {
      if (imgsource.id != 0) {
        newID = imgsource.id - 1;
      } else {
        newID = images.length - 1;
      }
    } else {
      if (imgsource.id != images.length - 1) {
        newID = imgsource.id + 1;
      } else {
        newID = 0;
      }
    }
    let newImage: imgsrc = images[newID];
    setSource(newImage);
  };

  return (
    <Container maxWidth="lg">
      <Head>
        <title>Slideshow</title>
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
        <Typography variant="h4" component="h1" gutterBottom>
          Cat Slideshow
        </Typography>
        <Image
          src={imgsource.src}
          alt="slideshow"
          unoptimized
          height={500}
          width={500}
        />
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => {
              ChangeImage("left");
            }}
          >
            <ChevronLeftIcon color="primary" fontSize="large" />
          </Button>
          <Button
            onClick={() => {
              ChangeImage("right");
            }}
          >
            <ChevronRightIcon color="primary" fontSize="large" />
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
