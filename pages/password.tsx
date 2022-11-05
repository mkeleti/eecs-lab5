import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import { Stack, TextField } from "@mui/material";
import { useState, useRef } from "react";
import Head from "next/head";

export default function Password() {
  const [validated, setValidated] = useState({ valid: true, error: "" });
  const Password1 = useRef<string>();
  const Password2 = useRef<string>();
  function Validate() {
    if (
      Password1.current?.value != undefined &&
      Password2.current?.value != undefined
    ) {
      if (
        Password1.current.value.length < 8 &&
        Password2.current.value.length < 8
      ) {
        setValidated({
          valid: false,
          error: "Passwords must be at least 8 characters",
        });
      } else if (Password1.current.value === Password2.current.value) {
        setValidated({ valid: true, error: "" });
      } else {
        setValidated({ valid: false, error: "Passwords do not match" });
      }
    }
  }
  let HelperText: string;
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Password</title>
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
          Password Validator
        </Typography>
        {validated.valid ? (
          <Stack spacing={3}>
            {" "}
            <TextField
              required
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              inputMode="text"
              inputRef={Password1}
            />
            <TextField
              required
              id="outlined-basic2"
              label="Password"
              type="password"
              variant="outlined"
              inputMode="text"
              inputRef={Password2}
            />{" "}
          </Stack>
        ) : (
          <Stack spacing={3}>
            {" "}
            <TextField
              error
              required
              id="outlined-basic"
              label="Password"
              type="password"
              helperText={validated.error}
              variant="outlined"
              inputMode="text"
              inputRef={Password1}
            />
            <TextField
              error
              required
              id="outlined-basic2"
              label="Password"
              type="password"
              variant="outlined"
              inputMode="text"
              inputRef={Password2}
            />{" "}
          </Stack>
        )}

        <Box pt={3} maxWidth="md">
          <Button
            variant="contained"
            onClick={() => {
              Validate();
            }}
          >
            Validate Password
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
