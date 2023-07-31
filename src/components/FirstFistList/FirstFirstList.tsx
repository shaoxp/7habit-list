import { Grid } from "@mui/material";
import FirstFirstListSection from "./FirstFirstListSection";
import { FirstFirstListType } from "../Data/Types";

export default function FirstFirstList() {
  return (
    <Grid container spacing={4} sx={{ mt: 1, mb: 1 }}>
      <FirstFirstListSection
        firstFirstListType={FirstFirstListType.UrgentImportant}
      />
      <FirstFirstListSection
        firstFirstListType={FirstFirstListType.NoUrgentImportant}
      />
      <FirstFirstListSection
        firstFirstListType={FirstFirstListType.UrgentNoImportant}
      />
      <FirstFirstListSection
        firstFirstListType={FirstFirstListType.NoUrgentNoImportant}
      />
    </Grid>
  );
}
