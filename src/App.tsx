import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StickyFooter from "./components/StickyFooter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppGlobalProvider } from "./components/AppGlobalProvider";
import { HabitListAppBar } from "./components/AppBar";
import HabitListAppDrawer from "./components/AppDrawer/AppDrawer";
import FirstFirstList from "./components/FirstFistList/FirstFirstList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, Toolbar } from "@mui/material";

export default function App() {
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppGlobalProvider>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <HabitListAppBar />
          <HabitListAppDrawer />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Router>
              <Routes>
                <Route path="/" element={<FirstFirstList />}></Route>
              </Routes>
            </Router>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
          </Box>
        </Box>
      </AppGlobalProvider>
      <StickyFooter />
    </ThemeProvider>
  );
}
