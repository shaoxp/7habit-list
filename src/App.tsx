import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "./components/ProTip";
import StickyFooter from "./components/StickyFooter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppGlobalProvider } from "./components/AppGlobalProvider";
import { HabitListAppBar } from "./components/AppBar";
import HabitListAppDrawer from "./components/AppDrawer/AppDrawer";

export default function App() {
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppGlobalProvider>
        <HabitListAppBar />
        <HabitListAppDrawer />
        <Container>
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Material UI Create React App example in TypeScript
            </Typography>
            <ProTip />
          </Box>
        </Container>{" "}
      </AppGlobalProvider>
      <StickyFooter />
    </ThemeProvider>
  );
}
