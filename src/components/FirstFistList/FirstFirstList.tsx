import { Grid, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FirstFirstList() {
  return (
    <Grid container spacing={4} sx={{ mt: 4, mb: 4 }}>
      <Grid md={12} lg={6}>
        <Item>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          ></Paper>
        </Item>
      </Grid>
      <Grid md={12} lg={6}>
        <Item>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          ></Paper>
        </Item>
      </Grid>
      <Grid md={12} lg={6}>
        <Item>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          ></Paper>
        </Item>
      </Grid>
      <Grid md={12} lg={6}>
        <Item>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          ></Paper>
        </Item>
      </Grid>
    </Grid>
  );
}
