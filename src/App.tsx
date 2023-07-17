import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "./components/ProTip";
import StickyFooter from "./components/StickyFooter";

export default function App() {
  return (
    <>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI Create React App example in TypeScript
          </Typography>
          <ProTip />
        </Box>
      </Container>{" "}
      <StickyFooter />
    </>
  );
}
