import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import { Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function About() {
  const [validated, setValidated] = useState(true);

  return (
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
        <Typography variant="h4" component="h1" gutterBottom>
          Password Validator
        </Typography>
          {validated ? (
            <Stack spacing={3}> 
              {" "}
              <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
              />
              <TextField
                id="outlined-basic2"
                label="Password"
                type="password"
                variant="outlined"
              />{" "}
            </ Stack>
          ) : (
<Stack spacing={3}>        
            {" "}
            <TextField
            error
              id="outlined-basic"
              label="Password"
              type="password"
              helperText="Passwords do not match"
              variant="outlined"
            />
            <TextField
            error
              id="outlined-basic2"
              label="Password"
              type="password"
              variant="outlined"
            />{" "}
                  </Stack>
          )}

        <Box pt={3} maxWidth="md">
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Validate Password
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
