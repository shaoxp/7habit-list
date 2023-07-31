import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import { FirstFirstListType } from "../Data/Types";
import { AppConfig } from "../Config/AppConfig";

const FirstFirstListSectionGrid = styled(Grid)({
  // CSS here
  height: "100vh",

  "@media (min-width: 768px)": {
    height: "50vh",
  },
});

export type FirstFirstListSectionProps = {
  firstFirstListType: FirstFirstListType;
};

export default function FirstFirstListSection({
  firstFirstListType,
}: FirstFirstListSectionProps) {
  const bgColor = AppConfig.listColor[firstFirstListType].bgColor;
  return (
    <FirstFirstListSectionGrid item xs={12} md={6} bgcolor={bgColor}>
      Your content here
    </FirstFirstListSectionGrid>
  );
}
